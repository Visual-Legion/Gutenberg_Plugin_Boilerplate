=== Plugin Name ===
Contributors: ucoates, 
Donate link: https://visual-legion.com
Tags: comments, spam
Requires at least: 3.0.1
Tested up to: 3.4
Stable tag: 4.3
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

This plugin makes is a boilerplate to develop gutenberg plugins

== Description ==

	Todo  
		Command line to automise this
		Multilingual

	Readme
		Once setup, remove this description from the plugins readme and replace with your plugin description

	CPT
	If CPT not needed
		Ignore admin and public folders
		Comment out CPT registration function + editor and page block registration
	Rename	
			vl_gpb_cpt_example
			GPB CPT
			single / archive file names and content

	Renaming 
		Gutenberg_Plugin_Boilerplate
		gutenberg-plugin-boilerplate + block folder names + main php file names
		vl_gpb
		vl-gpb
		gutenberg_plugin_boilerplate
		Gutenberg Plugin Boilerplate 
		GUTENBERG_PLUGIN_BOILERPLATE
		
	Settings
		If needed, uncomment include settings.php
		Change name of settings page, maybe where it is located, and the stored values
		If needed in block, uncomment wp_localize_script



== Installation ==

This section describes how to install the plugin and get it working.

e.g.

1. Upload `Gutenberg maps` to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Add and customise block as you would any other

== Frequently Asked Questions ==

= A question that someone might have =

An answer to that question.


== Screenshots ==

1. This screen shot description corresponds to screenshot-1.(png|jpg|jpeg|gif). Note that the screenshot is taken from
the /assets directory or the directory that contains the stable readme.txt (tags or trunk). Screenshots in the /assets
directory take precedence. For example, `/assets/screenshot-1.png` would win over `/tags/4.3/screenshot-1.png`
(or jpg, jpeg, gif).
2. This is the second screen shot

== Changelog ==

= 0.1 =

Init

== Todo ==

- Add general page block that fetches last custom posts
- CLI setup where user can choose to have CPT features or not