$(function() {
  
  $("#tweets").getTwitter({
    userName: "jberkel",
    numTweets: 3,
    slideIn: false,
    showHeading: false,
    showProfileLink: false,
    rejectRepliesOutOf: 20
  });
});
