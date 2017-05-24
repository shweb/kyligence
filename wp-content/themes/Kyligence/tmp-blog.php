<?php
/*
Template Name: Blog page template
*/
if ( ! defined( 'ABSPATH' ) ) { exit; }

get_header();
?>
<style>
  .banner_btn button {
    width: 200px;
    height: 70px;
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
                                            <div class="dfd-heading-module"><h2 class="dfd-title "
                                                                                style="font-size: 45px; color: #ffffff !important; line-height: 45px; ">
                                                <span style="letter-spacing: 2px;">Discover more</span></h2></div>
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
                                            onmouseenter="this.style.borderColor='#5aa1e3'; this.style.backgroundColor='#5aa1e3'; this.style.color='#ffffff';"
                                            style="border-color:#ffffff; color:#ffffff;"
                                            class="vc_general vc_btn3 vc_btn3-size-md vc_btn3-shape-rounded vc_btn3-style-outline-custom banner_btn button"
                                            onClick="location.href='<?php if(ICL_LANGUAGE_CODE=='en'): ?>http://kyligence.trustylabs.mg/why-kyligence/<?php elseif(ICL_LANGUAGE_CODE=='zh'): ?>http://kyligence.trustylabs.mg/zh/why-kyligence/<?php endif; ?>'">
                                        WHY KYLIGENCE
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="vc-column-hover-592533d0b0334 columns four">
                            <div class="wpb_wrapper">
                                <div class="vc_btn3-container  banner_btn vc_btn3-center">
                                    <button onmouseleave="this.style.borderColor='#ffffff'; this.style.backgroundColor='transparent'; this.style.color='#ffffff'"
                                            onClick="location.href='<?php if(ICL_LANGUAGE_CODE=='en'): ?>http://kyligence.trustylabs.mg/products/<?php elseif(ICL_LANGUAGE_CODE=='zh'): ?>http://kyligence.trustylabs.mg/zh/products/<?php endif; ?>'"
                                            onmouseenter="this.style.borderColor='#5aa1e3'; this.style.backgroundColor='#5aa1e3'; this.style.color='#ffffff';"
                                            style="border-color:#ffffff; color:#ffffff;"
                                            class="vc_general vc_btn3 vc_btn3-size-md vc_btn3-shape-rounded vc_btn3-style-outline-custom banner_btn button">
                                        PRODUCTS
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="vc-column-hover-592533d0b0e67 columns four">
                            <div class="wpb_wrapper">
                                <div class="vc_btn3-container  banner_btn vc_btn3-center">
                                    <button onmouseleave="this.style.borderColor='#ffffff'; this.style.backgroundColor='transparent'; this.style.color='#ffffff'"
                                            onmouseenter="this.style.borderColor='#5aa1e3'; this.style.backgroundColor='#5aa1e3'; this.style.color='#ffffff';"
                                            style="border-color:#ffffff; color:#ffffff;"
                                            class="vc_general vc_btn3 vc_btn3-size-md vc_btn3-shape-rounded vc_btn3-style-outline-custom banner_btn button"
                                            onClick="location.href='<?php if(ICL_LANGUAGE_CODE=='en'): ?>http://kyligence.trustylabs.mg/use-cases/<?php elseif(ICL_LANGUAGE_CODE=='zh'): ?>http://kyligence.trustylabs.mg/zh/use-cases/<?php endif; ?>'">
                                        USE CASES
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