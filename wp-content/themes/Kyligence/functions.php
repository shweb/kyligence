<?php
/**
 * DFD themes functions
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }

define('DFD_THEME_SETTINGS_NAME', 'native');

if (!isset($content_width)) {
	$content_width = 1200;
}

// Make theme available for translation
load_theme_textdomain('dfd-native', get_template_directory() . '/lang');

# Including theme components
require_once get_template_directory().'/inc/includes.php';

add_action('after_setup_theme', 'dfd_themes_setup_theme');

if (!function_exists('dfd_themes_setup_theme')) {
	/**
	 * Enqueues core theme functionality
	 *
	 * @return true
	 */
	function dfd_themes_setup_theme() {

		// Enqueue theme scripts and styles
		add_action('wp_enqueue_scripts', 'dfd_themes_scripts', 100);
		
		// Enqueue admin scripts and styles
		add_action('admin_enqueue_scripts', 'dfd_themes_admin_scripts');

		add_filter('wp_get_attachment_link', 'dfd_kadabra_prettyadd');
		
		add_filter('excerpt_length', 'dfd_kadabra_excerpt_length', 999 );
		add_filter('next_posts_link_attributes', 'dfd_kadabra_posts_link_attributes_1');
		add_filter('previous_posts_link_attributes', 'dfd_kadabra_posts_link_attributes_2');
		
		// Disable default gallery style
		add_filter( 'use_default_gallery_style' , 'dfd_kadabra_use_default_gallery_style_filter' );
		
		// Register wp_nav_menu() menus
		register_nav_menus(array(
			'primary_navigation' => esc_html__('Primary Navigation', 'dfd-native'),
			'top_left_navigation' => esc_html__('Top Left Navigation (for header style 3 and 4)', 'dfd-native'),
			'top_right_navigation' => esc_html__('Top Right Navigation (for header style 3 and 4)', 'dfd-native'),
			'additional_header_menu' => esc_html__('Additional header navigation', 'dfd-native'),
			'footer_menu' => esc_html__('Footer navigation', 'dfd-native'),
		));

		// Add post thumbnails (http://codex.wordpress.org/Post_Thumbnails)
		add_theme_support('post-thumbnails');

		// Add post formats (http://codex.wordpress.org/Post_Formats)
		add_theme_support('post-formats', array('gallery','video','quote','audio','link'));
		
		add_theme_support( 'automatic-feed-links' );
		
		add_theme_support( 'title-tag' );

		add_post_type_support('page', 'excerpt');
		
		// Set default values for the upload media box
		add_action('switch_theme','dfd_theme_setup');
		
		if(class_exists('WooCommerce')) {
			dfd_themes_woocommerce_support();
		}
		
		/*
		Visual Composer theme integration
		*/
		if ( class_exists( 'Vc_Manager', false ) ) {

			if ( function_exists( 'vc_set_as_theme' ) ) {
				add_action( 'vc_before_init', 'dfd_vc_set_as_theme' );
				function dfd_vc_set_as_theme() {
					vc_set_as_theme();
				}
			}

			if ( function_exists( 'vc_set_default_editor_post_types' ) ) {
				vc_set_default_editor_post_types( array( 'page', 'post', 'portfolio' ) );
			}
		}
	}
}

if (!function_exists('dfd_theme_setup')) {
	/**
	 * Defines image sizes and Wishlist plugin shortcode position
	 *
	 * @return true
	 */
	function dfd_theme_setup() {
		// Set default values for the upload media box
		update_option( 'image_default_link_type', 'none' );
		update_option( 'image_default_size', 'large' );
		update_option( 'yith_wcwl_button_position', 'shortcode' );
	}
}

