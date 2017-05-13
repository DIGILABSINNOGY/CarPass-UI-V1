const path = require('path');


module.exports = {
    // the entry file for the bundle
    entry: './src/app.jsx',

    // the bundle file we will get in the result
    output: {
        path: 'dist/assets',
        filename: 'bundle.js',
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },

    module: {

        // apply loaders to files that meet given conditions
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: ["babel-loader"],
                query: {
                    presets: ["react", "es2015"]
                }
			},
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader: "json-loader"
			},
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
			},
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
			}
		]
    },

    // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
    watch: true
};
