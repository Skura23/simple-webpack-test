var path=require('path');

module.exports={
    entry:['webpack/hot/dev-server', path.resolve(__dirname, './prod/index.js')],
    output:{
        path:path.resolve(__dirname,'./build'),
        filename:'bundle.js',
    },
    module: {
    loaders: [{ 
     test: /\.js$/,
     loader: 'babel!jsx', 
     exclude: /node_modules/ ,
     presets: ['es2015', 'react']
     }]
  }
}  