var test = require('ava')
var smarkt = require('.')

var exampleString = `title: Cyber Mysticism
----
tags:
  - technopastoral
  - dark-ux
----
isMobileFriendly: true
----
design:
  desktop:
    background: red
    navigation: false
    styleUrl: desktop.css
  mobile:
    background: blue
    navigation: true
    styleUrl: mobile.css
----
text: We won the **battle** and lost the *war*.

What Debord called détournement became not just an avant-garde but a popular cultural practice.


As I wrote in [A Hacker Manifesto](https://en.wikipedia.org/wiki/A_Hacker_Manifesto): Information wants to be free but is everywhere in chains.

It broke free from the commodity form.`

var exampleObject = {
  title: 'Cyber Mysticism',
  tags: ['technopastoral', 'dark-ux'],
  isMobileFriendly: true,
  design: {
    desktop: {
      background: 'red',
      navigation: false,
      styleUrl: 'desktop.css'
    },
    mobile: {
      background: 'blue',
      navigation: true,
      styleUrl: 'mobile.css'
    }
  },
  text: `We won the **battle** and lost the *war*.

What Debord called détournement became not just an avant-garde but a popular cultural practice.


As I wrote in [A Hacker Manifesto](https://en.wikipedia.org/wiki/A_Hacker_Manifesto): Information wants to be free but is everywhere in chains.

It broke free from the commodity form.`
}

test('stringify', function (t) {
  t.deepEqual(smarkt.stringify(exampleObject), exampleString)
})

test('parse', function (t) {
  t.deepEqual(smarkt.parse(exampleString), exampleObject)
})

var emptiesInput = { null: null, undefined: undefined, emptyArray: [], emptyString: '', emptyObject: {} }

var emptiesStringified = `null:
----
undefined:
----
emptyArray: []
----
emptyString:
----
emptyObject: {}`

var emptiesParsed = { null: '', undefined: '', emptyArray: [], emptyString: '', emptyObject: {} }

test('empties', function (t) {
  t.deepEqual(smarkt.stringify(emptiesInput), emptiesStringified)
  t.deepEqual(smarkt.parse(emptiesStringified), emptiesParsed)
})
