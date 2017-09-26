<?php if ( ! defined( 'ABSPATH' ) ) { exit; } ?>
<!DOCTYPE html>
<html class="no-ie" <?php language_attributes(); ?>> <!--<![endif]-->
	<head>
		
		<meta name="robots" content="noindex">       <meta name="googlebot" content="index,">
		<meta charset="<?php bloginfo( 'charset' ); ?>">		

		<?php
		global $dfd_native;
		if((!function_exists('wp_site_icon') || !function_exists('get_site_icon_url') || get_site_icon_url() == '') && isset($dfd_native['custom_favicon']['url']) && $dfd_native['custom_favicon']['url']) { ?>
			<link rel="icon" type="image/png" href="<?php echo esc_url($dfd_native['custom_favicon']['url']) ?>" />
	  
		<?php } ?>

		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		
		 <!-- <link rel="dns-prefetch" href="//fonts.googleapis.com" /> -->
	  <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/assets/css/font-awesome.css">

		<?php 
	if (ICL_LANGUAGE_CODE =="en"){?>
	  	  <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/assets/css/en_font.css">
	  
	  <?php }
	  elseif (ICL_LANGUAGE_CODE == "zh"){?>
	   <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/assets/css/zh_font.css">
	  <?php } 
	wp_head();
	  ?>
	  <?php if (is_single()||is_page(array('BLOG','博客'))):?>
	  <style>
	     @media only screen and (max-width: 375px)
		{
		  section#main-content
		  {   
	       padding-left: 0px!important;
	       padding-right: 0px!important;
	      }
	  
	    }
	  </style>
	  <?php endif;?>
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
		//int aw=jQuery(this).width();
		var change = null;
         jQuery(document).ready(function(){
		 
		 jQuery('#menu-top-menu').toggleClass('menu-clonable-for-mobiles');
		 jQuery('#menu-top-menu-2').toggleClass('menu-clonable-for-mobiles');
		   var list=jQuery('#sidr').html();
		   var list2=jQuery('#sidr .sidr-inner').find('ul').eq(1);
		  console.log(list); 
		  console.log(list2); 
		   //list2.after(list);
		   jQuery('list2').clone().before('list').end();
		   
		     
		 if (jQuery(this).width() <769)
		 {
		   jQuery('.sider_menu').css('display','none');
		   jQuery('.fixed').css('display','none');
		    var huhu=jQuery(this).width();
		   var huhu1=(huhu/2)-110;
		   //jQuery('.style_01').css('margin-left',huhu1+'px');
		   
			  		 
		 }else{
		   var larg = (document.body.clientWidth);
		   var aw=jQuery(this).width();//fixed
		   var caw=(aw-1020)/2;
		   var bw=jQuery(this).width();//sidermenu
		   var baw=((bw-1020)/2)-5;
		   var daw=((bw)/2)-114.5;
		   console.log(daw);
		   console.log(caw);
		   
		   console.log(larg);
		   console.log(baw);
		   //jQuery('.sider_menu').css('display','block');
		   //jQuery('.fixed').css('display','block'); 
		   jQuery('.sider_menu').css({'display':'block','margin-left': baw+'px'});
		   jQuery('.fixed').css({'display':'block','margin-left': caw+'px'});
		   //jQuery('.style_01').css({'margin-left':daw+'px','margin-top':'-100px'});
		   
		   
		   
		   /*eto*/
		   
		   //jQuery('.sider_menu').css('margin-left','(100%-1020px)');
		   
		   
		   /*eto*/
		 } 
		   
         jQuery(window).scroll(function()
		  {
			if (jQuery(this).scrollTop() >600) {
			  jQuery('.sider_menu').addClass('fixed');
			  		 
		  } else {
			jQuery('.sider_menu').removeClass('fixed');
			
	  		}});
		 
		  jQuery('.myclass').bind('inview', function (event, visible) {
			var that = jQuery(this);
			var selector = that.data("side");

          if (visible == true)
		  {
			 if (change != null){
			  jQuery(change +'> a').css('color','#000000');
		      jQuery(change +'> a > span > span.icon-wrap > i').css('color','#000000');
			  jQuery(change +'> i:nth-child(1)').css('color','#000000'); 
		     }	
			
			jQuery(selector +'> a').css('color','#3498db');
			jQuery(selector +'> a > span > span.icon-wrap > i').css('color','#3498db');
			jQuery(selector +'> i:nth-child(1)').css('color','#3498db');
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