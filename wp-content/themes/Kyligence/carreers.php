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
	border-radius:4px
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
        color: #ffffff !important;
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
    }
    .load_more_jobs, .load_more_jobs:focus {
        cursor: pointer;
        padding: 10px;
		border-radius:4px
        margin: 0 0 0 0;
        font-size: 12px;
        color: #ffffff;
        text-transform: uppercase;
        line-height: 24px;
        text-align: center;
        background: #76aede;
        display: block;
        text-decoration: none;
    }
    .load_more_jobs:hover {
        cursor: pointer;
        color: #ffffff;
        background: #146db3;
        text-decoration: none;
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
                <h3 class="widget-title">Search</h3>
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
                <h3 class="widget-title">Categories</h3>
            </div>
            <div style="padding: 10px 0px 10px 0px;">
                <ul>
                    <?php if ($terms): ?>
                        <ul>
                            <li class="cat-item cat-item-1 cat" data-cat="null"
                                style="cursor: pointer;">ALL</li>
                            <?php foreach ($terms as $term): ?>
                                <li class="cat-item cat-item-1 cat" data-cat="<?php echo $term->term_id; ?>"
                                    style="cursor: pointer;"><?php echo $term->name; ?></li>
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
<?php
get_footer();
?>
