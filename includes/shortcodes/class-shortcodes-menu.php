<?php

/**
 * Haste_Shortcodes class.
 *
 * Built Shortcodes Menu on editor text.
 *
 * @package  Haste
 * @category Shortcodes
 * @author   WPBrasil
 * @version  2.9.0
 */
class Haste_Shortcodes_Menu {

	/**
	 * Initialize the shortcode actions.
	 */
	public function __construct() {
		add_action( 'admin_head', array( $this, 'add_shortcode_button' ) );
		add_filter( 'mce_external_languages', array( $this, 'add_tinymce_locales' ), 20, 1 );
	}

	/**
	 * Add a button for shortcodes to the WP editor.
	 */
	public function add_shortcode_button() {
		if ( !current_user_can( 'edit_posts' ) && !current_user_can( 'edit_pages' ) ) {
			return;
		}

		if ( get_user_option( 'rich_editing' ) == 'true' ) {
			add_filter( 'mce_external_plugins', array( $this, 'add_shortcode_tinymce_plugin' ) );
			add_filter( 'mce_buttons', array( $this, 'register_shortcode_button' ) );
		}
	}

	/**
	 * Add the shortcode button to TinyMCE.
	 *
	 * @param  array $plugins TinyMCE plugins.
	 *
	 * @return array          Haste TinyMCE plugin.
	 */
	public function add_shortcode_tinymce_plugin( $plugins ) {
		$plugins[ 'haste_shortcodes' ] = plugins_url( '../../assets/js/editor-shortcodes.js', __FILE__ );

		return $plugins;
	}

	/**
	 * Register the shortcode button.
	 *
	 * @param array $buttons
	 * @return array
	 */
	public function register_shortcode_button( $buttons ) {
		array_push( $buttons, '|', 'jtfo' );
		return $buttons;
	}

	/**
	 * TinyMCE locales function.
	 *
	 * @param  array $locales TinyMCE locales.
	 *
	 * @return array
	 */
	public function add_tinymce_locales( $locales ) {
		$locales[ 'haste_shortcodes' ] = plugin_dir_path( __FILE__ ) . '/haste-shortcodes-editor-i18n.php';
		return $locales;
	}
}

new Haste_Shortcodes_Menu;