if (!function_exists('dfd_themes_woocommerce_support')) {
	/**
	 * WooCommerce support
	 *
	 * @return true
	 */
	function dfd_themes_woocommerce_support() {
		add_theme_support( 'woocommerce' );

		# star rating for proucts in loop
		add_filter('woocommerce_add_to_cart_fragments', 'woocommerce_header_add_to_cart_fragment');
		if (function_exists('dfd_woocommerce_disable_styles')) {
			dfd_woocommerce_disable_styles();
		}
		
		# Hook in on activation
		global $pagenow;
		if ( is_admin() && isset( $_GET['activated'] ) && $pagenow == 'themes.php' ) {
			add_action( 'init', 'dfd_kadabra_woocommerce_image_dimensions', 1 );
		}
	}
}
add_action( 'init', 'custom_post_news_room' );
function custom_post_news_room() {
	register_post_type( 'news-room',
		array('labels' => array(
			'name' => __('News Room', 'post type general name'), /* This is the Title of the Group */
			'singular_name' => __('News Room', 'post type singular name'), /* This is the individual type */
			'add_new' => __('Add New', 'custom post type item'), /* The add new menu item */
			'add_new_item' => __('Add New'), /* Add New Display Title */
			'edit' => __( 'Edit' ), /* Edit Dialog */
			'edit_item' => __('Edit'), /* Edit Display Title */
			'new_item' => __('New '), /* New Display Title */
			'view_item' => __('View'), /* View Display Title */
			'search_items' => __('Search news'), /* Search Custom Type Title */
			'not_found' =>  __('Nothing found in the Database.'), /* This displays if there are no entries yet */
			'not_found_in_trash' => __('Nothing found in Trash'), /* This displays if there is nothing in the trash */
			'parent_item_colon' => ''
		), /* end of arrays */
			'description' => __( 'This is the example custom post type' ), /* Custom Type Description */
			'public' => true,
			'publicly_queryable' => true,
			'exclude_from_search' => false,
			'show_ui' => true,
			'query_var' => true,
			'menu_position' => 4, /* this is what order you want it to appear in on the left hand side menu */
			'capability_type' => 'post',
			'hierarchical' => false,
			/*'rewrite' => array('slug' => 'news', 'with_front' => true ),*/
			'has_archive' => false,
			/* the next one is important, it tells what's enabled in the post editor */
			'supports' => array( 'title', 'editor', 'thumbnail')
		)
	);

}
// REGISTER TAXOMONIES
register_taxonomy( 'news-room',
	array('news-room'),
	array('hierarchical' => true,
		'labels' => array(
			'name' => __( 'News Categories' ), /* name of the custom taxonomy */
			'singular_name' => __( 'news Category' ), /* single taxonomy name */
			'search_items' =>  __( 'Search news Categories' ), /* search title for taxomony */
			'all_items' => __( 'All news Categories' ), /* all title for taxonomies */
			'parent_item' => __( 'Parent news Category' ), /* parent title for taxonomy */
			'parent_item_colon' => __( 'Parent news Category:' ), /* parent taxonomy title */
			'edit_item' => __( 'Edit news Category' ), /* edit custom taxonomy title */
			'update_item' => __( 'Update news Category' ), /* update title for taxonomy */
			'add_new_item' => __( 'Add New news item' ), /* add new title for taxonomy */
			'new_item_name' => __( 'New Custom news' ) /* name title for taxonomy */
		),
		'show_ui' => true,
		'query_var' => true,
	)
);

// join us
add_action('init', 'my_custom_init');
function my_custom_init()
{
	register_post_type('Careers',
		array('labels' => array(
			'name' => __('Join us', 'post type general name'), /* This is the Title of the Group */
			'singular_name' => __('Join us', 'post type singular name'), /* This is the individual type */
			'add_new' => __('Add Post', 'custom post type item'), /* The add new menu item */
			'add_new_item' => __('Add Post'), /* Add New Display Title */
			'edit' => __( 'Edit' ), /* Edit Dialog */
			'edit_item' => __('Edit'), /* Edit Display Title */
			'new_item' => __('New '), /* New Display Title */
			'view_item' => __('View'), /* View Display Title */
			'search_items' => __('Search join-us Post'), /* Search Custom Type Title */
			'not_found' =>  __('Nothing found in the Database.'), /* This displays if there are no entries yet */
			'not_found_in_trash' => __('Nothing found in Trash'), /* This displays if there is nothing in the trash */
			'parent_item_colon' => ''
		), /* end of arrays */
			'description' => __( 'This is custom post type join-us' ), /* Custom Type Description */
			'public' => true,
			'publicly_queryable' => true,
			'exclude_from_search' => false,
			'show_ui' => true,
			'query_var' => true,
			'menu_position' => 5, /* this is what order you want it to appear in on the left hand side menu */
			'capability_type' => 'post',
			'hierarchical' => false,
			/*'rewrite' => array('slug' => 'news', 'with_front' => true ),*/
			'has_archive' => false,
			/* the next one is important, it tells what's enabled in the post editor */
			'supports' => array( 'title', 'editor','thumbnail','excerpt','custom-fields’,‘comments’,‘page-attributes')
		)
	);
}

