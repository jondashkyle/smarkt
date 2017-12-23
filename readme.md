<h1 align="center">📃 smarkt</h1>

<div align="center">Hyper-readable plain text format built above yaml ad markdown</div>

## Usage

Transform some structured plain text, including markdown and yaml, into JSON, and visa versa. Super useful for archivability and readability.

```js
var smarkt = require('smarkt')

var str = smarkt.parse(`
title: Cyber Mysticism
----
tags:
  - technopastoral
  - dark-ux
----
text: The vectoralist class are the modern day dotcom corporate giants, the transnational turbo-capitalist regime, who own the means of production and thus monopolize abstractions.
`)

var obj = smarkt.stringify({
  title: 'Cyber Mysticism',
  { tags: ['technopastoral', 'dark-ux' ]},
  text: 'The vectoralist class are the modern day dotcom corporate giants, the transnational turbo-capitalist regime, who own the means of production and thus monopolize abstractions.'
})
```

## Structure

A plain-text file is separated into fields delineated by four dashes.

```
----
````

Give the field a name and define it’s value.

```
title: Cyber Mysticism
```

The value can also be YAML.

```
tags:
  - technopastoral
  - dark-ux
```

<details id="example-input">
<summary>Plain text input expanded</summary>

```
title: Cyber Mysticism
----
tags:
  - technopastoral
  - dark-ux
----
design:
  desktop:
    background: red
    navigation: false
  mobile:
    background: blue
    navigation: true
----
text:

We won the **battle** and lost the *war*. What Debord called détournement became not just an avant-garde but a popular cultural practice. As I wrote in [A Hacker Manifesto](https://en.wikipedia.org/wiki/A_Hacker_Manifesto): Information wants to be free but is everywhere in chains. It broke free from the commodity form.
```

</details>


<details id="example-output">
<summary>JSON output expanded</summary>

```json
{
  "title": "Cyber Mysticism",
  "tags": ["technopastoral", "dark-ux"],
  "design": {
    "desktop": {
      "background": "red",
      "navigation": false
    },
    "mobile": {
      "background": "blue",
      "navigation": true
    }
  },
  "text": "We won the **battle** and lost the *war*. What Debord called détournement became not just an avant-garde but a popular cultural practice. As I wrote in [A Hacker Manifesto](https://en.wikipedia.org/wiki/A_Hacker_Manifesto): Information wants to be free but is everywhere in chains. It broke free from the commodity form."
}
```

</details>

## Methods

### `stringify`

Accepts a single argument which must be type `string`.

### `parse`

Accepts a single argument which must be type `object`.

## Alternate usage

### Direct access

```js
var read = require('smarkt/read')
var write = require('smarkt/write')
```

## Todo

- [ ] Tests
- [ ] Expanded YAML support