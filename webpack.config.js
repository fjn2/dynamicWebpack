module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  target: 'web',
  output: {
    filename: '[name].js',
    globalObject: 'window',
    library: 'main'
  },
  externals: [
    // function(context, request, callback) {
    //   console.log('asd', context, request, callback)
    //   callback();
    // }
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
};