// REGISTER TAXOMONIES join us
register_taxonomy( 'join-us',
	array('careers'),
	array('hierarchical' => true,
		'labels' => array(
			'name' => __( 'News Categories' ), /* name of the custom taxonomy */
			'singular_name' => __( 'news Category' ), /* single taxonomy name */
			'search_items' =>  __( 'Search news Categories' ), /* search title for taxomony */
			'all_items' => __( 'All news Categories' ), /* all title for taxonomies */
			'parent_item' => __( 'Parent news Category' ), /* parent title for taxonomy */
			'parent_item_colon' => __( 'Parent news Category:' ), /* parent taxonomy title */
			'edit_item' => __( 'Edit news Category' ), /* edit custom taxonomy title */
			'update_item' => __( 'Update news Category' ), /* update title for taxonomy */
			'add_new_item' => __( 'Add New Category item' ), /* add new title for taxonomy */
			'new_item_name' => __( 'New Custom Category' ) /* name title for taxonomy */
		),
		'show_ui' => true,
		'query_var' => true,
	)
);

function add_js_scripts() {
	wp_enqueue_script( 'script', get_template_directory_uri().'/assets/js/script.js', array('jquery'), '1.0', true );
	wp_localize_script('script', 'ajaxurl', admin_url( 'admin-ajax.php' ) );
}
add_action('wp_enqueue_scripts', 'add_js_scripts');

add_action( 'wp_ajax_mon_action', 'mon_action' );
add_action( 'wp_ajax_nopriv_mon_action', 'mon_action' );

function mon_action()
{
	$page = (isset($_POST['pageNumber'])) ? $_POST['pageNumber'] : 0;
	$ajax_query = query($page);
	boucle($ajax_query,$page);
}
function query($page) {

	$ppp = (isset($_POST["ppp"])) ? $_POST["ppp"] : 3;
	$cat = ($_POST['cat']!='null') ? array($_POST['cat']) : array('30','31','32');
	$args = array(
		'post_type'  =>  'Careers',
		'suppress_filters' => true,
		'posts_per_page' => $ppp,
		'tax_query' => array(
			array(
				'taxonomy' => 'join-us',
				'terms' => $cat,
				'include_children' => true,
				'operator' => 'IN'
			)
		),
		'paged'    => $page,
	);
	return new WP_Query($args);
}

add_action( 'wp_ajax_load_more', 'load_more' );
add_action( 'wp_ajax_nopriv_load_more', 'load_more' );

function load_more() {
	$page = (isset($_POST['pageNumber'])) ? $_POST['pageNumber'] : 0;
	$ajax_query = query($page);
	boucle($ajax_query,$page);
}

add_action( 'wp_ajax_select', 'select' );
add_action( 'wp_ajax_nopriv_select', 'select');

function select() {
	$page = (isset($_POST['pageNumber'])) ? $_POST['pageNumber'] : 0;
	$ajax_query = query($page);
	boucle_filtre($ajax_query,$page);
}

add_action( 'wp_ajax_search', 'search' );
add_action( 'wp_ajax_nopriv_search', 'search' );

function search() {
	// récupération du mot tapé dans la recherche
	$page = (isset($_POST['pageNumber'])) ? $_POST['pageNumber'] : 0;
	$keyword = $_POST['keyword'];

	$args = array(
		'post_type'  =>  'Careers',
		's' => $keyword
	);
	$ajax_query = new WP_Query($args);
	boucle_filtre($ajax_query,$page);
}

function boucle_filtre($ajax_query,$page)
{
	if ($ajax_query->have_posts())
	{
		while ($ajax_query->have_posts())
		{
			$ajax_query->the_post();
			get_template_part('join-us' );
		}
		if($ajax_query->max_num_pages > $page)
		{
			echo "<input type='hidden' class='load' value='true'>";
		}else{
			echo "<input type='hidden' class='load' value='false'>";
		}
	}else{
		echo "<li class='job_listing' style='text-align: center;padding: 40px'>Sorry, no posts matched your criteria</li>";
	}
	die();
}
function boucle($ajax_query,$page)
{
	if ($ajax_query->have_posts())
	{
		while ($ajax_query->have_posts())
		{
			$ajax_query->the_post();
			get_template_part('join-us' );
		}
	}
	if($ajax_query->max_num_pages > $page)
	{
		echo "<input type='hidden' class='load' value='true'>";
	}else{
		echo "<input type='hidden' class='load' value='false'>";
	}
	die();
}