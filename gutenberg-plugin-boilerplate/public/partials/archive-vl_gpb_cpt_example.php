<?php 

	$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
	$loop = new WP_Query( array( 'post_type' => 'vl_gpb_cpt_example',
	        'posts_per_page' => 10,
	        'paged'          => $paged )
	);

	get_header();
?>

	<main role="main" aria-label="Content" class="vl_gpb_editor__wrapper">

		<nav class="pagination">
        <?php vl_gpb_pagination_bar( $loop ); ?>
    </nav>

    <h1> GPB CPTs </h1>

		<?php 
			if($loop->have_posts()) : while($loop->have_posts()) : $loop->the_post(); 

			$meta_data = get_post_meta(get_the_ID());

			$title = $meta_data['vl_gpb_editor__title'][0];  

			?>

		<!-- section -->
			<div class="vl_gpb_editor">
			 <h1 class="vl_gpb_editor__title"> <?php echo $title; ?> </h1>
			</div>



			<?php endwhile; endif; ?>

			<?php wp_reset_postdata(); ?>

			<nav class="pagination">
        <?php vl_gpb_pagination_bar( $loop ); ?>
    </nav>

	</main>

<?php get_footer(); ?>
