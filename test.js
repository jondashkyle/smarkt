var test = require('tape')
var smarkt = require('.')

var exampleString = `
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
`

var exampleObject = {
  title: 'Cyber Mysticism',
  tags: ['technopastoral', 'dark-ux'],
  design: {
    desktop: {
      background: 'red',
      navigation: false
    },
    mobile: {
      background: 'blue',
      navigation: true
    }
  },
  text: 'We won the **battle** and lost the *war*. What Debord called détournement became not just an avant-garde but a popular cultural practice. As I wrote in [A Hacker Manifesto](https://en.wikipedia.org/wiki/A_Hacker_Manifesto): Information wants to be free but is everywhere in chains. It broke free from the commodity form.'
}

test('string', function (t) {
  t.ok(typeof smarkt.stringify(exampleObject) === 'string')
  t.end()
})

test('string', function (t) {
  t.ok(typeof smarkt.parse(exampleString) === 'object')
  t.end()
})
