<?php if (!defined('ABSPATH')) {
    exit;
}
/*
Template Name: News Room
*/
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
	margin-bottom: 30px;
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
  .learn_more{text-align:left;    display: block;
    min-height: 50px;}
  a.learn_more_link{padding: 11px 35px; 
	border: 1px solid #5AA1E3; color:#5AA1E3;border-radius:4px;
    background-image: url('http://kyligence.trustylabs.mg/wp-content/uploads/2017/05/arrow.png');
    background-repeat: no-repeat;
    background-position: -13px -1px; 
  }
  a.learn_more_link:hover , :active .learn_more_link{padding: 11px 35px;
	border: 1px solid #5AA1E3;
  	background-image: url('http://kyligence.trustylabs.mg/wp-content/uploads/2017/05/arrow_hover.png');
    background-repeat: no-repeat;
    background-position:-1px 3px; 
	background-color:#5AA1E3;
	color:#fff;
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
$taxonomy = 'news-room';
$term_args = array('orderby' => 'name','order' => 'Desc');
$terms = get_terms($taxonomy,$term_args);
if($terms) {
    $count = 1;
    foreach ($terms as $term) {
        ?>
<section style="margin-bottom:30px"  id="layout" class="dfd-default-template pages" <?php echo ($count % 2 == 0)?'style="background-color: #f4f4f4"':''?>
            <div class="row boxed ">
                <div class="blog-section no-sidebars">
                    <section id="main-content" role="main" class="twelve columns">
                        <div class="dfd-content-wrap dfd-page_simple isotope-columns-3 container">
						<div style="margin: 20px 10px 30px 10px;">
                             <h3 class="section-header-title" style="text-align: center;"><?php echo $term->name; ?></h3>
                        </div>
                            <table class="aligncenter" style="border:none !important;background:none;width:100%;">
                                <tbody>
                                <?php
                                $args = array(
                                    'post_type' => 'news-room',
                                    'posts_per_page' => 5,
                                    'tax_query' => array(
                                        array(
                                            'taxonomy' => 'news-room',
                                            'terms' => array($term->term_id),
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
                                            <td style="text-align: left;padding-left: 10px;"><?php the_time('Y/m/d'); ?></td>
                                            <td style="text-align: left;padding-left: 50px;">
                                                <a href="<?php echo $url; ?>">
                                                    <?php the_title(); ?>
                                                </a>
                                            </td>
                                        </tr>
                                    <?php endwhile; ?>

                                <?php else : ?>
                                    <tr>
                                        <td style="text-align: left; padding-left: 20px;"></td>
                                        <td style="text-align: center;">
                                            <?php _e('Sorry, no posts matched your criteria.'); ?>
                                        </td>
                                    </tr>
                                <?php endif; ?>
                                </tbody>
                            </table>                    
							  
							  <div class="learn_more" style="margin: 20px 10px 0px 145px;">
	                             <a class="learn_more_link"
								    href="<?php echo $term->slug; ?>" title="">
								   <i class="vc_btn3-icon typcn typcn-chevron-right-outline"></i>
								   View All</a>
							  </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
        <?php
        $count++;
    }
}
get_footer();
?>
