<?php if (!defined('ABSPATH')) {
    exit;
    /*
    Template Name: Realeses More
    */
}
get_header();
?>
<style>
  tr{
	border-bottom:5px solid white;
  }
  .learn_more{text-align:left;    display: block;
    min-height: 50px;}
  a.older{padding: 11px 35px; 
	color:#2A2A2A;
	border: 2px solid #2A2A2A;
	border-color: #2A2A2A;	
    background-image: url('http://kyligence.trustylabs.mg/wp-content/uploads/2017/05/chvr.png');
    background-repeat: no-repeat;
    background-position: -1px 3px; 
  }
  a.older:hover , :active .older{padding: 11px 35px;
	border: 2px solid  #2A2A2A;
    background-image: url('http://kyligence.trustylabs.mg/wp-content/uploads/2017/05/chevr-hover.png');
    background-repeat: no-repeat;
    background-position:-1px 3px; 
	color: #fff;
    background-color: #2A2A2A;
  }
  .chevron{
	  position: absolute;
	  width: 20px;
	  content: " ";
	  background-image: url('http://kyligence.trustylabs.mg/wp-content/uploads/2017/05/chvr.png');
	  height: 19px;
	  background-position: -4px 28px;
	  display: inline-block;
	  left: 17px;
  }
  button:hover .chevron{
	position: absolute;
	width: 20px;
	content: " ";
	background-image: url('http://kyligence.trustylabs.mg/wp-content/uploads/2017/05/chevr-hover.png');
    height: 19px;
	background-position: -4px 28px;
	display: inline-block;
	left: 17px;
}
  	.eyes{
	  position: absolute;
	  width: 25px;
	  content: " ";
	  background-image: url('http://kyligence.trustylabs.mg/wp-content/uploads/2017/05/eyes.png');
	  height: 19px;
	  background-position: -10px 33px;
	  display: inline-block;
	  left: 17px;
}
  button:hover .eyes{
	position: absolute;
	width: 25px;
	content: " ";
	background-image: url('http://kyligence.trustylabs.mg/wp-content/uploads/2017/05/eyes-hover.png');
    height: 19px;
	background-position: -10px 33px;
	display: inline-block;
	left: 17px;
}
    .banner_btn button {
    width: 200px;
    height: 70px;
}
  
