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


function pipeCallback(payload) {
  var items = payload['value']['items'];
  for (var i=0; i<items.length; i++) {
    var rating = "";        
    var rCount = parseInt(items[i]['user_rating'], 10);
    if (rCount != NaN) {
      rating += " (";
      for (var r=0; r<rCount; r++) {
        rating += "&#9733;";                
      }
      rating += ")";
    }
      
    $("#currently-reading").append("<a href='" + items[i]['book_large_image_url']  + "'><img src='" + items[i]['book_small_image_url'] + "' class='left-img' /></a>")        
    $("#currently-reading").append("<p>&laquo;" + "<a href='" + items[i]['link'] + "'>" + items[i]['y:title'] + "</a>"+ "&raquo;" +
      " by " + items[i]['author_name']  + rating + "</p>");
      
    $("#currently-reading").append("<blockquote>&ldquo;" + items[i]['user_review'] + "&rdquo;</blockquote>");
    
    $("#currently-reading").append("</div>")            
    $("#currently-reading").append("<div class='clear'/>")         
  }
};


(function($) {
  $.getScript("http://pipes.yahoo.com/pipes/pipe.run?_id=xL8fCU4_3hGJGTah3nBDOQ&_render=json&_callback=pipeCallback");    
})(jQuery);
      
