# https://stackoverflow.com/a/11392505

sed -i '.bak' 's/NounInPlural/{{ cookiecutter.project_name_plural }}/g' NounInPlural/*
sed -i '.bak' 's/Noun/{{ cookiecutter.project_name }}/g' NounInPlural/*
sed -i '.bak' 's/nounInPlural/{{ cookiecutter.project_name_plural_lower }}/g' NounInPlural/*
sed -i '.bak' 's/noun/{{ cookiecutter.project_name_lower }}/g' NounInPlural/*
sed -i '.bak' 's/NOUN_IN_PLURAL/{{ cookiecutter.project_name_plural_upper }}/g' NounInPlural/*
sed -i '.bak' 's/NOUN/{{ cookiecutter.project_name_upper }}/g' NounInPlural/*

#sed -i '.bak' 's/{{ cookiecutter.project_name_plural }}/NounInPlural/g' NounInPlural/*
#sed -i '.bak' 's/{{ cookiecutter.project_name }}/Noun/g' NounInPlural/*
#sed -i '.bak' 's/{{ cookiecutter.project_name_plural_lower }}/nounInPlural/g' NounInPlural/*
#sed -i '.bak' 's/{{ cookiecutter.project_name_lower }}/noun/g' NounInPlural/*
#sed -i '.bak' 's/{{ cookiecutter.project_name_plural_upper }}/NOUN_IN_PLURAL/g' NounInPlural/*
#sed -i '.bak' 's/{{ cookiecutter.project_name_upper }}/NOUN/g' NounInPlural/*