const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

const config = {
  entry: "./src/app.js",
  /*
        jika terdapat banyak entry point yang ingin kita definsisikan gunakan:
        entry : {
            app : "./src/app.js",
            adminApp : "./src/adminApp.js"
        }
    */
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  /*
        Jika kita memiliki lebih dari satu entry point maka kita perlu menggunakan subtitution
        untk memastikan berkas yang dihasilkan webpack memiliki nama yang unik:
        
        output : {
            filename : [name].js,
            output : __dirname + "/dist"
        }
   
   */

    rules : [
        {
            test : /\.css$/,
            use : [
                {
                    loader : "style-loader"
                },{
                    loader : "css-loader"
                }
            ]
        }
    ],
    plugins : [
        new HtmlWebpackPlugin({
            template : "./src/index.html",
            filename : "index.html"
        })
    ]    
};

module.exports = (env, argv)=>{
    if(argv.mode==="development"){
        config.devtool = "source-map";
    }

    if(argv.mode==="production"){
        //...
    }

    return config
}