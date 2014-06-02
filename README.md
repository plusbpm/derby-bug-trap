## Bug description
pickup ./dump/posts, start the app

see ./components/lib/item/index.coffee

derby is able to trace model data on the server:

```
{ _user: 'c18a702e-00fe-446d-88e9-ba2d8a0bd6e1',
  type: 'post',
  visible: true,
  title: 'kupi',
  body: 'kjklj hjkh kjhkhkjh',
  id: 'a5201a68-cfa3-48b6-ad84-e41762eea44c' }
a5201a68-cfa3-48b6-ad84-e41762eea44c
{ _user: 'c18a702e-00fe-446d-88e9-ba2d8a0bd6e1',
  type: 'post',
  visible: true,
  _feed: 'c18a702e-00fe-446d-88e9-ba2d8a0bd6e1',
  title: 'kuka',
  body: 'asdasd asdasd',
  id: 'e4043897-fb9c-4c5c-b794-a16774e34f56' }
e4043897-fb9c-4c5c-b794-a16774e34f56
{ _user: 'c18a702e-00fe-446d-88e9-ba2d8a0bd6e1',
  type: 'post',
  visible: true,
  title: 'проба',
  body: 'пера',
  _feed: 'c18a702e-00fe-446d-88e9-ba2d8a0bd6e1',
  id: '08f62cb1-3ee5-4644-80ab-80f38a5a693f' }
08f62cb1-3ee5-4644-80ab-80f38a5a693f
```

And derby isn't able to trace it on the client:

```
Lenta index.js:7
Object
_user: "c18a702e-00fe-446d-88e9-ba2d8a0bd6e1"
body: "kjklj hjkh kjhkhkjh"
title: "kupi"
type: "post"
visible: true
__proto__: Object
 index.coffee:5
undefined index.coffee:2
Object
_feed: "c18a702e-00fe-446d-88e9-ba2d8a0bd6e1"
_user: "c18a702e-00fe-446d-88e9-ba2d8a0bd6e1"
body: "asdasd asdasd"
title: "kuka"
type: "post"
visible: true
__proto__: Object
 index.coffee:5
undefined index.coffee:2
Object
_feed: "c18a702e-00fe-446d-88e9-ba2d8a0bd6e1"
_user: "c18a702e-00fe-446d-88e9-ba2d8a0bd6e1"
body: "пера"
title: "проба"
type: "post"
visible: true
__proto__: Object
 index.coffee:5
undefined index.coffee:2

```

As we can see, id is somewhat dissapeared on the client