---
  title: "build your own spotify api"
---

Last month I attended the first [music hack day](http://musichackday.org/), held at the Guardian offices in London. It was a great
event, even though it was very frustrating that I couldn't finish my hack in time (tip: don't use unfamiliar languages/technologies if 
you just want to get stuff done, doh). One the web site of the event it says:

>European music sites are revolutionising the music industry, not least with their eagerness to open up their data with APIs.
 
The idea of taking a bunch of existing (music) services to create something entirely new is great and only possible because
web APIs have become the norm. We just expect services we entrust with our data to give us access to their API. For me it has become
an important box to tick before signing up to a new service (does it have an API? is it useful? etc).

The companies involved at music hack day all offer APIs. My favourite moment of the weekend: I asked about a particular feature in 
[Songkick](http://songkick.com)'s API in the #musichackday irc channel. A couple of minutes later Phil Cowan (Songkick CTO) stands next to me and
asks what data I needed to get out of their API. I explain it to him, he walks off and an hour later the requested geodata was made available in 
their API! 

One notable European music company missing at hackday was [Spotify](http://spotify.com). Since the Swedish company launched their ad-supported
streaming service end of last year it has at times been labeled as "game-changer" of the music business or otherwise as "iTunes killer".
A slick interface and fast P2P streaming makes accessing remote music on-demand indistinguishable from a locally stored music library.

Spotify is in many ways a very untypical, almost unfashionable application: it sits on the desktop, there is no "social" angle to it, no "friends" to
follow, the only feature which comes close are collaborative playlists which can be shared with other listeners. A couple of websites 
have been created to fill in the gaps, for example [Share My Playlists](http://sharemyplaylists.com) where users can post and discuss
these playlists. Because Spotify doesn't offer a web API (there only is [libspotify](http://developer.spotify.com/en/libspotify/overview/), 
which is sadly next to useless) users of these sites need to manually copy&paste their playlist into a web form. You want to create a dynamic
playlist, say by consuming data from another music service API? Sorry. Impossible.

From a technical perspective Spotify's decisions are understandable: a proprietary desktop client offers more control, especially given
that their business model is based on advertising which needs to be displayed to the user. Of course, this didn't stop some members 
of [#hack.se](http://demo.hack.se/) from reverse-engineering the P2P-protocol. So earlier this year [despotify](http://despotify.se/) was released,
an open-source (C-based) library which made it possible to access Spotify's service without the offical client. Spotify reacted by blocking free
(ad-supported) despotify users. However, the success of despotify encouraged more people to get involved in reverse-engineering - there're now at least three different
active projects.

While writing my last blog post (<a href="/2009/07/100-records-that-set-the-world-on-fire-(while-no-one-was-listening).html">100 records...</a>)
I spent most of the time manually searching Spotify urls for the albums and artists in the playlists. A program could have done the same job
in a couple of seconds! 

So I took another look at the existing open-source libraries and found [jotify](http://jotify.felixbruns.de/), which is currently the most advanced
implementation (it supports the feature I was looking for, creation of playlists). It is written in Java, so it was very easy to use integrate
in JRuby. I decided to use sinatra to give it a rest-based API so it can be used from other services. The result is 
[spotify-api](http://github.com/jberkel/spotify-api/), a json-speaking API for spotify! Like despotify it needs a
[premium](http://www.spotify.com/en/products/premium/) account to work, but I'm happy to pay for a service without ads *and* an API.

The API is not complete and it's the first release, but it's all there is until the "official" API arrives (if it does at all, it has been announced/promised
for quite a while now...the delay is most likely due to political, not technical reasons).