<?php
/*
Template Name: Blog page template
*/
if ( ! defined( 'ABSPATH' ) ) { exit; }

get_header();
?>
<style>
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
get_template_part('inc/loop/components/layout');

if(class_exists('Dfd_Layout_Builder')) {
	new Dfd_Layout_Builder(array(
		'loop' => 'custom',
		'page' => 'post',
		'class' => 'dfd-blog-loop'
	));
}?>
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
                                                <i class="chevron"></i> Learn more
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