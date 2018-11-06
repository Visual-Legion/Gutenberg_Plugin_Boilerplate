<?php
 
/**
* Add meta
*/
if(!function_exists('vl_gpb_add_query_meta')) {
  function vl_gpb_add_query_meta($wp_query = "") {

      //return In case if wp_query is empty or postmeta already exist
      if( (empty($wp_query)) || (!empty($wp_query) && !empty($wp_query->posts) && isset($wp_query->posts[0]->postmeta)) ) { return $wp_query; }

      $sql = $postmeta = '';
      $post_ids = array();
      $post_ids = wp_list_pluck( $wp_query->posts, 'ID' );
      if(!empty($post_ids)) {
        global $wpdb;
        $post_ids = implode(',', $post_ids);
        $sql = "SELECT meta_key, meta_value, post_id FROM $wpdb->postmeta WHERE post_id IN ($post_ids)";
        $postmeta = $wpdb->get_results($sql, OBJECT);
        if(!empty($postmeta)) {
          foreach($wp_query->posts as $pKey => $pVal) {
            $wp_query->posts[$pKey]->postmeta = new StdClass();
            foreach($postmeta as $mKey => $mVal) {
              if($postmeta[$mKey]->post_id == $wp_query->posts[$pKey]->ID) {
                $newmeta[$mKey] = new stdClass();
                $newmeta[$mKey]->meta_key = $postmeta[$mKey]->meta_key;
                $newmeta[$mKey]->meta_value = maybe_unserialize($postmeta[$mKey]->meta_value);
                $wp_query->posts[$pKey]->postmeta = (array) array_merge((array) $wp_query->posts[$pKey]->postmeta, (array) $newmeta);
                unset($newmeta);
              }
            }
          }
        }
        unset($post_ids); unset($sql); unset($postmeta);
      }
      return $wp_query;
  }
}

class My_Rest_Server extends WP_REST_Controller {
 
  //The namespace and version for the REST SERVER
  var $my_namespace = 'vl_gpb_cpt_example/v';
  var $my_version   = '1';
 
  public function register_routes() {
    $namespace = $this->my_namespace . $this->my_version;
    $base      = 'examples';
    register_rest_route( $namespace, '/' . $base, array(
      array(
          'methods'         => WP_REST_Server::READABLE,
          'callback'        => array( $this, 'get_gpb_cpt_examples' ),
          // 'permission_callback'   => array( $this, 'get_gpb_cpt_example_permissions' )
        ),
    )  );
    register_rest_route( $namespace, '/' . $base . '/latest', array(
      array(
          'methods'         => WP_REST_Server::READABLE,
          'callback'        => array( $this, 'get_gpb_cpt_latest' ),
          // 'permission_callback'   => array( $this, 'get_gpb_cpt_example_permissions' )
        ),
    )  );
  }
 
  // Register our REST Server
  public function hook_rest_server(){
    add_action( 'rest_api_init', array( $this, 'register_routes' ) );
  }
 
  // public function get_gpb_cpt_example_permissions(){
  //   if ( ! current_user_can( 'edit_posts' ) ) {
  //         return new WP_Error( 'rest_forbidden', esc_html__( 'You do not have permissions to view this data.', 'my-text-domain' ), array( 'status' => 401 ) );
  //     }
 
  //     // This approach blocks the endpoint operation. You could alternatively do this by an un-blocking approach, by returning false here and changing the permissions check.
  //     return true;
  // }
 
  // public function get_gpb_cpt_examples( WP_REST_Request $request ){
  //   //Let Us use the helper methods to get the parameters
  //   $category = $request->get_param( 'category' );
  //   $post = get_posts( array(
  //         'category'      => $category,
  //           'posts_per_page'  => 1,
  //           'offset'      => 0
  //   ) );
 
  //     if( empty( $post ) ){
  //       return null;
  //     }
 
  //     return $post[0]->post_title;
  // }

  public function get_gpb_cpt_examples( WP_REST_Request $request ) {

  	$params = $request->get_params();
  	// $type = $params['lol'];

  	$order = '>='; // past or upcoming, default upcoming
  	$per_page = 5;

  	if ($params && array_key_exists('vl_gpb_page_order', $params)) {
  		$order = $params['vl_gpb_page_order'];
  	}
  	if ($params && array_key_exists('vl_gpb_page_per_page', $params)) {
  		$per_page = $params['vl_gpb_page_per_page'];
  	}

	  $today = date('c');

		$args = array(
		    'post_type' => 'vl_gpb_cpt_example',
		    'posts_per_page' => $per_page,
		    // 'meta_key' => 'vl_gpb_start_date',
		    'orderby'           => 'meta_value_num',
		    'orderby' => 'meta_value_num',
		    'order' => 'ASC'
		);

		$upcoming_events_querry = new WP_Query($args);


		if ( empty( $upcoming_events_querry ) ) {
	    return new WP_Error( 'no_vl_gpb_cpt_example', 'Couldn\'t find any GPB CPT examples matching your query', array( 'status' => 404 ) );
	  }

		// return $upcoming_events_querry->posts;
		return vl_gpb_add_query_meta($upcoming_events_querry)->posts;
		// return $type;
	}

  public function get_gpb_cpt_latest( WP_REST_Request $request ) {

    $args = array(
        'post_type' => 'vl_gpb_cpt_example',
        'posts_per_page' => 1,
        // 'meta_key' => 'vl_gpb_start_date',
        'orderby'           => 'meta_value_num',
        'orderby' => 'meta_value_num',
        'order' => 'DESC'
    );

    $upcoming_events_querry = new WP_Query($args);


    if ( empty( $upcoming_events_querry ) ) {
      return new WP_Error( 'no_vl_gpb_cpt_example', 'Couldn\'t find any GPB CPT examples', array( 'status' => 404 ) );
    }

    // return $upcoming_events_querry->posts;
    return vl_gpb_add_query_meta($upcoming_events_querry)->posts;
    // return $type;
  }
 
  // public function add_post_to_category_permission(){
  //   if ( ! current_user_can( 'edit_posts' ) ) {
  //         return new WP_Error( 'rest_forbidden', esc_html__( 'You do not have permissions to create data.', 'my-text-domain' ), array( 'status' => 401 ) );
  //     }
  //     return true;
  // }
 
  // public function add_post_to_category( WP_REST_Request $request ){
  //   //Let Us use the helper methods to get the parameters
  //   $args = array(
  //     'post_title' => $request->get_param( 'title' ),
  //     'post_category' => array( $request->get_param( 'category' ) )
  //   );
 
  //   if ( false !== ( $id = wp_insert_post( $args ) ) ){
  //     return get_post( $id );
  //   }
 
  //   return false;
    
    
  // }
}
 
$my_rest_server = new My_Rest_Server();
$my_rest_server->hook_rest_server();