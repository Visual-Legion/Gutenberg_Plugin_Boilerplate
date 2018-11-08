#!/bin/bash
# rebame.sh

echo
echo " !!! Please download Bash 4 for this to work !!!"
echo
echo "Please enter the name of your project"

read projectNameRaw
echo

projectNameRaw=${projectNameRaw}
projectName=( $projectNameRaw )
projectName="${projectName[@]^}"

echo "Name of project " $projectName
# RENAME Gutenberg Plugin Boilerplate 

# ${string,,}

className=${projectName//[ ]/_}
echo "Class name: " $className

versionConstant=${className^^}
echo "Constant :" $versionConstant

nameLowercaseUnderscore=${className,,}
echo "Name lowercase Underscored :" $nameLowercaseUnderscore

nameLowercaseDash=${nameLowercaseUnderscore//[_]/-}
echo "Name lowercase Dashed :" $nameLowercaseDash
echo

prefixUnderscore="vl_"
prefixDashed="vl-"

newWord=true

for (( i=0; i<${#nameLowercaseUnderscore}; i++ )); do
		#statements
		# echo $nameLowercaseUnderscore   $i $char $newWord
		# echo 
	char=${nameLowercaseUnderscore:$i:1}
	if [[ $char != "_" ]];
	then
		if [[ $newWord = "true" ]];
		then
			 # echo $char
			 prefixUnderscore=$prefixUnderscore$char
			 prefixDashed=$prefixDashed$char
			 newWord="false"
		fi
	else
		newWord="true"
	fi
done

echo "prefix Underscored :" $prefixUnderscore
echo "prefix Dashed :" $prefixDashed

# TODO CHANGEABLE SLUG AND DEFAULTS

echo
echo "Please enter a name for your custome post type? (must be singular, ex:Event)"
read CPTName
echo

CPTName=${CPTName^}
CPTSlug=${CPTName//[ ]/_}
CPTSlug=${CPTSlug,,}

echo "Name of project " $CPTName
echo "Plural " $CPTName"s"
echo "Slug will be " $CPTSlug
echo
echo "Changing file names..."
echo "File names changed"

mv "gutenberg-plugin-boilerplate" "${nameLowercaseDash}"
find ${nameLowercaseDash} \( -type d -o -type f \) -name "*gutenberg-plugin-boilerplate*" | while read -r file; do
    mv "$file" "${file//gutenberg-plugin-boilerplate/$nameLowercaseDash}"
done

find ${nameLowercaseDash} \( -type d -o -type f \) -name "*vl-gpb*" | while read -r file; do
    mv "$file" "${file//vl-gpb/${prefixDashed}}"
done

find ${nameLowercaseDash} \( -type d -o -type f \) -name "*vl_gpb*" | while read -r file; do
    mv "$file" "${file//vl_gpb/${prefixUnderscore}}"
done


echo "Changing strings, thie may take a moment, please wait..."
find ${nameLowercaseDash} -type f -exec sed -i "s/vl_gpb_cpt_example/${CPTSlug}/g" {} +
find ${nameLowercaseDash} -type f -exec sed -i "s/GPB CPT/${CPTName}/g" {} +
find ${nameLowercaseDash} -type f -exec sed -i "s/Gutenberg_Plugin_Boilerplate/${className}/g" {} +
find ${nameLowercaseDash} -type f -exec sed -i "s/gutenberg-plugin-boilerplate/${nameLowercaseDash}/g" {} +
find ${nameLowercaseDash} -type f -exec sed -i "s/vl_gpb/${prefixUnderscore}/g" {} +
find ${nameLowercaseDash} -type f -exec sed -i "s/vl-gpb/${prefixDashed}/g" {} +
find ${nameLowercaseDash} -type f -exec sed -i "s/gutenberg_plugin_boilerplate/${nameLowercaseUnderscore}/g" {} +
find ${nameLowercaseDash} -type f -exec sed -i "s/Gutenberg Plugin Boilerplate/${projectName}/g" {} +
find ${nameLowercaseDash} -type f -exec sed -i "s/GUTENBERG_PLUGIN_BOILERPLATE/${versionConstant}/g" {} +

echo "Strings changed"