# 鴨鴨 Kamokamo

Convert Markdown files to Json data.

## Install

`npm i kamokamo`

## Usage

### Output to stdout

`kamokamo`

### Write a Json file

`kamokamo > the-output-folder/the-json-file.json`

## Folders

### Default

Place the markdown files (with `.md` extension) in a folder named `content`.

### Custom

If the project needs another folder name or has mutiple folders containing 
markdown files, create a config file named `kamokamo.config.json`.

It should contain the array `dirs`.

### Example

We need to handle four folders: `pages`, `posts`, `events` and `projects`.

Here is the content of our `kamokamo.config.json` config file:

```
{
  "dirs": ["pages", "posts", "events", "projects"]
}
```

## Home

The object key of a content can be rewritten as `"/"` for a future usage 
as a homepage path.

### Example

We want the contents of `/pages/home.md` to be used for our homepage.

Here is config:

```
{
  "home": "/pages/home"
}
```

## Dates

Frontmatter fields named `date` or `dates` are processed.

They can be of type `String` or `Array of Strings`.

Formatting uses [date-fns format](https://date-fns.org/v2.11.1/docs/format)

## Latitude and longitude from an address

If a markdown file contains an `address` front matter field, Kamokamo adds 
its latitude `lat` and longitude `lon` to the json output.

It is done thanks to [Nominatim](https://nominatim.openstreetmap.org/).

## Undocumented params

Have a look at `lib/set-config.js` for yet undocumented params :)