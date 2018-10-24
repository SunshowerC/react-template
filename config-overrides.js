const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin


const setCSSLoader = (config, env)=>{
    const loaders = config.module.rules[1].oneOf
    const cssRule = loaders.find(item => item.test.toString() === '/\\.css$/')
    let cssLoader = null;

    if(env === 'development') {
        cssLoader = cssRule.use[1]
        cssRule.use.push(require.resolve('sass-loader'))
    } else if(env === 'production') {
        cssLoader = cssRule.loader[2]
        cssRule.loader.push(require.resolve('sass-loader'))
    }
    
    cssRule.test = /\.(css|scss)$/
    cssLoader.options.modules = true
    cssLoader.options.localIdentName = "[name]_[local]_[hash:base64:5]"
}

const setBundleAnalyzerPlugin = (config, env)=>{
    if(env === 'production') {
        config.plugins.push(new BundleAnalyzerPlugin())
    }
}

module.exports = (config, env) => {
    setCSSLoader(config, env)
    setBundleAnalyzerPlugin(config, env)

    return config
}