</style>
<?php
$taxonomy = 'news-room';
$term_args = array('orderby' => 'name','order' => 'Desc');
$terms = get_terms($taxonomy,$term_args);
if($terms) {
  ?>
<section style="margin-bottom:30px"  id="layout" class="dfd-default-template pages">
            <div class="row boxed ">
                <div class="blog-section no-sidebars">
                    <section id="main-content" role="main" class="twelve columns">
					  
					  <div class="two columns vc-column-extra-class-59103a016f374" data-parallax_sense="30">
                        <div class="wpb_wrapper"></div>
                      </div>
					  
					  <div class="eight columns vc-column-extra-class-59103a016febe" data-parallax_sense="30">
                         <div class="wpb_wrapper">
                       
						<div style="margin: 20px 10px 30px 0px;">
						  
                          <div style="margin: 0 auto 14px;width:400px;padding-left:94px;">
                             <h3 class="section-header-title" style="text-align: left;">
							   <?php echo $terms[1]->name; ?>
						     </h3>
						  </div>
						  
						  <div style="margin:0 auto;">
                            <table class="aligncenter" style="border:none !important;background:none;width:52%;">
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
                                        'terms' => array($terms[1]->term_id),
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
                                        <td style="text-align: left; padding-left: 50px;">
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
	                        <?php if ($query->max_num_pages > $paged) :?>
						    <div style="margin: 0 auto 14px;width:400px;padding-left:132px;">
					  		   <div class="learn_more" style="width:160px">
	                           <?php echo get_next_posts_link( 'NEXT PAGE', $query->max_num_pages );?>
							  </div>	
							</div>
					        <?php endif;?>
						  </div>
						   </div>
						 </div>
                        </div>
					  
					  <div class="two columns vc-column-extra-class-59103a016f374" data-parallax_sense="30">
                        <div class="wpb_wrapper"></div>
                      </div>
					  
                    </section>
                </div>
            </div>
        </section>
        <?php
}
?>
<div class="vc_row vc-row-wrapper vc_custom_1495119536362" data-parallax_sense="30" style="padding:40px 0px">
    <div class="wpb_row row">
        <div class="two columns vc-column-extra-class-592533d0ad570" data-parallax_sense="30">
            <div class="wpb_wrapper">

            </div>
        </div>

        <div class="eight columns vc-column-extra-class-592533d0adb3d" data-parallax_sense="30">
            <div class="wpb_wrapper">
                <div class="vc-row-wrapper vc_inner vc_row-fluid">
                    <div class="row wpb_row">
                        <div class="vc-column-hover-592533d0ae429 columns twelve">
                            <div class="wpb_wrapper">
                                <div class="dfd-heading-shortcode">
                                    <div class="dfd-heading-module-wrap text-center style_01 cr-animate-gen animation-done"
                                         id="dfd-heading-592533d0aec18" data-animate-type="transition.slideDownBigIn"
                                         style="opacity: 1; transform: translateY(0px);">
                                        <div class="inline-block">
                                            <div class="dfd-heading-module"><h2 class="dfd-title" style="font-size: 45px; color: #ffffff !important; line-height: 45px; ">
                                                <span style="letter-spacing: 2px;">
												  <?php if(ICL_LANGUAGE_CODE=='en'): ?>
													Discover More
													<?php elseif(ICL_LANGUAGE_CODE=='zh'): ?>
													发现更多
												  <?php endif; ?>
                                                </span></h2></div>
                                        </div>
                                    </div>
                                    <script type="text/javascript">(function ($) {
                                        $("head").append("<style>#dfd-heading-592533d0aec18 .dfd-title {margin-top: 60px;}#dfd-heading-592533d0aec18 .dfd-heading-delimiter {margin-top: 10px;margin-bottom: 10px;}</style>");
                                    })(jQuery);</script>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dfd-spacer-module" data-units="%" data-wide_size="80" data-normal_resolution="1024"
                     data-normal_size="" data-tablet_resolution="800" data-tablet_size="" data-mobile_resolution="480"
                     data-mobile_size="" style="height: 80px;"></div>
                <div class="vc-row-wrapper vc_inner vc_row-fluid container">
                    <div class="row wpb_row">
                        <div class="vc-column-hover-592533d0af7ec columns four">
                            <div class="wpb_wrapper">
                                <div class="vc_btn3-container  banner_btn vc_btn3-center">
                                    <button onmouseleave="this.style.borderColor='#ffffff'; this.style.backgroundColor='transparent'; this.style.color='#ffffff'"
                                             onmouseenter="this.style.borderColor='#ffffff'; this.style.backgroundColor='#ffffff'; this.style.color='#000000';"
                                            style="border-color:#ffffff; color:#ffffff;"
                                            class="vc_general vc_btn3 vc_btn3-size-md vc_btn3-shape-rounded vc_btn3-style-outline-custom banner_btn button"
                                            onClick="location.href='<?php if(ICL_LANGUAGE_CODE=='en'): ?>http://kyligence.trustylabs.mg/why-kyligence/<?php elseif(ICL_LANGUAGE_CODE=='zh'): ?>http://kyligence.trustylabs.mg/zh/why-kyligence/<?php endif; ?>'">
											<?php if(ICL_LANGUAGE_CODE=='en'): ?>
											  Why Kyligence
											  <?php elseif(ICL_LANGUAGE_CODE=='zh'): ?>
											  选择Kyligence
											<?php endif; ?>                
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="vc-column-hover-592533d0b0334 columns four">
                            <div class="wpb_wrapper">
                                <div class="vc_btn3-container  banner_btn vc_btn3-center">
                                    <button onmouseleave="this.style.borderColor='#ffffff'; this.style.backgroundColor='transparent'; this.style.color='#ffffff'"
                                            onClick="location.href='<?php if(ICL_LANGUAGE_CODE=='en'): ?>http://kyligence.trustylabs.mg/products/<?php elseif(ICL_LANGUAGE_CODE=='zh'): ?>http://kyligence.trustylabs.mg/zh/products/<?php endif; ?>'"
                                             onmouseenter="this.style.borderColor='#ffffff'; this.style.backgroundColor='#ffffff'; this.style.color='#000000';"
                                            style="border-color:#ffffff; color:#ffffff;"
                                            class="vc_general vc_btn3 vc_btn3-size-md vc_btn3-shape-rounded vc_btn3-style-outline-custom banner_btn button">
                                        
											<?php if(ICL_LANGUAGE_CODE=='en'): ?>
											  Products
											  <?php elseif(ICL_LANGUAGE_CODE=='zh'): ?>
											  产品
											<?php endif; ?> 
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="vc-column-hover-592533d0b0e67 columns four">
                            <div class="wpb_wrapper">
                                <div class="vc_btn3-container  banner_btn vc_btn3-center">
                                    <button onmouseleave="this.style.borderColor='#ffffff'; this.style.backgroundColor='transparent'; this.style.color='#ffffff'"
                                             onmouseenter="this.style.borderColor='#ffffff'; this.style.backgroundColor='#ffffff'; this.style.color='#000000';"
                                            style="border-color:#ffffff; color:#ffffff;"
                                            class="vc_general vc_btn3 vc_btn3-size-md vc_btn3-shape-rounded vc_btn3-style-outline-custom banner_btn button"
                                            onClick="location.href='<?php if(ICL_LANGUAGE_CODE=='en'): ?>http://kyligence.trustylabs.mg/use-cases/<?php elseif(ICL_LANGUAGE_CODE=='zh'): ?>http://kyligence.trustylabs.mg/zh/use-cases/<?php endif; ?>'">
                                        
											<?php if(ICL_LANGUAGE_CODE=='en'): ?>
											  Use Cases
											  <?php elseif(ICL_LANGUAGE_CODE=='zh'): ?>
											  案例
											<?php endif; ?>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dfd-spacer-module" data-units="%" data-wide_size="80" data-normal_resolution="1024"
                     data-normal_size="" data-tablet_resolution="800" data-tablet_size="" data-mobile_resolution="480"
                     data-mobile_size="" style="height: 80px;"></div>
            </div>
        </div>

        <div class="two columns vc-column-extra-class-592533d0b1e4c" data-parallax_sense="30">
            <div class="wpb_wrapper">

            </div>
        </div>
    </div>
    <div class="dfd-row-bg-wrapper-cover">
        <div class="dfd-row-bg-wrap dfd-row-bg-image dfd_simple_image" id="dfd-image-bg-592533d0b22a2"
             data-default-image="http://kyligence.trustylabs.mg/wp-content/uploads/2017/05/底图.png"
             data-mobile_enable="1"></div>
    </div>
    <script type="text/javascript">(function ($) {
        $("head").append("<style>#dfd-image-bg-592533d0b22a2 {background-image: url(http://kyligence.trustylabs.mg/wp-content/uploads/2017/05/底图.png);background-repeat: repeat;background-size: cover;background-attachment: scroll;}</style>");
    })(jQuery);</script>
</div>
<?php
get_footer();
?>