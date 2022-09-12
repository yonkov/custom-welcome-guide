<?php
/*
 * Plugin Name:       Custom Welcome Guide
 * Description:       Create interactive step-by-step introduction tours/tutorials/walkthrough guides for your admin users or content creators through a friendly user admin interface. Customize the Welcome Guide component for the Block editor.
 * Requires at least: 5.4
 * Requires PHP:      5.6
 * Version:           1.0.8
 * Author:            Atanas Yonkov, Vlastimir Samolov
 * Author URI:        https://github.com/yonkov/custom-welcome-guide
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       custom-welcome-guide

=====================================================================================
Copyright (C) 2021 Atanas Yonkov and Vlastimir Samolov

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with WordPress; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
=====================================================================================
 */

/**
 * Exit if accessed directly
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit( 'Woof Woof Woof!' );
}

if ( ! function_exists( 'custom_welcome_guide_fs' ) ) {
    // Create a helper function for easy SDK access.
    function custom_welcome_guide_fs() {
        global $custom_welcome_guide_fs;

        if ( ! isset( $custom_welcome_guide_fs ) ) {
            // Include Freemius SDK.
            require_once dirname( __FILE__ ) . '/freemius/start.php';

            $custom_welcome_guide_fs = fs_dynamic_init(
                [
                    'id'             => '9840',
                    'slug'           => 'custom-welcome-guide',
                    'type'           => 'plugin',
                    'public_key'     => 'pk_46d1336692c127841f85ebcb2a2cf',
                    'is_premium'     => false,
                    'has_addons'     => false,
                    'has_paid_plans' => false,
                    'menu'           => [
                        'account' => false,
                        'support' => false,
                    ],
                ]
            );
        }

        return $custom_welcome_guide_fs;
    }

    // Init Freemius.
    custom_welcome_guide_fs();
    // Signal that SDK was initiated.
    do_action( 'custom_welcome_guide_fs_loaded' );
}

if ( ! function_exists( 'custom_welcome_guide_fs' ) ) {
    // Create a helper function for easy SDK access.
    function custom_welcome_guide_fs() {
        global $custom_welcome_guide_fs;

        if ( ! isset( $custom_welcome_guide_fs ) ) {
            // Include Freemius SDK.
            require_once dirname( __FILE__ ) . '/freemius/start.php';

            $custom_welcome_guide_fs = fs_dynamic_init(
                [
                    'id'             => '9840',
                    'slug'           => 'custom-welcome-guide',
                    'type'           => 'plugin',
                    'public_key'     => 'pk_46d1336692c127841f85ebcb2a2cf',
                    'is_premium'     => false,
                    'has_addons'     => false,
                    'has_paid_plans' => false,
                    'menu'           => [
                        'account' => false,
                        'support' => false,
                    ],
                ]
            );
        }

        return $custom_welcome_guide_fs;
    }

    // Init Freemius.
    custom_welcome_guide_fs();
    // Signal that SDK was initiated.
    do_action( 'custom_welcome_guide_fs_loaded' );
}if ( ! function_exists( 'custom_welcome_guide_fs' ) ) {
    // Create a helper function for easy SDK access.
    function custom_welcome_guide_fs() {
        global $custom_welcome_guide_fs;

        if ( ! isset( $custom_welcome_guide_fs ) ) {
            // Include Freemius SDK.
            require_once dirname( __FILE__ ) . '/freemius/start.php';

            $custom_welcome_guide_fs = fs_dynamic_init(
                [
                    'id'             => '9840',
                    'slug'           => 'custom-welcome-guide',
                    'type'           => 'plugin',
                    'public_key'     => 'pk_46d1336692c127841f85ebcb2a2cf',
                    'is_premium'     => false,
                    'has_addons'     => false,
                    'has_paid_plans' => false,
                    'menu'           => [
                        'account' => false,
                        'support' => false,
                    ],
                ]
            );
        }

        return $custom_welcome_guide_fs;
    }

    // Init Freemius.
    custom_welcome_guide_fs();
    // Signal that SDK was initiated.
    do_action( 'custom_welcome_guide_fs_loaded' );
}

/* Enqueue scripts and styles for the WordPress Block editor */
function custom_welcome_guide_editor_script_register() {
    $script_asset = require plugin_dir_path( __FILE__ ) . 'build/index.asset.php';
    wp_register_script( 'build/index.js', plugins_url( 'build/index.js', __FILE__ ), $script_asset['dependencies'], $script_asset['version'] );
}
add_action( 'init', 'custom_welcome_guide_editor_script_register' );

