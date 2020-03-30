# Haste Toolkit

Haste Toolkit is plugin development starter, with some useful resources like composer autoload, LaravelMix, PHPCS and a small project structure to help you start your plugin development without caring too much about those simple things.

## Getting Started

You will need to download and rename Haste Toolkit to reflect the name and slugs of your custom plugin to be developed, after that, you are ready to install and activate it, and start coding your fucntionalities!

- Download the lastest version of Haste Toolkit
- Extract it to your `/plugins` folder
- Renaming
- - Rename it to the desired plugin slug. (Ex. `my-plugin-name`)
- - Rename the main plugin file to reflect the folder name.
- - Rename namespaces from `HasteToolkit`to `MyPluginNamespace`
- - Rename comments, prefixes and other stuff, searching for `HasteToolkit`, `haste-toolkit`, `haste_toolkit`, `haste`.
- Activate the plugin

The plugin will do nothing, so you're able to start developing your functionalities in the way you want. The main plugin file is responsible to register the plugin, load the translation, load the composer PSR-4 autoload, and require the `functions.php` file.

### The functions.php file
The `functions.php` in the root of the plugin can be used almost like a `functions.php` of a theme. It was built to make easy to anyone familiar with WordPress theme functions to get started. Just put your hooks and callbacks there, and it should work!
