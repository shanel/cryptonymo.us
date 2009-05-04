--- 
title: integrating vim and irb
categories: 
- ruby
- irb
layout: post
---

for rapid, iterative ruby development

End of last year I came across a nice little screencast by Giles Bowkett where he demonstrated how to use vi inside irb ([Giles Bowkett: vi In IRB: Screencasting FAIL](http://gilesbowkett.blogspot.com/2008/11/vi-in-irb-screencasting-fail.html)). In his blog post he says:

>I also ranted about how I think the failure of this technique to have already become incredibly popular
>means everybody but me is an idiot.
   
The technique itself is older, there's a blog post dating back to October 2007 titled "[Use vi (Or Any Text Editor) From Within irb](http://gilesbowkett.blogspot.com/2007/10/use-vi-or-any-text-editor-from-within.html)". And, of course, all the LISPers will point out that there's nothing new about it ([slime](http://common-lisp.net/project/slime/) etc.). Bunch of arrgogant 'i-told-you-so'-s :).

I tried it out and completely agree, it's an incredibly powerful way for doing some quick, explorative coding for all those cases where you don't want to write specs upfront (maybe because you're not quite sure of what you're actually trying to achieve). The idea is that you fire up irb, then use vi (or any other editor) to write some code, which then gets eval'ed into your current irb session (after you leave the editor), so you can immediately interact and play with it. 

This is especially useful when you're working with web services, where you're not quite sure about the format of the data returned. A quick 'pp' in irb will usually be good enough to see what's happening, so you can refine your code in small iterative steps.

I've taken Giles' [original code](http://pastie.caboo.se/102939) (here a more recent version on github: [interactive_editor.rb](http://github.com/gilesbowkett/utility-belt/blob/0a542e50a3c27f883688358f70c89719be651e4b/lib/utility_belt/interactive_editor.rb)) and customised it a little bit. For example, you now can edit any existing file (the original irbrc creates an empty tempfile). Also the code only gets eval'ed if you actually save the file: [gist.github.com/98765](http://gist.github.com/98765).

There's a gotcha when using this script with jirb (irb in JRuby): because Java handles I/O in a different way it's not possible to use standard console editors like vi/vim with it. In this case the script will try to use a graphical version of vim instead (on my system I use [macvim](http://code.google.com/p/macvim/)). Of course it's also possible to use the script with any other editor, it's fairly easy to customise.


To improve the edit-irb workflow in vim a bit I use a modified version of [mksession.vim](http://gist.github.com/97573), which saves the current state of the editor (line number etc.) just before going back to irb. So when you fix a bug and go back to vi you can carry on working exactely where you left off. Put it somewhere (for example ~/.vim) and add the line "runtime mksession.vim" to your .vimrc.

So don't be an idiot and use this technique :)
