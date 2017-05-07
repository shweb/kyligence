<?php if (!defined('ABSPATH')) {
    exit;
}
/*
Template Name: Careers-Finance
*/
get_header();
$taxonomy = 'join-us';
$term_args = array('orderby' => 'name','order' => 'ASC');
$terms = get_terms($taxonomy,$term_args);
?>
<section id="layout" class="dfd-default-template pages">
    <div class="row boxed ">
        <div class="blog-section no-sidebars">
            <div style="margin: 20px 10px 30px 10px;">
                <?php if($terms[0]):?>
                    <ul>
                        <h3 class="section-header-title" style="text-align: center;"><?php echo $terms[0]->name; ?></h3>
                    </ul>
                <?php endif;?>
            </div>
            <section id="main-content" role="main" class="twelve columns">
                <div class="dfd-content-wrap dfd-page_simple isotope-columns-3 container">
                    <table class="aligncenter" style="border:none !important;background:none;width:100%;">
                        <thead style="width: 100%;">
                        <tr style="height:100px;background-color: #00A0D1">
                            <th style="width: 45%;text-align: center;">TITLE</th><th style="width: 45%;text-align: center;">LOCATION</th><th style="width: 45%;text-align: center;">CREATE AT</th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php
                        $args = array(
                            'post_type' => 'Careers',
                            'tax_query' => array(
                                array(
                                    'taxonomy' => 'join-us',
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

                                    <td style="text-align: left;text-align: center;">
                                        <?php if (has_post_thumbnail()) : ?>
                                            <?php the_post_thumbnail('thumbnail', array('class' => 'img-responsive alignleft')); ?>
                                        <?php endif; ?>
                                        <div>
                                            <p><strong style="text-transform:capitalize;"><a href="<?php echo $url; ?>"><?php the_title(); ?></a></strong></p>
                                            <p><a href="<?php echo $url; ?>"><?php the_content(); ?></a></p>
                                        </div>
                                    </td>
                                    <td style="text-align: center;"> Shanghai - Chine</td>
                                    <td style="text-align: center;"><?php the_time('Y/m/d'); ?></td>
                                </tr>
                            <?php endwhile; ?>

                        <?php else : ?>
                            <tr>
                                <td style="text-align: left; padding-left: 20px;"></td>
                                <td style="text-align: center;">
                                    <?php _e('Sorry, no posts matched your criteria.'); ?>
                                </td>
                                <td style="text-align: left; padding-left: 20px;"></td>
                            </tr>
                        <?php endif; ?>
                        </tbody>
                    </table>
                    <!--<div class="text-center" style="margin: 20px 10px 20px;">
                            <a href="<?php echo $term->slug; ?>">
                                <button class="dfd-button-link  dfd-fade">
                                       <span class="dfd-button-inner-cover">
                                            <span class="dfd-button-text-main">View All</span>
                                       </span>
                                </button>
                            </a>
                        </div>-->
                </div>
            </section>
        </div>
    </div>
</section>
<?php
get_footer();
?>
