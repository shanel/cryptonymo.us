--- 
title: The world's questions... many eyes on google suggest.
categories: 
- infoviz
- google
layout: post
---

Visualising results from google suggest.

I've been meaning to play around with the [google suggest api](http://blogoscoped.com/archive/2006-08-17-n22.html) for quite a while, and was also quite curious about IBM's collaborative visualisation platform [many eyes](http://manyeyes.alphaworks.ibm.com/). 

Google suggest has been around for a long time (as part of google labs), but only recently got 
integrated by default into google search (["At a loss for
words?"](http://googleblog.blogspot.com/2008/08/at-loss-for-words.html)). It's a fascinating data source, because it reflects how (at least the majority) of users interact with google. See ["An Expirement (sic) with Google Suggest"](http://digg.com/tech_news/An_Expirement_with_Google_Suggest) for some
(sometimes scary) examples.

I wrote a small [ruby script](http://github.com/jberkel/playground/tree/master/suggest_tree) to recursively get a list of popular queries, starting of with some simple questions like "why is..." / "how do...", then fed the data into the [word tree](http://manyeyes.alphaworks.ibm.com/manyeyes/page/Word_Tree.html) visualisation provided by many eyes.

Here are some examples, with comments (clicking on an image will take you to the interactive visualisation):

## Why is the economy so bad / ... ? 

[![why is the economy] (http://manyeyes.alphaworks.ibm.com/manyeyes/files/thumbnails/370cec18-1a68-11de-8725-000255111976.wm.png)](http://manyeyes.alphaworks.ibm.com/manyeyes/visualizations/97eab862143211debae1000255111976/comments/3744fbb21a6811de8725000255111976) 

Google, tell me! Please!

  
## How do you get to ...?

[![WoW] (http://manyeyes.alphaworks.ibm.com/manyeyes/files/thumbnails/83d2aa9c-1a68-11de-bd89-000255111976.wm.png)](http://manyeyes.alphaworks.ibm.com/manyeyes/visualizations/af96e8cc142e11deb465000255111976/comments/83fa3c241a6811debd89000255111976)
  
What really surprised me here was that *most* of the places people try to get to appear to be situated in virtual/game worlds (Super Mario / WoW ...?). So "how do you get to howling fjord" I hear you ask. It's really easy, just follow the Grizzly Hills, it's behind there, situated in southeastern Northrend.

[![Howling fjord](http://images1.wikia.nocookie.net/wowwiki/images/2/2f/Howling_Fjord.JPG)](http://www.wowwiki.com/Howling_Fjord)

##How do you know when your...?

[![How do you know when your] (http://manyeyes.alphaworks.ibm.com/manyeyes/files/thumbnails/f97ee9f4-1a6d-11de-991c-000255111976.wm.png)](http://manyeyes.alphaworks.ibm.com/manyeyes/visualizations/af96e8cc142e11deb465000255111976/comments/f9dffc9e1a6d11de991c000255111976)

Love, pregnancy, failed marriages & dogs. C'est la vie!
