var express = require('express');
var morgan = require('morgan');
var path = require('path');

var articles=
{
   'article-one':{
  title:'Article One',
  heading:'Hello Everyone1',
  date:'Feb7,2017',
  content: `
            <p>
            This is my first web page on article one.
            </p>`
    },
    
  'article-two':{
        title:'Article Two',
       heading:'Hello Everyone2',
       date:'Feb8,2017',
        content: `
            <p>
            This is my first web page on article two.
            </p>`
    },
    
   'article-three':{
        title:'Article Three',
  heading:'Hello Everyone3',
  date:'Feb9,2017',
  content: `
            <p>
            This is my first web page on article three.
            </p>`
    },
};



function createTemplate(data){
    
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;

var htmlTemplate=`

  <html>
    <head>
        <title>
             ${title}
        </title>
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
</html>`;
  
  return htmlTemplate;
}

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get(':/articleName',function(req,res){
    //feature of express module to convert the : to names of article
   res.send(createTemplate(articles[articleName]));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
