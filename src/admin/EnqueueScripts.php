<?php

namespace Haste\Toolkit\Admin;
use Haste\Toolkit\HasteToolkit as HasteToolkit;

// Prevents direct access
defined( 'ABSPATH' ) || exit;

class EnqueueScripts {
	/**
	 * Instantiate the object and register the hooks.
	 * @return [type] [description]
	 */
	public static function init() {
		$self = new self();
		add_action( 'admin_enqueue_scripts', array( $self, 'load_admin_styles' ) );
	}

	/**
	 * Load your admin styles.
	 * @param  [type] $hook [description]
	 * @return
	 */
	public function load_admin_styles() {
		var_dump( HasteToolkit::plugin_url() . '/assets/dist/css/admin.css' );
	    wp_enqueue_style( 'haste-toolkit-admin', HasteToolkit::plugin_url() . '/assets/dist/css/admin.css' );
	}
}
