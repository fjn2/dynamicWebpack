const express = require('express');
const webpack = require('webpack');
const path = require('path');

const app = express();


app.get('/page1', function (req, res) {
  // const fullPage = getFullPage(Page1);
  // res.send(renderToString(fullPage));
});

app.get('/', function (req, res) {
  // const fullPage = getFullPage(HomePage);
  // res.send(renderToString(fullPage));
  res.send(`
  <html>
    <header>
      <script src="script/main"></script>
    </header>
    <body>
      <script>
        function getData(pageId) {
          return new Promise((resolve) => {
            var myRequest = new Request(pageId);
            fetch(myRequest).then(function(response) {
              return response.text().then(function(text) {
                resolve(eval(text)); // GOD SAVE THE QUEEN
              });
            });
          })
        }

        var ABC = () => {
          console.log('ke?')
          return null;
        };

        getData('script/HomePage').then((data) => {
          window.main.default.render(data.default(), window.document.querySelector('#app'));
        });

      </script>

      <div id="app">
      </div>
    </body>
  </html>
  `);
});

// In this example I create a bundle per page
app.get('/script/:page', function (req, res) {
  if (req.params.page === 'main') {
    const filePath = `${process.cwd()}/dist/main.js`;
    res.sendFile(filePath);
    return;
  }

  const hash = Math.round(Math.random() * 10000);
  webpack({
    entry: `./src/pages/${req.params.page}.js`,
    output: {
      filename: `${hash}.js`
    },
    target: 'web',
    externals: [
      function(context, request, callback) {
        console.log('externals', context, request);
        if (request === './Menu') {
          callback(null, 'ABC');
          return;
        }
        callback();
      }
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    optimization: {
      minimize: false
    }
  }, (err, stats) => { // Stats Object
    if (err || stats.hasErrors()) {
      // Handle errors here
      console.log('err', err, stats);
      res.send(err);
      return;
    }
      const filePath = `${process.cwd()}/dist/${hash}.js`;
      console.log('sendFile...');
      res.sendFile(filePath);

  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
