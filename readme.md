<h1 align="center">📃 smark</h1>

<div align="center">Hyper-readable plain text format built above yaml ad markdown</div>

## Usage

Structure some plain text mixed with markdown and yaml.

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

Get an object back!

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

## Methods

```js
var smark = require('smark')

smark.stringify({ title: 'hello world' })
smark.parse('title: hello word')
```
