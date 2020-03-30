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

### OOP
The plugin structure comes with a basic folder structure based on modern PHP development. The folder `/src` is where classes and interfaces should be, subdivided by "domains". For example, the structure comes with `/src/meta-boxes`, in that folder classes related to meta boxes will be placed, like meta box creation helpers, custom meta boxes registrations, etc. 

But, we could have a different approach, understanding domains as a different thing, we could group all classes related to a specific functionality together, even if it means we'll end with classes that deal with meta boxes, custom post types, API's, etc. in the same folder.

So, don't think too much about it, and get an approach that makes sense to you.

### Autoload
To generate the composer autoload, for the first time, you just have to run `composer install` and that will do it.
If you have added new namespaces, you should run `composer dumpautoload -o`.