function custom_welcome_guide_editor_assets_enqueue() {
    wp_enqueue_script( 'build/index.js' );
    wp_enqueue_style( 'custom-welcome-guide-editor-css', plugins_url( 'build/style-index.css', __FILE__ ), [], filemtime( plugin_dir_path( __FILE__ ) ) );
    $script_params = [
        'rest_url' => esc_url( get_rest_url() ),
        'site_url' => esc_url( get_site_url() ),
    ];
    wp_localize_script( 'build/index.js', 'custom_welcome_guide_script_params', $script_params );
}
add_action( 'enqueue_block_editor_assets', 'custom_welcome_guide_editor_assets_enqueue' );

/* Enqueue scripts and styles for the whole WordPress admin */
function custom_welcome_guide_admin_scripts_and_styles() {
    $script_asset = require plugin_dir_path( __FILE__ ) . 'build/admin.asset.php';
    wp_enqueue_script( 'custom-welcome-guide-plugin-script', plugins_url( 'build/admin.js', __FILE__ ), $script_asset['dependencies'], $script_asset['version'], true );
    $script_params = [
        'rest_url'              => esc_url( get_rest_url() ),
        'site_url'              => esc_url( get_site_url() ),
        'guide_settings'        => custom_welcome_guide_get_plugin_settings(),
        'show_deprecated_guide' => version_compare( $GLOBALS['wp_version'], '5.5', '<' ) ? true : false,
    ];
    wp_localize_script( 'custom-welcome-guide-plugin-script', 'custom_welcome_guide_script_params', $script_params );
    wp_enqueue_style( 'custom-welcome-guide-plugin-style', plugins_url( 'build/admin.css', __FILE__ ), [ 'wp-components' ], filemtime( plugin_dir_path( __FILE__ ) . 'build/admin.css' ) );
}

add_action( 'admin_enqueue_scripts', 'custom_welcome_guide_admin_scripts_and_styles' );

/* Throw a dismissible warning message if the Classic Editor is used for Posts and Pages*/
function custom_welcome_guide_classic_editor_admin_notice() {

    $plugin_link = '<a href="' . esc_url( get_admin_url() ) . 'edit.php?post_type=guides&page=custom_welcome_guide' . '">' . __( 'Custom Welcome Guide', 'custom-welcome-guide' ) . '</a>';

    /* translators: Plugin name*/
    if ( get_current_screen()->base == 'post' && ( get_post_type() == 'post' || get_post_type() == 'page' ) ) {
        printf(
            '<div class="notice notice-warning is-dismissible"><p>' .
            esc_html__( 'You should use the Block Editor to take advantage of all the options provided by the %1$s plugin!', 'custom-welcome-guide' ) .
            '</p></div>',
            $plugin_link
        );
    }
}
add_action( 'admin_notices', 'custom_welcome_guide_classic_editor_admin_notice' );

/* Create Guide Custom post type */
require_once plugin_dir_path( __FILE__ ) . 'inc/guide.php';

/* Register plugin Settings page under Guides Custom Post Type */
function custom_welcome_guide_settings_page() {
    $page_title = __( 'Custom Welcome Guide Options', 'custom-welcome-guide' );
    $menu_title = __( 'Settings', 'custom-welcome-guide' );
    $capability = 'manage_options';
    $slug       = 'custom_welcome_guide';
    $callback   = 'custom_welcome_guide_page_content_callback';
    $icon       = 'dashicons-admin-plugins';
    $position   = 100;

    add_submenu_page( 'edit.php?post_type=guides', $page_title, $menu_title, $capability, $slug, $callback );
}

add_action( 'admin_menu', 'custom_welcome_guide_settings_page' );

/**
 * Add Settings link in WordPress Plugins Page
 */
function custom_welcome_guide_settings_link( array $links ) {
    $url           = get_admin_url() . 'edit.php?post_type=guides&page=custom_welcome_guide';
    $settings_link = '<a href="' . esc_url( $url ) . '">' . esc_html__( 'Settings', 'custom-welcome-guide' ) . '</a>';
    $links[]       = $settings_link;
    return $links;
}

