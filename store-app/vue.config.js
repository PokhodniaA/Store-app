module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
            @import "@/assets/scss/var.scss";
            @import "@/assets/scss/mixins.scss";
          `
            }
        }
    }
};