<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }

get_template_part('inc/loop/posts/gallery');

/**
 * DFD core gallery item inside gallery shortcode
 *
 * Generate gallery item content inside gallery shortcode
 *
 * @author      dfd
 * @package     dfd_native theme
 * @version     1.0
 *
 */

if(!class_exists('Dfd_gallery_shortcode')) {
	/**
	 * Gallery item content generator
	 *
	 *
	 * @class 		Dfd_gallery_shortcode extends Dfd_gallery
	 * @version		1.0
	 * @category	Class
	 * @author 		DFD
	 * @access		private
	 */
	class Dfd_gallery_shortcode extends Dfd_gallery {
		
		/**
		 * Generate thumb image dimentions
		 *
		 * @since 1.0
		 * @access public
		 */
		public function get_thumb_size($ratio = 1.2) {
			$size = array();
			
			$layout_style = $this->loop_options[$this->prefix.'_style'];
			
			$columns = (int) $this->loop_options[$this->prefix.'_columns'];
			
			if(!$columns) {
				$columns = 1;
			}
			
			$width = Dfd_Theme_Helpers::default_screen_width() / $columns;
			
			$height = $width / $ratio;
			
			$size[0] = $width;
			
			$size[1] = $height;
			
//			$item_appear = DfdMetaBoxSettings::get('gallery_single_loop_apear');
			
//			if($layout_style == 'masonry' && $item_appear == 'dfd-featured') {
//				$size[1] = $size[0] * 1.3;
//			}
			
			return $size;
		}
		
		/**
		 * Get option method.
		 *
		 * @since 1.0
		 * @access public
		 */
		public function get_option($option, $default) {
			$options = $this->loop_options;

			if(isset($options[$option])) {
				return $options[$option];
			}

			return $default;
		}
		
		/**
		 * Generate dynamic css rules. Disables parent element functionality
		 *
		 * @since 1.0
		 * @access public
		 */
		public function build_css() {
			
		}
	}
}