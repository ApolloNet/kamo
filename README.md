# 鴨鴨 Kamo Kamo

Convert Markdown files to Json data.

## Install

`npm i kamokamo`

## Config

### Default

Place the markdown files (with `.md` extension) in a folder named `content`.

### Custom

If the project needs another folder name or has mutiple folders containing 
markdown files, create a config file named `kamokamo.config.json`.

It should contain the array `dirs`.

### Example

For instance, we need to handle four folders: `pages`, `posts`, `events` 
and `projects`. Here is the content of our `kamokamo.config.json` config file:

```
{
  "dirs": ["pages", "posts", "events", "projects"]
}
```

## Usage

### Output to stdout

`kamokamo`

### Write a Json file

`kamokamo > the-output-folder/the-json-file.json`