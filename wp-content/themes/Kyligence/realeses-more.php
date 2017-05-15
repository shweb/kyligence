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
					  		   <div class="learn_more" style="width:150px">
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
<div style="padding-left:0!important" class="dfd-content-wrap dfd-page_simple isotope-columns-3">
    <div class="vc_row vc-row-wrapper vc_custom_1493975080723" data-parallax_sense="30"
         style="padding-top: 40px; padding-bottom: 40px;">
        <div class="wpb_row row">
            <div class="two columns vc-column-extra-class-59103a016f374" data-parallax_sense="30">
                <div class="wpb_wrapper">

                </div>
            </div>

            <div class="eight columns vc-column-extra-class-59103a016febe" data-parallax_sense="30">
                <div class="wpb_wrapper">
                    <div class="vc-row-wrapper vc_inner vc_row-fluid">
                        <div class="row wpb_row">
                            <div class="vc-column-hover-59103a0173e08 columns twelve">
                                <div class="wpb_wrapper">
                                    <div class="dfd-heading-shortcode">
                                        <div style="opacity: 1; transform: translateY(0px);"
                                             class="dfd-heading-module-wrap  text-center style_05 cr-animate-gen  animation-done"
                                             id="dfd-heading-59103a0174efa"
                                             data-animate-type="transition.slideDownBigIn">
                                            <div class="inline-block">
                                                <div class="dfd-heading-module">
                                                    <h2 class="dfd-title "
                                                        style="font-size: 45px; color: #333333 !important; line-height: 45px;margin-bottom: 14px;">
                                                        Get started now !</h2>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <script type="text/javascript">(function ($) {
                                            $("head").append("<style>#dfd-heading-59103a0174efa .dfd-heading-module {}#dfd-heading-59103a0174efa .dfd-heading-delimiter {border-bottom-style: solid;width: 80px;border-bottom-width: 1px;border-bottom-color: #333333;}#dfd-heading-59103a0174efa .dfd-title {margin-top: 10px;margin-bottom: 80px;}#dfd-heading-59103a0174efa .dfd-heading-delimiter {margin-top: 10px;margin-bottom: 10px;}</style>");
                                        })(jQuery);</script>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="vc-row-wrapper vc_inner vc_row-fluid container">
                        <div class="row wpb_row">
                            <div class="vc-column-hover-59103a017635f columns four">
                                <div class="wpb_wrapper">
                                    <div class="vc_btn3-container vc_btn3-center">
                                        <button onmouseleave="this.style.borderColor='#333333'; this.style.backgroundColor='transparent'; this.style.color='#333333'"
                                                onmouseenter="this.style.borderColor='#5aa1e3'; this.style.backgroundColor='#5aa1e3'; this.style.color='#ffffff';"
                                                style="border-color: rgb(51, 51, 51); color: rgb(51, 51, 51); background-color: transparent;"
                                                class="vc_general vc_btn3 vc_btn3-size-md vc_btn3-shape-rounded vc_btn3-style-outline-custom vc_btn3-icon-left">
												  <i class="chevron"></i>Learn more
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="vc-column-hover-59103a0180610 columns four">
                                <div class="wpb_wrapper">
                                    <div class="vc_btn3-container vc_btn3-center">
                                        <button onmouseleave="this.style.borderColor='#333333'; this.style.backgroundColor='transparent'; this.style.color='#333333'"
                                                onmouseenter="this.style.borderColor='#5aa1e3'; this.style.backgroundColor='#5aa1e3'; this.style.color='#ffffff';"
                                                style="border-color: rgb(51, 51, 51); color: rgb(51, 51, 51); background-color: transparent;"
                                                class="vc_general vc_btn3 vc_btn3-size-md vc_btn3-shape-rounded vc_btn3-style-outline-custom vc_btn3-icon-left">
                                            <i class="eyes"></i> Watch Demo
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="vc-column-hover-59103a0181be0 columns four">
                                <div class="wpb_wrapper">
                                    <div class="vc_btn3-container vc_btn3-center">
                                        <button onmouseleave="this.style.borderColor='#333333'; this.style.backgroundColor='transparent'; this.style.color='#333333'"
                                                onmouseenter="this.style.borderColor='#5aa1e3'; this.style.backgroundColor='#5aa1e3'; this.style.color='#ffffff';"
                                                style="border-color: rgb(51, 51, 51); color: rgb(51, 51, 51); background-color: transparent;"
                                                class="vc_general vc_btn3 vc_btn3-size-md vc_btn3-shape-rounded vc_btn3-style-outline-custom vc_btn3-icon-left">
                                            <i class="chevron"></i> Learn more
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="two columns vc-column-extra-class-59103a0183680" data-parallax_sense="30">
                <div class="wpb_wrapper">

                </div>
            </div>
        </div>
        <div class="dfd-row-bg-wrapper-cover">
            <div class="dfd-row-bg-wrap dfd-row-bg-image dfd_simple_image" id="dfd-image-bg-59103a0183cc0"
                 data-default-image="http://kyligence.trustylabs.mg/wp-content/uploads/2017/04/bg.jpg"
                 data-mobile_enable="1"></div>
        </div>
        <script type="text/javascript">(function ($) {
            $("head").append("<style>#dfd-image-bg-59103a0183cc0 {background-image: url(http://kyligence.trustylabs.mg/wp-content/uploads/2017/04/bg.jpg);background-repeat: repeat;background-size: cover;background-attachment: scroll;}</style>");
        })(jQuery);</script>
    </div>
</div>
<?php
get_footer();
?>