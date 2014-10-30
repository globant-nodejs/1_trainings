(#1) Trainings
===========

![](https://cdn2.iconfinder.com/data/icons/nodejs-1/64/nodejs-64.png)
	
>Node.js® is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

# Index:

1. [Introduction](#introduction)
2. [Course Basics](#basics)

----

# 1- Introduction

## Advantage
This NodeJS bootcamp offers a world-premiere full-stack coding bootcamp that specifically covers all of the industry's most relevant and critical technologies regarding the Node environment.

## Why this bootcamp is important?
Onto the main goal is presented here transforming students into true Node developers with a comprehensive set of tools that are crucial for optimal success in their careers.

## Philosofy
Our philosophy is based on individual attention to students and their specific needs.

# Course Basics

## Requirements

- [ ] Computer + Internet Access
- [ ] Software: 
	- [Git](http://git.org)
	- [NodeJS](http://nodejs.org)
- [ ] Time: TBD

## What is Node.js ?

Node.js lets you *easily* build networked software (websites, applications "apps",
using JavaScript).

Its not "*point-and-click*" like WordPress, SquareSpace or Salesforce;
you will need to write some "code". But as I will demonstrate, that's
a *lot* easier than it sounds and gives you more power/flexibility
and puts you in full control.

## Node.js is not "Version 1.0" yet can I used it in Production?

Yes! Some of the biggest organisations/companies in the world
are using Node.js in Production systems:

> [Alibaba](https://github.com/alibaba/node-hbase-client),
[Ajax.org](Ajax.org),
[Box.com](http://tech.blog.box.com/2014/06/node-js-high-availability-at-box/), British Sky Broadcasting (Sky/Now TV),
CNN,
[Cloudup](https://cloudup.com/),
Conde Nast,
[DirectTV](http://strongloop.com/strongblog/node-summit-media-companies-embrace-node-js-for-rapidly-developing-responsive-apps/),
[Dow Jones](http://nodejs.org/industry),
eBay,
[Etsy](https://github.com/etsy/statsd),
[FeedHenry](http://www.feedhenry.com/),
[GitHub](https://twitter.com/github/status/16979699217465344),
[Google](http://venturebeat.com/2012/01/24/node-at-google-mozilla-yahoo/),
[Groupon](http://nodeup.com/fiftyeight),
HBO,
Help.com,
[HP](https://github.com/joyent/node/wiki/Projects,-Applications,-and-Companies-Using-Node),
iTV,
[Joyent](https://www.joyent.com/) (duh!),
[Klout](https://klout.com),
LinkedIn,
McDonalds,
[Medium](https://medium.com/the-story),
Mozilla,
NetFlix,
[OpenTable](http://hapijs.com/community),
PayPal,
Pearson,
~~Q~~,
[Revolt](http://revolt.tv/),
[Square](https://modulus.io/companies-using-node),
Tesco,
ThomasCook,
Trello,
Uber,
Voxer,
Walmart,
Wikimedia (in progress of moving to SOA with node!)
Yahoo,
Yammer,
[Yandex](https://www.youtube.com/watch?v=zdCxgdH4wZo),
[Zendesk](http://radar.zendesk.com/)

Want more? See: [http://nodejs.org/industry/](http://nodejs.org/industry/) and [https://github.com/joyent/node/wiki/Projects](https://github.com/joyent/node/wiki/Projects),[https://github.com/joyent/node/wiki/Applications](https://github.com/joyent/node/wiki/Applications),[https://github.com/joyent/node/wiki/Projects-and-Companies-Using-Node](https://github.com/joyent/node/wiki/Projects-and-Companies-Using-Node)

# Getting ready

## Download & Install

> http://nodejs.org/download/


## Node.js (Core) API

The node.js ("core") has many useful modules.

API: [http://nodejs.org/api](http://nodejs.org/api/) 


## Stability (Can we use it?)

> *Which node.js* ***core*** *package(s) can/should I use?*

Every core module has a
["***Stability Index***"](http://nodejs.org/api/documentation.html#documentation_stability_index)
rating on the node.js API.

**General rule**: If you are being *paid* to write code
that runs in node.js, <br /> pick core modules/methods
with stability **Stable**, **API Frozen** and **Locked**.

![Node.js Stability Index](http://i.imgur.com/xIroFrS.png)


### Examples

- [**cluster**](http://nodejs.org/api/cluster.html) is ***Experimental*** - don't use
- [**domain**](http://nodejs.org/api/domain.html) is ***Unstable*** - don't use
- [**path**](http://nodejs.org/api/path.html) is ***Stable*** - use
- [**events**](http://nodejs.org/api/events.html) is ***Frozen*** - use
- [**assert**](http://nodejs.org/api/assert.html) is ***Locked*** - use

## Terminology

Core

1. [javascripting]()
2. [learnyounode]()
3. [git-it]()
4. [stream-advanture]()

Libraries/Style

1. Functional JavaScript (4h)
2. Prototypes (2h)
2. Binary Data (4h)
3. Express.js
4. Hapi
5. Browserify
6. Promises
7. Async
8. ES6
9. Koa
10. Lo-Dash
11. Debugging
12. LevelDB
13. CouchDB

##1)
### a. Learnyounode - Hello world

| points         	| 1     	|
|----------------	|-------	|
| estimated time 	| 15 min 	|

Write a program that prints the text "HELLO WORLD" to the console (stdout).

#### HINTS

To make Node.js program, create a new file with a `.js` extension and start writing JavaScript! Execute your program by running it with the
`node` command. e.g.:

```sh
$ node program.js
```

You can write to the console in the same way as in the browser:

```js
console.log("text")
```

When you are done, you must run:

```sh
$ {appname} verify program.js
```

to proceed. Your program will be tested, a report will be generated, and the lesson will be marked 'completed' if you are successful.

----------------------------------------------------------------------

### b. Learnyounode - babysteps

| points         	| 2     	|
|----------------	|-------	|
| estimated time 	| 30 min 	|

Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (stdout).

#### HINTS

You can access command-line arguments via the global `process` object. The `process` object has an `argv` property which is an array containing the complete command-line. i.e. `process.argv`.

To get started, write a program that simply contains:

```js
console.log(process.argv)
```

Run it with `node program.js` and some numbers as arguments. e.g:

```sh
$ node program.js 1 2 3
```

In which case the output would be an array looking something like:

```js
[ 'node', '/path/to/your/program.js', '1', '2', '3' ]
```

You'll need to think about how to loop through the number arguments so  you can output just their sum. The first element of the process.argv array is always 'node', and the second element is always the path to your program.js file, so you need to start at the 3rd element (index 2), adding each item to the total until you reach the end of the array.

Also be aware that all elements of `process.argv` are strings and you may need to *coerce* them into numbers. You can do this by prefixing the property with `+` or passing it to `Number()`. e.g. `+process.argv[2]` or `Number(process.argv[2])`.

{appname} will be supplying arguments to your program when you run `{appname} verify program.js` so you don't need to supply them yourself. To test your program without verifying it, you can invoke it with `{appname} run program.js`. When you use `run`, you are invoking the test environment that {appname} sets up for each exercise.

----------------------------------------------------------------------



##Explore the material:

```terminal
$ npm install
$ bower install
$ gulp
```

Execute the *demo* using ```gulp demo```.

##Technology

- NodeJS
- Atom-shell
- Polymer PaperUI
- Gulp
- Bower

##License
MIT
