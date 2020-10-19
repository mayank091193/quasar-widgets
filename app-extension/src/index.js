/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */


module.exports = function (api, ctx) {
  api.extendQuasarConf((conf, api) => {
    // make sure my-ext boot file is registered
    conf.boot.push('~quasar-app-extension-q-widgets/src/boot/index.js')

    // make sure boot file transpiles
    conf.build.transpileDependencies.push(/quasar-app-extension-q-widgets[\\/]src[\\/]boot/)
    // if boot file imports anything, make sure that
    // the regex above matches those files too!

    // make sure my-ext css goes through webpack
    //conf.css.push('~quasar-app-extension-my-ext/src/component/my-ext.styl')
    console.log(` App Extension (q-widgets) Info: 'q-widgets boot reference to your quasar.conf.js'`)
  })
}


