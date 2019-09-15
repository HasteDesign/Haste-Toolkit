<?php
/**
 * Plugin Name: Haste Toolkit
 * Plugin URI: https://github.com/HasteDesign/Haste-Toolkit
 * Description: Use to add functionalities to be used in plugin or theme, or override the files to make your awesome new plugin.
 * Version: 0.0.1
 * Author: Haste
 * Author URI: https://www.hastedesign.com.br
 * License: GPLv2
 * Text Domain: haste-toolkit
 * Domain Path: languages/
 */

declare( strict_types = 1 );

namespace Haste\Toolkit;


// Prevents direct access
defined( 'ABSPATH' ) || exit;

// Autoload
if ( version_compare( PHP_VERSION, '5.6.0', '>=' ) ) {
	require __DIR__ . '/vendor/autoload.php';
}

if ( ! defined( 'HASTE_TOOLKIT_PLUGIN_FILE' ) ) {
	define( 'HASTE_TOOLKIT_PLUGIN_FILE', __FILE__ );
}

if ( ! class_exists( 'HasteToolkit' ) ) {
	class HasteToolkit {
		/**
		 * Current version number
		 *
		 * @var   string
		 * @since 1.0.0
		 */
		const VERSION = '1.0.0';

		/**
		 * Instance of this class.
		 *
		 * @var object
		 */
		protected static $instance = null;

		/**
		 * Plugin directory path
		 *
		 * @var string
		 */
		private $plugin_dir = null;

		/**
		 * Return the plugin instance.
		 */
		public static function init() {
			$self             = new self();
			$self->plugin_dir = plugin_dir_path( __FILE__ );

			add_action( 'init', array( $self, 'load_textdomain' ) );
			add_action( 'init', array( $self, 'includes' ), 0 );
		}

		/**
		 * A final check if Haste Toolkit exists before kicking off our Haste Toolkit loading.
		 * Haste_Toolkit_VERSION is defined at this point.
		 *
		 * @since  1.0.0
		 */
		public function includes() {
			require_once $this->plugin_dir . '/functions.php';
		}

		/**
		 * Get the plugin url.
		 *
		 * @return string
		 */
		public static function plugin_url() {
			return untrailingslashit( plugins_url( '/', HASTE_TOOLKIT_PLUGIN_FILE ) );
		}

		/**
		 * Load plugin translation
		 */
		public function load_textdomain() {
			load_plugin_textdomain( 'haste-toolkit', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
		}
	}
}
add_action( 'plugins_loaded', array( 'Haste\Toolkit\HasteToolkit', 'init' ) );
