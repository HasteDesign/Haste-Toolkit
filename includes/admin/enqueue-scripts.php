<?php

// Prevents direct access
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Load custom admin styles
 */
function haste_admin_style( $hook ) {
    wp_enqueue_style( 'haste-toolkit-admin', plugins_url( '../../assets/css/admin.css', __FILE__ ) );
}
add_action( 'admin_enqueue_scripts', 'haste_admin_style' );