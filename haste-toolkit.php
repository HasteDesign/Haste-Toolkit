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

 // Prevents direct access
if ( ! defined( 'ABSPATH' ) ) {
   exit;
}

if( ! class_exists( 'Haste_Toolkit' ) ) {

   class Haste_Toolkit {
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
		* Initialize the plugin.
		*/
	   function __construct() {
		   $this->plugin_dir = plugin_dir_path( __FILE__ );
		   add_action( 'init', array( $this, 'load_textdomain' ) );
		   add_action( 'init', array( $this, 'includes' ), 0 );
	   }
	   /**
		* Return the plugin instance.
		*/
	   public static function init()
	   {
		   // If the single instance hasn't been set, set it now.
		   if ( null == self::$instance ) {
			   self::$instance = new self;
		   }
		   return self::$instance;
	   }
	   /**
		* Return file name in haste pattern from class name. {Haste_Class_Name}
		*
		* @param  	string $class
		* @return 	string
		* @since 	1.0.0
		*/
	   private function get_file_name_from_class( $class ) {
		   $class = str_replace( 'Haste_', '', $class );
		   $class = str_replace( '_', '-', $class );
		   $class = strtolower( $class );
		   return 'class-' . $class . '.php';
	   }
	   /**
		* A final check if Haste Toolkit exists before kicking off our Haste Toolkit loading.
		* Haste_Toolkit_VERSION is defined at this point.
		*
		* @since  1.0.0
		*/
	   public function includes() {
		   if ( ! defined( 'Haste_Toolkit_VERSION' ) ) {
			   define( 'Haste_Toolkit_VERSION', self::VERSION );
		   }
		   // Now kick off the class autoloader.
		   spl_autoload_register( array( $this, 'autoload_classes' ) );

		   // Load the functions.php
		   require_once $this->plugin_dir . '/functions.php';
	   }

	   /**
		* Autoloads files with Haste classes when needed
		*
		* @since  1.0.0
		* @param  string $class_name Name of the class being requested
		*/
	   public function autoload_classes( $class_name ) {
		   if ( 0 !== strpos( $class_name, 'Haste' ) ) {
			   return;
		   }
		   $file = $this->get_file_name_from_class( $class_name );
		   $path = 'includes/classes';
		   if ( 'Haste_Front_End_Form' === $class_name ) {
			   $path .= '/abstracts';
		   }
		   include_once( $this->plugin_dir . "/$path/$file" );
	   }
	   /**
		* Load plugin translation
		*/
	   public function load_textdomain() {
		   load_plugin_textdomain( 'haste-toolkit', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
	   }
   }
}

/**
* Initialize the plugin actions.
*/
add_action( 'plugins_loaded', array( 'Haste_Toolkit', 'init' ) );
