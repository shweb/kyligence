<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }

$main_style = $module_animation = $animation_data = $el_class = $columns_width = $list_class = $decor_html = $text_html = $title_options = $title_font_options = '';
$uniqid = $use_google_fonts = $custom_fonts = $subtitle_options = $subtitle_font_options = $content_font_options = $font_options = $content_style = $link_css = '';
$list_fields = $output = $icon_type = $select_icon = $ic_dfd_icons = $ic_fontawesome = $ic_openiconic = $content_only_hover = $icon_hover_color = '';
$block_title = $block_subtitle = $block_content = $icon_size = $icon_color = $connector_color = $icon_bg_size = $border_radius = $border_color = '';
$hover_border_color = $background_color = $hover_background_color = $item_offset = $side_delimeter = '';

$atts = vc_map_get_attributes('dfd_short_info_block', $atts);
extract($atts);

$uniqid = uniqid('dfd-short-info-block-').'-'.rand(1,9999);

$el_class .= ' '.$main_style;

if(!($module_animation == '')) {
	$el_class .= ' cr-animate-gen';
	$animation_data = 'data-animate-item=".dfd-short-info-block-item" data-animate-type = "'.esc_attr($module_animation).'"';
}
if(isset($content_only_hover) && strcmp($content_only_hover, 'only_hover') == 0) {
	$el_class .= ' content-only-hover';
}
if (isset($side_delimeter) && $side_delimeter == 'enable') {
	$el_class .= ' side-delimeter';
}

if(isset($main_style) && strcmp($main_style, 'style-1') == 0 && isset($columns_width) && strcmp($columns_width, '') !== 0) {
	$list_class .= $columns_width;
}

$title_options = _dfd_parse_text_shortcode_params($title_font_options, 'dfd-content-title-big', $use_google_fonts, $custom_fonts);
$subtitle_options = _dfd_parse_text_shortcode_params($subtitle_font_options, 'dfd-content-subtitle');
$content_font_options = _dfd_parse_text_shortcode_params($font_options);
$content_style = $content_font_options['style'];

if(isset($icon_size) && !empty($icon_size)) {
	$link_css .= '#'.esc_js($uniqid).' .dfd-short-info-block-item .icon-wrap {font-size: '.esc_js($icon_size).'px;}';
}
if(isset($icon_color) && !empty($icon_color)) {
	$link_css .= '#'.esc_js($uniqid).' .dfd-short-info-block-item .icon-wrap {color: '.esc_js($icon_color).';}';
}
if(isset($icon_hover_color) && !empty($icon_hover_color)) {
	$link_css .= '#'.esc_js($uniqid).' .dfd-short-info-block-item:hover .icon-wrap {color: '.esc_js($icon_hover_color).';}';
}
if(isset($icon_bg_size) && !empty($icon_bg_size)) {
	$link_css .= '#'.esc_js($uniqid).'.style-1 .dfd-short-info-block-item .icon-centered-container, #'.esc_js($uniqid).'.style-2 .dfd-short-info-block-item .icon-wrap, #'.esc_js($uniqid).'.style-3 .dfd-short-info-block-item .icon-wrap {width: '.esc_js($icon_bg_size).'px; height: '.esc_js($icon_bg_size).'px; line-height: '.esc_js($icon_bg_size).'px;}';
	$link_css .= '#'.esc_js($uniqid).'.style-1 .icon-wrap:before {right: '.esc_js($icon_bg_size).'px;}';
	$link_css .= '#'.esc_js($uniqid).'.style-1 .icon-wrap:after {left: '.esc_js($icon_bg_size).'px;}';
	$link_css .= '#'.esc_js($uniqid).'.style-2 .icon-wrap:before, #'.esc_js($uniqid).'.style-3 .icon-wrap:before {bottom: '.esc_js($icon_bg_size).'px;}';
	$link_css .= '#'.esc_js($uniqid).'.style-2 .icon-wrap:after, #'.esc_js($uniqid).'.style-3 .icon-wrap:after {top: '.esc_js($icon_bg_size).'px;}';
	$link_css .= '#'.esc_js($uniqid).'.style-2 .content-wrap {margin-left: '.esc_js($icon_bg_size + 25).'px;}';
	$link_css .= '#'.esc_js($uniqid).'.style-3 .content-wrap {margin-right: '.esc_js($icon_bg_size + 25).'px;}';
	$link_css .= '#'.esc_js($uniqid).'.style-2 .icon-wrap, #'.esc_js($uniqid).'.style-3 .icon-wrap {margin-top: -'.esc_js($icon_bg_size / 2).'px;}';
	$link_css .= '#'.esc_js($uniqid).'.style-2 .icon-centered-container, #'.esc_js($uniqid).'.style-3 .icon-centered-container {min-height: '.esc_js($icon_bg_size).'px;}';
}
if(isset($border_radius) && !empty($border_radius) || strcmp($border_radius, 0) === 0) {
	$link_css .= '#'.esc_js($uniqid).' .icon-decoration {border-radius: '.esc_js($border_radius).'px;}';
}
if(isset($border_color) && !empty($border_color)) {
	$link_css .= '#'.esc_js($uniqid).' .dfd-short-info-block-item .icon-decoration:before {border-color: '.esc_js($border_color).';}';
}
if(isset($hover_border_color) && !empty($hover_border_color)) {
	$link_css .= '#'.esc_js($uniqid).' .dfd-short-info-block-item:hover .icon-decoration:before {border-color: '.esc_js($hover_border_color).';}';
}
if(isset($background_color) && !empty($background_color)) {
	$link_css .= '#'.esc_js($uniqid).' .dfd-short-info-block-item .icon-decoration:before {background: '.esc_js($background_color).';}';
}
if(isset($hover_background_color) && !empty($hover_background_color)) {
	$link_css .= '#'.esc_js($uniqid).' .dfd-short-info-block-item:hover .icon-decoration:before {background: '.esc_js($hover_background_color).';}';
}
if(isset($connector_color) && !empty($connector_color)) {
	$link_css .= '#'.esc_js($uniqid).' .icon-wrap:before, #'.esc_js($uniqid).' .icon-wrap:after {background: '.esc_js($connector_color).';}';
}
if(isset($item_offset) && strcmp($item_offset, '') != 0) {
	$link_css .= '#'.esc_js($uniqid).'.style-2 .dfd-short-info-block-item, #'.esc_js($uniqid).'.style-3 .dfd-short-info-block-item {padding: '.esc_js($item_offset / 2).'px 0;}';
}


