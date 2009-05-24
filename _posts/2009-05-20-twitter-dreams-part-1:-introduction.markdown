---
  title: "twitter-dreams part 1: introduction"
---

Twitter has sometimes been described as a new form of collective, connected consciousness, some people compare it to the human brain, drawing an analogy between neurons firing and tweets propagating through the network.

<a href="http://en.wikipedia.org/wiki/File:Atrapasuenos.jpg">
  <img src="http://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Atrapasuenos.jpg/250px-Atrapasuenos.jpg" alt="Atrapasuenos" class="left-img"/>
</a>

New services and hacks around Twitter get build almost everyday, while the user base is still growing exponentially. It is a fascinating field of study. In a previous article on this blog, "[memory, forgetting, pkd an blogs](/2009/03/phil-k-dick.html)" I talked  about blogs as collective memory. Now I more interested in the collective subconsciousness, expressed in a continous stream of dream tweets.

I've always been fascinated by dreams, the stories they tell, the archetypes and narratives they contain, and how they were (and still are) creatively exploited by artists (think surrealists, David Lynch, ...).

I often remember my dreams but rarely write them down in a dream journal. One morning in February (after a particulary weird dream, I don't remember the details) I sat down at my computer,staring tiredly at my Twitter client, thinking: "there *must* be some people tweeting their dreams". A quick [search](http://search.twitter.com/search?q=had+dream) confirmed it, and I was surprised by the number and variety of dream reports. What's more, some users even annotated their dream stories with hashtags [#dream](http://hashtags.org/tag/dream).

After reading dreams on twitter for a while I noticed that some subjects cropped up in stories from different people, categories like celebrities, animals and places started to emerge. There were a lot of dreams involving Barack Obama at the time (this was pre-election). My initial thought was to build an aggregator for dream-tweets, not necessarily to analyze the dreams but to display them as little stories, possibly with some images culled from web as illustration.

I did some research to check if someone had already built something similar and found [dreamsofbarack](http://dreamsofbarack.com/) ("charting the collective unconscious by gathering dreams about Barack Obama") and [tweetdreams](http://tweetdreams.org/) ("a Twitter dream journal"). Some other people had noticed that there was some interesting dreaming happening on twitter!

Instead of just displaying individual dreams I thought it would be more interesting to search for patterns I had noticed earlier. But how can you automatically detect them in a vast amount of data? Fortunately [Zemanta](http://www.zemanta.com/), a semantic text analysis service, had just released their API. The idea is simple: you feed it a bunch text and the service returns related content and extracted entities. After a weekend of hacking I had a basic semantic dream aggregator working. It's been aggregating, tagging and cross-referencing tweets for a bit over than a month now. The dataset contains ~65000 tweets (~ 1500 dreams/day), from ca. 54000 users.

It might sound weird to think of dreams in such analytical and rational terms, but whilst doing some more research on the current state of dream analysis/research I came across [Bill Domhoff](http://en.wikipedia.org/wiki/G._William_Domhoff) and his [DreamBank](http://dreambank.net/) project. His research breaks with psychoanalytical traditions by using quantitative and statistical methods to analyse dreams. His findings are interesting: dreams are less irrational than previously assumed and according to this research merely a "continuation of our daily lives". Some long-running studies also suggest that the contents and subjects of our dreams don't vary much over time, there're even some constants and patterns which can be found in many people's dreams (an example would be the proportion of animals in your dreams ("animal percentage"), or the ratio of male and female characters).

So, in the following series of blog posts I'm going to show some interesting bits I've noticed while playing and visualising the data, although in a completely unscientific way.

Update (23/05/09): I've just found [Tweet Dreams: A four-week survey of Twitter
  dreams](http://www.dosenation.com/listing.php?id=6114), James Kent has done
  some similar research on dreams, which is pretty much in line with my
  findings.

