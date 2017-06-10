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
        text-transform: capitalize;
        text-align: left;
        font-weight: bold;
	    border-radius:5px
    }
    .job-list-head .title {
        padding: 0 0 0 20px;
        margin: 0 0 0 0;
        width: 45%;
        text-transform: capitalize;
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
        text-transform: capitalize;
        float: left;
        color: #3e3e3e !important;
        font-weight: bold;
        text-align: left;
    }
    .job-list-head .create {
        padding: 0 0 0 5px;
        margin: 0 0 0 0;
        width: 20%;
        text-transform: capitalize;
        float: left;
        color: #3e3e3e !important;
        font-weight: bold;
        text-align: left;
    }
    .job-list-head .apply {
        padding: 0 0 0 0;
        margin: 0 0 0 0;
        width: 15%;
        text-transform: capitalize;
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
        text-transform: capitalize;
        display: inline-block;
    }
    .widget-title,.cat-item,.location{
	 text-transform: capitalize !important;
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
        font-size: 14px;
        color: #3e3e3e;
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
  #dfd-image-bg-592533d0b22a2 
  {
	background-image: url(http://kyligence.trustylabs.mg/wp-content/uploads/2017/05/底图.png);
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: scroll;
  }
    .banner_btn button {
    width: 200px;
    height: 70px;
}
 
   @media only screen and (max-width: 799px)
  {
	p{
	  font-size: 11px;
  	 }
	
  }
  @media only screen and (max-width: 768px)
  {
	p{
	  font-size: 11px;
  	 }
	 .three, .row .three{
	  width: 100% !important;
	  padding-left: 0px;
	  padding-right:13px;
	}
  }
  @media only screen and (max-width: 720px)
  {
	p{
	  font-size: 11px;
  	 }
	 .three, .row .three{
	  width: 100% !important;
	  padding-left: 0px;
	  padding-right:13px;
	}
  }
  @media only screen and (max-width: 600px)
  {
	p{
	  font-size: 11px;
  	 }
	 .three, .row .three{
	  width: 100% !important;
	  padding-left: 0px;
	  padding-right:13px;
	}
  }
  @media only screen and (max-width: 640px)
  {
	p{
	  font-size: 11px;
  	 }
	 .three, .row .three{
	  width: 100% !important;
	  padding-left: 0px;
	  padding-right:13px;
	}
}
  @media only screen and (max-width: 425px)
  {
	p{
	  font-size: 11px;
  	 }
	.job-list-head .title {
  		width: 30%;
		}
	.job-list-head .create {
	    width: 25%;
	}
    .job-listings li {
	    padding: 8px 1px;
	}
	.job-listings li .title {
		  width: 30%;
	}
    .job-listings li .create {
	    width: 25%;
	
	  }
	  .job-listings li .apply {
	    width: 20%;
	 }
  .three, .row .three{
	  width: 100% !important;
	  padding-left: 0px;
	  padding-right:13px;
	}
  }
	@media only screen and (max-width: 375px)
  {
	p{
	  font-size: 11px;
  	 }
	.job-list-head .title {
  		width: 30%;
		}
	.job-list-head .create {
	    width: 25%;
	}
    .job-listings li {
	    padding: 8px 1px;
	}
	.job-listings li .title {
		  width: 30%;
	}
    .job-listings li .create {
	    width: 25%;
	
	  }
	  .job-listings li .apply {
	    width: 20%;
	 }
   .three, .row .three{
	  width: 100% !important;
	  padding-left: 0px;
	  padding-right:13px;
	}
  }	
  @media only screen and (max-width: 320px)
  {
	p{
	  font-size: 11px;
  	 }
	.job-list-head .title {
  		width: 30%;
		}
	.job-list-head .create {
	    width: 25%;
	}
    .job-listings li {
	    padding: 8px 1px;
	}
	.job-listings li .title {
		  width: 30%;
	}
    .job-listings li .create {
	    width: 25%;
	
	  }
	  .job-listings li .apply {
	    width: 20%;
	 }
   .three, .row .three{
	  width: 100% !important;
	  padding-left: 0px;
	  padding-right:13px;
	}
  }
</style>
<section id="layout" class="dfd-blog-loop pages" style="padding: 30px 0;">
    <div class="row ">
        <div class="blog-section sidebar-left">
            <section id="main-content" role="main" class="nine columns" >
                <div class="job_listings"
                ">
                <!-- Start: Job Listing Head -->
                <div class="job-list-head clearfix visible">
                    <div class="title">
                         <?php if(ICL_LANGUAGE_CODE=='en'): ?>
                            job title
                         <?php elseif(ICL_LANGUAGE_CODE=='zh'): ?>
                           职位
                         <?php endif; ?>
                    </div>
                    <div class="location">
                         <?php if(ICL_LANGUAGE_CODE=='en'): ?>
                            categorie
                         <?php elseif(ICL_LANGUAGE_CODE=='zh'): ?>
                           类别
                         <?php endif; ?>
                    </div>
                    <div class="create">                      
                         <?php if(ICL_LANGUAGE_CODE=='en'): ?>
                            Post date
                         <?php elseif(ICL_LANGUAGE_CODE=='zh'): ?>
                          发布日期
                         <?php endif; ?>
                    </div>
                </div>
                <!-- End: Job Listing Head -->
                <ul class="job_listings job-listings" id="ajax_join">
                </ul>
                <a class="load_more_jobs load-more_join">
                  <strong>
                    
					<?php if(ICL_LANGUAGE_CODE=='en'): ?>
					   Load More...
					<?php elseif(ICL_LANGUAGE_CODE=='zh'): ?>
					   发现更多...
					<?php endif; ?>
                  </strong>
                </a>
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
                <h3 class="widget-title" style="margin-bottom: 15px;">
				  <?php if(ICL_LANGUAGE_CODE=='en'): ?>
				     Search
				  <?php elseif(ICL_LANGUAGE_CODE=='zh'): ?>
				     搜索
				  <?php endif; ?>
                </h3>
            </div>
            <div style="padding: 10px 0px 10px 0px;">
                <form role="search">
                    <input value="" name="s" id="sjoin" class="search-query" placeholder="<?php if(ICL_LANGUAGE_CODE=='en'): ?>Search...<?php elseif(ICL_LANGUAGE_CODE=='zh'): ?>搜索...<?php endif; ?>" type="text" style="background-color: #ffffff;box-shadow:none">
					  <?php if(ICL_LANGUAGE_CODE=='en'): ?>
					  <input name="lang" value="en" type="hidden">
					  <?php elseif(ICL_LANGUAGE_CODE=='zh'): ?>
					  <input name="lang" value="zh" type="hidden">
					  <?php endif; ?>                    
                </form>
            </div>
        </section>
    </div>
    <div style="background-color:#ffffff">
        <section class="widget widget_categories">
            <div style="text-align: left;border-bottom: 1px solid #76aede;">
                <h3 class="widget-title" style="margin-bottom: 15px;">                    
				  <?php if(ICL_LANGUAGE_CODE=='en'): ?>
				     Categories
				  <?php elseif(ICL_LANGUAGE_CODE=='zh'): ?>
				     分类
				  <?php endif; ?>
                </h3>
            </div>
            <div style="padding: 10px 0px 10px 0px;">
                <ul>
                    <?php if ($terms): ?>
                        <ul>
                            <li class="cat-item cat-item-1 cat" data-cat="null" style="cursor: pointer;color:black;">                              
	                         <?php if(ICL_LANGUAGE_CODE=='en'): ?>
                          	   All
                             <?php elseif(ICL_LANGUAGE_CODE=='zh'): ?>
                               所有
                             <?php endif; ?>
                            </li>
                            <?php foreach ($terms as $term): ?>
                                <li class="cat-item cat-item-1 cat" data-cat="<?php echo $term->term_id; ?>" style="cursor: pointer;color:black;"><?php echo $term->name; ?></li>
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
</div>
<?php
get_footer();
?>
