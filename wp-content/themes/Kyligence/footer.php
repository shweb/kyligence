<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }

global $dfd_native;

$footer_style_option = isset($dfd_native['footer_variant']) ? $dfd_native['footer_variant'] : '';
$footer_style = !empty($footer_style_option) ? $footer_style_option : '1';
$subfooter_style = isset($dfd_native['enable_subfooter']) ? $dfd_native['enable_subfooter'] : 'on';
$footer_class = 'footer-style-'.$footer_style;
$footer_class .= (isset($dfd_native['footer_bg_dark']) && strcmp($dfd_native['footer_bg_dark'], '1') === 0) ? ' dfd-background-dark' : '';
$footer_class .= (strcmp($footer_style_option, '4') === 0) ? ' no-paddings' : '';

$subfooter_class = (isset($dfd_native['sub_footer_bg_dark']) && strcmp($dfd_native['sub_footer_bg_dark'], '1') === 0) ? ' dfd-background-dark' : '';
$subfooter_class .= ' subfooter-style-'.$subfooter_style;
?>


			<?php if($footer_style != '6' || $subfooter_style != 'off') : ?>
				<!--<div class="footer_top">
					<div class="footer_border"></div>
					<div class="footer_border footer_border2"></div>
					<div class="footer_border footer_border3"></div>
					<div class="footer_border footer_border4"></div>
					<div class="footer_border footer_border5"></div>
				</div>-->
				<div id="footer-wrap">
					<?php if($footer_style != '6') : ?>
						<section id="footer" class="<?php echo esc_attr($footer_class); ?>">
						  <div class="row container">
							<?php// get_template_part('templates/footer/style', $footer_style); ?>							
						  <div class="col-md-3"><?php dynamic_sidebar('footer column 1');?></div>	
						  <div class="col-md-3"><?php dynamic_sidebar('footer column 2');?></div>	
						  <div class="col-md-3"><?php dynamic_sidebar('footer column 3');?></div>	
						  <div class="col-md-3"><?php dynamic_sidebar('footer column 4');?></div>	
						  <div class="col-md-3"><?php dynamic_sidebar('footer column 5');?></div>
							<!--<div class="col-md-3"><?php //dynamic_sidebar('footer column 6');?></div>-->
							<!--<div class="col-md-4"><?php //dynamic_sidebar('footer column 7');?></div>-->
						  </div>
							<div class="row container">							
								<?php dynamic_sidebar('footer column 8');?>
							</div>
						  
						</section>
					<?php endif; ?>

					<?php if($subfooter_style != 'off') : ?>
						<section id="sub-footer" class="container add_padding <?php echo esc_attr($subfooter_class); ?>">
							<?php get_template_part('templates/subfooter/content'); ?>
						</section>
					<?php endif; ?>
				</div>
			<?php endif; ?>

			<?php if(isset($dfd_native['site_boxed']) && $dfd_native['site_boxed']) : ?>
				</div>
			<?php endif; ?>
			
			<?php echo isset($dfd_native['custom_js']) ? wp_kses($dfd_native['custom_js'], array(
																'script' => array(
																	'type' => array(),
																),
																'noscript' => array()
															)) : ''; ?>
				
		</div>

		<div class="body-back-to-top align-right mobile-hide"><i class="dfd-socicon-chevron-arrow-up"></i></div>
		
		<span class="hide dfd-dynamic-styles-container"><?php do_action('dfd_head_custom_css') ?></span>
	<style>	.col-md-3{		width:13%;		float:left;	}	.col-md-4{		width:22%;		float:left;	}	</style>
		<?php wp_footer(); ?>
	</body>
</html>