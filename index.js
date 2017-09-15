var express = require('express');
var app = express();

const urls = {
  "2jfGmmC": "http://amzn.to/2jfGmmC", //bsd
  "2jfOC5V": "http://amzn.to/2jfOC5V", //duetto
  "2wThyUz": "http://amzn.to/2wThyUz", //ibrid
  "2eOBwaW": "http://amzn.to/2eOBwaW", //Q&S
  "2xUgzTw": "http://amzn.to/2xUgzTw", //UC
  "2xXxGo0": "http://amzn.to/2xXxGo0", //a5100
  "8jfGmmC": "http://quickjack.de", //quickjack
  "4xgrzTw": "https://hqs-shop.de/Meguiars-Ultimate-Compound-Lackreiniger-450ml?jsta=gb", //UC HQS
  "7yTxFo0": "https://hqs-shop.de/ScanGrip-Colour-Match-SunMatch-2?jsta=gb", //SUNMATCH2
}

app.get('/:id', (req, res) => {
  if (urls[req.params.id]) {
    return res.redirect(urls[req.params.id])
  }
  res.send("Was machst du hier?")
});

app.get('/', (req, res) => {
  res.redirect('https://glossboss.de/')
})

var server = app.listen(3000, function(){
  console.log('Server listening on port 3000');
});
