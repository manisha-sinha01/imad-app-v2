var express = require('express');
var morgan = require('morgan');
var path = require('path');
var articleone={
  title:'Article One',
  heading:'Hello Everyone',
  date:'Feb7,2017',
  content: `
            <p>
            This is my first web page on article one.
            </p>`
  
};

var HTMLtemplate={
  
  <html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="widhth=device-width,initial-scale=1">
         <link href="/ui/style.css" rel="stylesheet">
    </head>
    <body>
       <div class="container"> 
        <div>
            <a href="/">Home</a>
        </div>
        <br/>
        <div>
        <h1>
           ${heading}
        </h1>
        </div>
        <div>
            ${date}
        </div>
        <div>
        <p>
           ${content}
        </p>
        </div>
        </div>
    </body>
</html>
  
};
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/article-one',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
