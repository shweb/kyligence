<?php if (!defined('ABSPATH')) {
    exit;
}
/*
Template Name: Careers
*/
?>
<?php
get_header();
$taxonomy = 'join-us';
$term_args = array('orderby' => 'name', 'order' => 'ASC');
$terms = get_terms($taxonomy, $term_args);
?>
<div style="background-color: #ecf3f5;">
</div>
<style>
    /* Job Listing Area */
  
	.three, .row .three {
      width: 20% !important;
	}
    .job-list-head {
        padding: 12px 0;
        margin: 0 0 0 0;
        color: #3e3e3e!important;
        background: #76aede;
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
        text-align: left;
        font-weight: bold;
	    border-radius:5px
    }
    .job-list-head .title {
        padding: 0 0 0 20px;
        margin: 0 0 0 0;
        width: 45%;
        text-transform: uppercase;
        float: left;
        color: #3e3e3e!important;
        font-weight: bold;
    }
    .job-list-head .title-big {
        padding: 0 0 0 50px;
        margin: 0 0 0 0;
        width: 45%;
        float: left;
        font-size: 24px;
        color: #3e3e3e !important;
        font-weight: bold;
    }
    .job-list-head .location {
        padding: 0 0 0 0;
        margin: 0 0 0 0;
        width: 20%;
        text-transform: uppercase;
        float: left;
        color: #3e3e3e !important;
        font-weight: bold;
        text-align: left;
    }
    .job-list-head .create {
        padding: 0 0 0 5px;
        margin: 0 0 0 0;
        width: 20%;
        text-transform: uppercase;
        float: left;
        color: #3e3e3e !important;
        font-weight: bold;
        text-align: left;
    }
    .job-list-head .apply {
        padding: 0 0 0 0;
        margin: 0 0 0 0;
        width: 15%;
        text-transform: uppercase;
        float: left;
        color: black !important;
        font-weight: bold;
    }
    .job-listings {
        padding: 0 0 0 0;
        margin: 5px 0 0 0;
        list-style: none;
    }
    .job-listings li {
        padding: 8px 15px;
        margin: 0 0 5px 0;
        color: #a3a8bb;
        background: #ffffff;
        transition: all 0.5s ease 0s;
        border-bottom: 1px solid #76aede;
    }
    .job-listings li:hover {
        border: 1px solid #76aede;
	background-color:#f4f4f4;
    }
    .job-listings li:before, .job-listings li:after {
        display: table;
        content: " ";
    }
    .job-listings li:after {
        clear: both;
    }
    .job-listings li .title {
        padding: 0 0 0 0;
        margin: 0 0 0 0;
        width: 45%;
        float: left;
    }
    .job-listings li .title:before, .job-listings li .title:after {
        display: table;
        content: " ";
    }
    .job-listings li .title:after {
        clear: both;
    }
    .job-listings li .title .designation {
        padding: 5px 0 0 5px;
        margin: 0;
        line-height: 24px;
        display: block;
        float: left;
        max-width: 80%;
    }
    .job-listings li .title .designation a, .job-listings li .title .designation a:hover, .job-listings li .title .designation a:focus {
        color: #5c5f69;
        font-weight: 700;
        text-decoration: none;
        text-transform: uppercase;
        display: inline-block;
    }
    .job-listings li .location {
        padding: 14px 0 0 0;
        margin: 0 0 0 0;
        width: 20%;
        float: left;
        text-align: left;
    }
    .job-listings li .create {
        padding: 14px 0 0 5px;
        margin: 0 0 0 0;
        width: 20%;
        float: left;
        text-align: left;
    }
    .job-listings li .apply {
        padding: 14px 0 0 0;
        margin: 0 0 0 0;
        width: 15%;
        float: left;
        text-align: right;
	color:black;
    }
    .load_more_jobs, .load_more_jobs:focus {
        cursor: pointer;
        padding: 10px;
		border-radius:4px
        margin: 0 0 0 0;
        font-size: 12px;
        color: #3e3e3e;
        text-transform: uppercase;
        line-height: 24px;
        text-align: center;
        background: #76aede;
        display: block;
        text-decoration: none;
		border-radius:5px;
    }
    .load_more_jobs:hover {
        cursor: pointer;
        color: #3e3e3e;
        background: #146db3;
        text-decoration: none;
		border-radius:4px;
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
  #dfd-image-bg-59103a0183cc0
  {
	background-image: url(http://kyligence.trustylabs.mg/wp-content/uploads/2017/04/bg.jpg);
	background-repeat: no-repeat;
  }
</style>
<section id="layout" class="dfd-blog-loop pages" style="padding: 30px 0;">
    <div class="row ">
        <div class="blog-section sidebar-left">
            <section id="main-content" role="main" class="nine columns" style="padding-left:10px!important;">
                <div class="job_listings"
                ">
                <!-- Start: Job Listing Head -->
                <div class="job-list-head clearfix visible">
                    <div class="title">job title</div>
                    <div class="location">categorie</div>
                    <div class="create">Post date</div>
                </div>
                <!-- End: Job Listing Head -->
                <ul class="job_listings job-listings" id="ajax_join">
                </ul>
                <a class="load_more_jobs load-more_join"><strong>Load more listings</strong></a>
        </div>
        <div id="LoadingImage" style="display: none; text-align: center">
            <li style="text-align: center">
                <img src="<?php echo get_template_directory_uri().'/assets/images/loading1.gif';?>">
            </li>
        </div>
</section>
<aside class="three columns" id="left-sidebar">
    <div style="background-color:#ffffff;margin-bottom:20px;">
        <section class="widget widget_categories">
            <div style="text-align: left;padding:25px 0 0 0;border-bottom: 1px solid #76aede;">
                <h3 class="widget-title" style="margin-bottom: 15px;">Search</h3>
            </div>
            <div style="padding: 10px 0px 10px 0px;">
                <form role="search">
                    <input value="" name="s" id="sjoin" class="search-query" placeholder="Search ..." type="text"
                           style="background-color: #ffffff;box-shadow:none">
                    <input name="lang" value="en" type="hidden">
                </form>
            </div>
        </section>
    </div>
    <div style="background-color:#ffffff">
        <section class="widget widget_categories">
            <div style="text-align: left;border-bottom: 1px solid #76aede;">
                <h3 class="widget-title" style="margin-bottom: 15px;">Categories</h3>
            </div>
            <div style="padding: 10px 0px 10px 0px;">
                <ul>
                    <?php if ($terms): ?>
                        <ul>
                            <li class="cat-item cat-item-1 cat" data-cat="null"
                                style="cursor: pointer;color:black;">ALL</li>
                            <?php foreach ($terms as $term): ?>
                                <li class="cat-item cat-item-1 cat" data-cat="<?php echo $term->term_id; ?>"
style="cursor: pointer;color:black;"><?php echo $term->name; ?></li>
                            <?php endforeach; ?>
                        </ul>
                    <?php endif; ?>
                </ul>
            </div>
        </section>
    </div>
</aside>
</div>
</div>
</section>
</div>
<div style="padding-left:0!important" class="dfd-content-wrap dfd-page_simple isotope-columns-3" id="dfd-image-bg-59103a0183cc0">
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
    </div>
</div>
<?php
get_footer();
?>
