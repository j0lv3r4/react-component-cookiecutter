## Getting started

```
cp ../react-component/src/components/NounInPlural .
```

```js
{
  project_name_plural: "NounInPlural",
  project_name: "Noun", 
  project_name_plural_lower: "nounInPlural", 
  project_name_lower: "noun",
  project_name_plural_upper: "NOUN_IN_PLURAL",
  project_name_upper: "NOUN"
}
  
```

Search and replace:

```bash
# Linux
sed -i 's/foo/bar/g' *

# macOS
sed -i '.bak' 's/foo/bar/g' *
```

- NounInPlural, e.g., `Projects`
- Noun, e.g., `Project`
- nounInPlural, e.g., `projects` {{ cookiecutter.project_slug }}
- noun, e.g., `project` {{ cookiecutter.project_slug }}
- NOUN_IN_PLURAL, e.g., `PROJECTS`
- NOUN, e.g., `PROJECT`
