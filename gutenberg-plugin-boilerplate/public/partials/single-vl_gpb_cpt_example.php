<?php 
	get_header(); 

	// Retrieves the stored value from the database

	global $post;


	wp_nonce_field( basename( __FILE__ ), 'vl_meta_nonce' );
	$meta_data = get_post_meta(get_the_ID());

	$title = $meta_data['vl_gpb_editor__title'][0];
	

?>

	<main role="main" aria-label="Content" class="vl_gpb_editor">
			 <h1 class="vl_gpb_editor__title"> <?php echo $title; ?> </h1>
	</main>

<?php get_footer(); ?>
