module.exports = {
    publicPath: '/',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap((args) => {
                args[0].title = 'ITL Home';
                return args;
            });
    },

    css: {
        requireModuleExtension: false,
        sourceMap: true,
        loaderOptions: {
            sass: {
                prependData: `@import "@/sass/utility/variables.scss";`
            }
        }
    },
    devServer: {
        disableHostCheck: true
    },
}