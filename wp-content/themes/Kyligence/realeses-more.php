<?php if (!defined('ABSPATH')) {
    exit;
    /*
    Template Name: Realeses More
    */
}
get_header();
?>
<style>
.vc_btn3.vc_btn3-color-sky.vc_btn3-style-outline {
    color: #5AA1E3;
    border-color: #5AA1E3;
    background-color: transparent;
}
.vc_btn3.vc_btn3-size-md.vc_btn3-style-outline, .vc_btn3.vc_btn3-size-md.vc_btn3-style-outline-custom {
    padding: 13px 19px;
	margin-bottom: 30px !important;
}

.vc_btn3.vc_btn3-color-sky, .vc_btn3.vc_btn3-color-sky.vc_btn3-style-flat {
    width: 200px;
}
.vc_btn3.vc_btn3-shape-square {
    border-radius: 0;
}
.vc_btn3.vc_btn3-style-outline, .vc_btn3.vc_btn3-style-outline-custom, .vc_btn3.vc_btn3-style-outline-custom:focus, .vc_btn3.vc_btn3-style-outline-custom:hover, .vc_btn3.vc_btn3-style-outline:focus, .vc_btn3.vc_btn3-style-outline:hover {
    border-width: 2px;
}
.vc_btn3.vc_btn3-icon-left {
    text-align: left;
}
.vc_btn3.vc_btn3-icon-left, .vc_btn3.vc_btn3-icon-right {
    position: relative;
}
.vc_general.vc_btn3 {
    display: inline-block;
    margin-bottom: 0;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    background-color: transparent;
    color: #5472D2;
    border: 1px solid transparent;
    box-sizing: border-box;
    word-wrap: break-word;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: relative;
    top: 0;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    line-height: normal;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    font-size: 14px;
    padding: 14px 20px;
}
.vc_btn3.vc_btn3-color-sky.vc_btn3-style-outline:hover {
    color: #fff;
    border-color: #5AA1E3;
    background-color: #5AA1E3;
}
</style>
<?php
global $query;
$taxonomy = 'news-room';
$term_args = array('orderby' => 'name','order' => 'ASC');
$terms = get_terms($taxonomy,$term_args);
if($terms) {
    ?>
    <section id="layout" class="dfd-default-template pages">
        <div class="row boxed">
            <div class="blog-section no-sidebars">
                <section id="main-content" role="main" class="twelve columns">
                    <div class="dfd-content-wrap dfd-page_simple isotope-columns-3 container">
					<div style="margin: 20px 10px 30px 10px;">
                      <h3 class="section-header-title" style="text-align: center;"><?php echo $terms[0]->name; ?></h3>
                    </div>
                        <table class="aligncenter" style="border:none !important;background:none;width:100%;">
                            <tbody>
                            <?php
                            $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
                            $args = array(
                                'post_type' => 'news-room',
                                'posts_per_page' => 10,
                                'paged' => $paged,
                                'tax_query' => array(
                                    array(
                                        'taxonomy' => 'news-room',
                                        'terms' => array($terms[0]->term_id),
                                        'include_children' => true,
                                        'operator' => 'IN'
                                    )
                                )
                            );
                            $query = new WP_Query($args);
                            if ($query->have_posts()) : ?>
                                <?php while ($query->have_posts()) :$query->the_post();
                                    $url = get_post_meta(get_the_ID(), 'url_news', false);
                                    $url = ($url!= null)?$url[0]:esc_url( apply_filters( 'the_permalink', get_permalink( get_the_ID() ), get_the_ID() ) );
                                    ?>
                                    <tr style="background: none !important;">
                                        <td style="text-align: left; padding-left: 10px;"><?php the_time('Y/m/d'); ?></td>
                                        <td style="text-align: left; padding-left: 200px;">
                                            <a href="<?php echo $url; ?>">
                                                <?php the_title(); ?>
                                            </a>
                                        </td>
                                    </tr>
                                <?php endwhile;
                                ?>

                            <?php else : ?>
                                <tr>
                                    <td style="text-align: left; padding-left: 10px;"></td>
                                    <td style="text-align: center;">
                                        <?php _e('Sorry, no posts matched your criteria.'); ?>
                                    </td>
                                </tr>
                            <?php endif; ?>
                            </tbody>
                        </table>
                         
					  <?php if ($query->max_num_pages>$paged) :?>
						<div class="vc_general vc_btn3 vc_btn3-size-md vc_btn3-shape-square vc_btn3-style-outline vc_btn3-icon-left vc_btn3-color-sky" style="margin: 20px 10px 0px 363px;">
	                        <?php echo get_next_posts_link( 'Next Page', $query->max_num_pages ); ?>
						</div>
					  <?php endif;?>
                   </div>
                </section>
            </div>
        </div>
    </section>
    <?php
}
get_footer();
?>