add_filter( 'plugin_action_links_' . plugin_basename( __FILE__ ), 'custom_welcome_guide_settings_link' );

/**
 * Add a page wrapper to the Plugin's settings page and let React.js handle the rest
 */
function custom_welcome_guide_page_content_callback() {
    ?>
    <div id="custom-welcome-guide-wrapper" class="custom-welcome-guide-wrapper"></div>
    <?php
}

/**
 * Add Featured Image Url to WP Json
 *
 * @see https://stackoverflow.com/questions/33320227/wp-rest-api-angularjs-how-to-grab-featured-image-for-display-on-page
 */

// Get image URL
function custom_welcome_guide_get_thumbnail_url( $post ) {
    if ( has_post_thumbnail( $post['id'] ) ) {
        $imgArray = wp_get_attachment_image_src( get_post_thumbnail_id( $post['id'] ), 'medium_large' );
        $imgURL   = $imgArray[0];
        return esc_url( $imgURL );
    } else {
        return false;
    }
}

function custom_welcome_guide_insert_thumbnail_url() {
    register_rest_field(
        'guides',
        'featured_image',  // key-name in json response
        [
            'get_callback'    => 'custom_welcome_guide_get_thumbnail_url',
            'update_callback' => null,
            'schema'          => null,
        ]
    );
}

add_action( 'rest_api_init', 'custom_welcome_guide_insert_thumbnail_url' );

/**
 * Store plugin's settings
 * plugin options object json schema for the rest api support
 *
 * @since wp 5.3
 * @see https://wordpress.stackexchange.com/questions/360207/serialized-settings-in-rest-api
 */
function custom_welcome_guide_register_settings() {

    // default settings
    $default_options = [
        'is_show_post'     => 'true',
        'is_show_page'     => 'true',
        'is_show_cpt'      => '',
        'is_show_admin'    => '',
        'featured_post_id' => '',
    ];
    add_option( 'cwg_options', $default_options );

    // plugin options schema prepare for the rest api
    $general_options = [
        'show_in_rest' => [
            'schema' => [
                'type'       => 'object',
                'properties' => [
                    'is_show_post'     => [
                        'type'              => 'string',
                        'default'           => 'true',
                        'sanitize_callback' => 'sanitize_text_field',
                    ],
                    'is_show_page'     => [
                        'type'              => 'string',
                        'default'           => 'true',
                        'sanitize_callback' => 'sanitize_text_field',
                    ],
                    'is_show_cpt'      => [
                        'type'              => 'string',
                        'default'           => '',
                        'sanitize_callback' => 'sanitize_text_field',
                    ],
                    'is_show_admin'    => [
                        'type'              => 'string',
                        'default'           => '',
                        'sanitize_callback' => 'sanitize_text_field',
                    ],
                    'featured_post_id' => [
                        'type'              => 'string',
                        'default'           => '',
                        'sanitize_callback' => 'sanitize_text_field',
                    ],
                ],
            ],
        ],
    ];

    // register plugin options as an object
    register_setting(
        'cwg_settings',
        'cwg_options',
        $general_options
    );

}

add_action( 'init', 'custom_welcome_guide_register_settings' );

/**
 * Get Plugin Options
 * Escape db output
 */
function custom_welcome_guide_get_plugin_settings() {
    $guide_settings = get_option( 'cwg_options' );
    if ( ! empty( $guide_settings ) ) {
        return array_map( 'esc_attr', $guide_settings );
    }
}

/**
 * Disable the Default Welcome Guide Popup when a Featured Guide is selected from the Plugin Options.
 *
 * @see: https://wordpress.org/plugins/disable-welcome-messages-and-tips/
 */
function custom_welcome_guide_hide_default_welcome_guide() {

    $featured_guide = empty( get_option( 'cwg_options' ) ) ? '' : get_option( 'cwg_options' )['featured_post_id'];

    if ( $featured_guide && get_current_screen()->base == 'post' ) :
        ?>
            <script>
            window.onload = function(){
                wp.data && wp.data.select( 'core/edit-post' ).isFeatureActive( 'welcomeGuide' ) &&
                wp.data.dispatch( 'core/edit-post' ).toggleFeature( 'welcomeGuide' )
            };
            </script>
        <?php
    endif;
}

add_action( 'admin_head', 'custom_welcome_guide_hide_default_welcome_guide' );
