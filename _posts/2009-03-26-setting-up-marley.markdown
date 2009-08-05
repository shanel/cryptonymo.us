--- 
title: setting up marley
categories: 
- ruby
- git
- blogging
layout: post
---

we're jamming... and i hope you like jamming too.

I've been meaning to set up a blog for quite a while now, but never actually got round to it. Now that everyone is crying
"[blogs are dead](http://casesblog.blogspot.com/2009/01/is-blogging-dead-or-dying-will-twitter.html)", it seems to be an odd choice. 
But I don't believe blogging is dead, it's more the case that the whole blog-ecosystem is fed by twitter (people tweeting links to
blog posts and so on).

The other problem was that most blogging engines I've tried so far (at least the hackable ones, i.e. written in ruby) sucked, were 
bloated, or both. Then I came across [marley](http://github.com/karmi/marley), a minimalist blog engine operating only on flat files. 
Just the idea of using flat files as article storage format is not new (Rael Dornfest did it with [bloxsom](http://www.blosxom.com/) 
almost 10 years ago), but the combination with a modern version control system such as git makes it very interesting. All content is 
stored in a version controlled format, publishing your content is just a matter of pushing to the server, given you've installed the 
correct commit hooks.

Then it's written using [sinatra](http://www.sinatrarb.com/), a neat micro web framework which is currently getting used a 
lot for all those mini web apps which don't need a big framework like rails or merb.

The idea of marley is that you fork the codebase on github and then customise/hack your own blog. So instead of editing templates
inside the blog application you just modify the templates in place. And because you've forked from github you'll be able to pull
in updates to marley later. That is at least the theory.

I've decided to have code + blog articles all in on repo so I can deploy it all in one single operation. With some scripting it
is even possible to restart the blog engine with a simple "git push", see [post-receive.rb](http://gist.github.com/69304) for the
details (I'm using apache2+passenger). Code is data, data is code... or how was that again?
