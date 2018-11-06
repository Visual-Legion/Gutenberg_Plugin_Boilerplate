Gutenberg plugin boilerplate

# Instructions

run _rename.sh
copy folder to plugins folder
cd to folder
run npm install
if you don't have npx, run npm install npx -g
run npx webpack --watch 
start coding 

CPT
	If CPT not needed
		Ignore admin and public folders
		Comment out CPT registration function + editor and page block registration
	
Settings
	If not needed, uncomment include settings.php
	Change name of settings page, maybe where it is located, and the stored values
	If needed in block, uncomment wp_localize_script which inject backend values into blocks (like api_keys from the settings page)


# Todo  
	
	Livereload
	Multilingual


= 0.0.2 =

	- Command line script to automise renaming

= 0.0.1 =

	- Necessary folder and files for gutenberg plugins + 