<h1 align="center">📃 smarkt</h1>

<div align="center">Hyper-readable structure for defining fields and values in plain text</div>

## Usage

Transform some structured plain text including Markdown and YAML into JSON, and visa versa. Super useful for archivability and readability. Feature parity with Kirby’s [file structure](https://getkirby.com/docs/content/adding-content).

```js
var smarkt = require('smarkt')

var str = smarkt.parse(`
title: Cyber Mysticism
----
tags:
  - technopastoral
  - ambient
----
text: Art has always been a focusing device, the frame is a focusing device. What I’m trying to do is eliminate the frame, eliminate all those distractions and put you in direct relationship to the real experience and the real power: your ability to perceive.
`)

var obj = smarkt.stringify({
  title: 'Cyber Mysticism',
  { tags: ['technopastoral', 'ambient']},
  text: 'Art has always been a focusing device, the frame is a focusing device. What I’m trying to do is eliminate the frame, eliminate all those distractions and put you in direct relationship to the real experience and the real power: your ability to perceive.'
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
  - ambient
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

Information wants to be free.
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
  "text": "Information wants to be free."
}
```

</details>

## Methods

### `stringify`

Accepts a single argument which must be type `string`. Returns an `object`.

### `parse`

Accepts a single argument which must be type `object`. Returns a `string`.

## Alternate usage

```
var stringify = require('smarkt/stringify')
var parse = require('smarkt/parse')
```

Sometimes it’s handy just to access a single method to reduce bundle size. To do this, simply require the desired method by name.

## Todo

- [ ] Tests
- [ ] `.stringify` Remove quotes around YAML array values