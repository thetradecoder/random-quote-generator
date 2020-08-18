// code by: theTradeCoder

$(document).ready(()=>{

const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
$.getJSON(url, (json)=>{
  const data = json.quotes;  
  var setIndex = ()=> Math.floor(Math.random()*data.length);
  var getIndex = setIndex();
  var quote = `" ${data[getIndex].quote}"`;
  var author =  data[getIndex].author;
  const defaultQuote = "There shall be no compulsion in (acceptance of) the religion.The right course has become clear from the wrong.";
  const defaultAuthor = "Al Quran (2:256)";
   $('#quote').click(()=>{
        getIndex = setIndex();
        quote = `"${data[getIndex].quote}"`;
        author =  data[getIndex].author;
        $('.quote').html(quote);
        $('.author').html(author);        
      });   
  
  
      $('#tweet').click(()=>{
        var tweetUrl = 'https://twitter.com/intent/tweet?text=' + quote + ' -' + author +'(via @theTradeCoder @freecodecamp @codepen #codepen) View more quotes here: https://codepen.io/thetradecoder/full/qqZwZY';        
        var defaultUrl = 'https://twitter.com/intent/tweet?text=' + defaultQuote + ' -' + defaultAuthor +'(via @theTradeCoder @freecodecamp @codepen) View more quotes here: https://codepen.io/thetradecoder/full/qqZwZY';
        
        if($('.quote').html()==quote){
          $('.tweetNow').attr('href', tweetUrl);
        }else{
          $('.tweetNow').attr('href', defaultUrl);
        }

    });

})
  
})

