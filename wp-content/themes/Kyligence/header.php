<?php if ( ! defined( 'ABSPATH' ) ) { exit; } ?>
<!DOCTYPE html>
<html class="no-ie" <?php language_attributes(); ?>> <!--<![endif]-->
	<head>
		<meta property="og:locale" content="en_US" />
		<meta property="og:type" content="website" />
		<meta property="og:title" content="Kyligence Home - Kyligence Inc." />
		<meta property="og:url" content="http://kyligence.io/en/" />
		<meta property="og:site_name" content="Kyligence Inc." />
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:title" content="Kyligence Home - Kyligence Inc." />
		<meta name="keywords" content="Kyligence,Kylin,Apache,跬智,上海跬智信息技术有限公司">
        <meta name="description" content="Kyligence Analytics Platform is a leading enterprise ready business analytics platform, that enables fast insight into massive scale data, built on Apache Kylin and the latest open source technologies.">
	  
		<meta name="robots" content="noindex">       <meta name="googlebot" content="noindex">
		<meta charset="<?php bloginfo( 'charset' ); ?>">		

		<?php
		global $dfd_native;
		if((!function_exists('wp_site_icon') || !function_exists('get_site_icon_url') || get_site_icon_url() == '') && isset($dfd_native['custom_favicon']['url']) && $dfd_native['custom_favicon']['url']) { ?>
			<link rel="icon" type="image/png" href="<?php echo esc_url($dfd_native['custom_favicon']['url']) ?>" />
	  
		<?php } ?>

		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		
		 <!-- <link rel="dns-prefetch" href="//fonts.googleapis.com" /> -->
	  <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/assets/css/font-awesome.css">

		<?php wp_head();
//echo ICL_LANGUAGE_CODE;
	  ?>
	  <script type="text/javascript">
		(function ($) {
		  function getViewportHeight() {
			  var height = window.innerHeight; // Safari, Opera
			  var mode = document.compatMode;
	  
			  if ( (mode || !$.support.boxModel) ) { // IE, Gecko
				  height = (mode == 'CSS1Compat') ?
				  document.documentElement.clientHeight : // Standards
				  document.body.clientHeight; // Quirks
			  }
	  
			  return height;
		  }
	  
		  $(window).scroll(function () {
			  var vpH = getViewportHeight(),
				  scrolltop = (document.documentElement.scrollTop ?
					  document.documentElement.scrollTop :
					  document.body.scrollTop),
				  elems = [];
			  
			  // naughty, but this is how it knows which elements to check for
			  $.each($.cache, function () {
				  if (this.events && this.events.inview) {
					  elems.push(this.handle.elem);
				  }
			  });
	  
			  if (elems.length) {
				  $(elems).each(function () {
					  var $el = $(this),
						  top = $el.offset().top,
						  height = $el.height(),
						  inview = $el.data('inview') || false;
	  
					  if (scrolltop > (top + height) || scrolltop + vpH < top) {
						  if (inview) {
							  $el.data('inview', false);
							  $el.trigger('inview', [ false ]);                        
						  }
					  } else if (scrolltop < (top + height)) {
						  if (!inview) {
							  $el.data('inview', true);
							  $el.trigger('inview', [ true ]);
						  }
					  }
				  });
			  }
		  });
		
		// kick the event to pick up any elements already in view.
		// note however, this only works if the plugin is included after the elements are bound to 'inview'
		$(function () {
			$(window).scroll();
		});
    })(jQuery);
	  </script>
	  <script>
		var change = null;
         jQuery(document).ready(function(){
		 if (jQuery(this).width() <769)
		 {
		   jQuery('.sider_menu').css('display','none');
		   jQuery('.fixed').css('display','none');
			  		 
		 }else{
		   jQuery('.sider_menu').css('display','block');
		   jQuery('.fixed').css('display','block');
		 } 
		   
         jQuery(window).scroll(function()
		  {
			if (jQuery(this).scrollTop() >600) {
			  jQuery('.sider_menu').addClass('fixed');
			  		 
		  } else {
			jQuery('.sider_menu').removeClass('fixed');
			
	  		}});
		 
		  jQuery('strong.myclass').bind('inview', function (event, visible) {
			var that = jQuery(this);
			var selector = that.data("side");

          if (visible == true)
		  {
			 if (change != null){
			  jQuery(change +'> a').css('color','#000000');
		      jQuery(change +'> a > span > span.icon-wrap > i').css('color','#000000');
		     }	
			
			jQuery(selector +'> a').css('color','#3498db');
			jQuery(selector +'> a > span > span.icon-wrap > i').css('color','#3498db');
			change = selector;
             
		  }
       });
		 
		 });
	  </script>

	</head>
	<?php
	$main_wrap_class = '';
	$lazy_load_data = '140%';
	$preloader = false;
	if(DfdMetaboxSettings::get('crum_page_custom_footer_parallax')) {
		$main_wrap_class .= ' dfd-parallax-footer';
	}
	if(strcmp(DfdMetaBoxSettings::compared('site_preloader_enabled', 'off'),'1')===0) {
		$preloader = true;
	}
	if(isset($dfd_native['enable_images_lazy_load']) && $dfd_native['enable_images_lazy_load'] == 'on' && isset($dfd_native['lazy_load_offset']) && $dfd_native['lazy_load_offset'] != '') {
		$lazy_load_data = $dfd_native['lazy_load_offset'].'%';
	}
	?>

	<body <?php body_class(); ?>>
		<?php do_action('dfd_after_body_start'); ?>
<!--<div class="language_con">-->
<?php //echo do_shortcode('[weglot_switcher]'); ?>
<!--</div>-->
		<?php if(DfdMetaboxSettings::get('dfd_enable_page_spacer')) : ?>
		
			<span class="dfd-frame-line line-top"></span>
			<span class="dfd-frame-line line-bottom"></span>
			<span class="dfd-frame-line line-left"></span>
			<span class="dfd-frame-line line-right"></span>
		<?php endif; ?>
		<?php
			if ($preloader) {
				get_template_part('inc/preloader');
			}
			
			if(isset($dfd_native['site_boxed']) && $dfd_native['site_boxed']) { ?>
				<div class="boxed_layout">
				
			<?php } ?>

			<?php get_template_part('templates/section', 'header'); ?>

			<div id="main-wrap" class="<?php echo esc_attr($main_wrap_class); ?>" data-lazy-load-offset="<?php echo esc_attr($lazy_load_data) ?>">

				<div id="change_wrap_div">