$output .= '<div id="'.esc_attr($uniqid).'" class="dfd-short-info-block-wrap '.esc_attr($el_class).'" '.$animation_data.'>';
	if(isset($list_fields) && !empty($list_fields) && function_exists('vc_param_group_parse_atts')) {
		$list_fields = (array) vc_param_group_parse_atts($list_fields);
		
		$output .= '<ul class="dfd-short-info-block-list clearfix '.esc_attr($list_class).'">';

			foreach($list_fields as $fields) {
				$title_html = $subtitle_html = $content_html = $icon_html = '';
				if(isset($fields['block_title']) && !empty($fields['block_title'])) {
					$title_html = '<'.$title_options['tag'].' class="'.$title_options['class'].'" '.$title_options['style'].'>'.(strip_tags($fields['block_title'], "<br><br/>")).'</'.$title_options['tag'].'>';
				}
				if(isset($fields['block_subtitle']) && !empty($fields['block_subtitle'])) {
					$subtitle_html = '<'.$subtitle_options['tag'].' class="grad-millestone-subtitle '.$subtitle_options['class'].'" '.$subtitle_options['style'].'>'.(strip_tags($fields['block_subtitle'], "<br><br/>")).'</'.$subtitle_options['tag'].'>';
				}
				if(isset($fields['block_content']) && !empty($fields['block_content'])) {
					$content_html = '<div class="description" '.$content_style.'>'.(strip_tags($fields['block_content'], "<br><br/>")).'</div>';
				}
				$icon_html = dfd_icon_render($fields);
				
				$output .= '<li class="dfd-short-info-block-item dfd-equalize-height">';
					$output .= '<div class="icon-centered-container">';
						$output .= '<div class="icon-wrap">';
							$output .= '<span class="icon-decoration">';
								$output .= $icon_html;
							$output .= '</span>';
						$output .= '</div>';
					$output .= '</div>';
					$output .= '<div class="content-wrap">';
						$output .= '<div class="content-centered-container">';
							$output .= '<div class="title-wrap">';
								$output .= $title_html;
								$output .= $subtitle_html;
							$output .= '</div>';
							if(!empty($content_html)) {
								$output .= '<div class="description-container">';
									$output .= $content_html;
								$output .= '</div>';
							}
						$output .= '</div>';
					$output .= '</div>';
				$output .= '</li>';
			}
		$output .= '</ul>';
	}
	
	if(!empty($link_css)) {
		$output .= '<script type="text/javascript">'
						. '(function($) {'
							. '$("head").append("<style>'.$link_css.'</style>");'
						. '})(jQuery);'
					. '</script>';
	}
	
$output .= '</div>';

echo $output;