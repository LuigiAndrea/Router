/**
 * Add barrels and stuff
 * Adjust as necessary for your application needs.
 */
(function (global) {
    let ngLoader = {
        './*.js': {
            loader: 'systemjs-angular-loader.js'
        }
    };

    System.config({
        paths: {
            'core:': 'app/core/'
        },
        map: {
            app: 'app',
            appcore: 'core:',
            'guard-services': 'core:guard-services',
            'name-user-service': 'core:name-user-service',
            'contacts-resolvers': 'app/contacts/contacts-resolvers'
        },
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js',
                meta: ngLoader
            },
            //barrels
            appcore: {
                main: './index.js',
                defaultExtension: 'js',
                meta: ngLoader
            },
            'guard-services': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'name-user-service': {
                main: './index.js',
                defaultExtension: 'js',
                meta: ngLoader
            },
            'contacts-resolvers': {
                main: './index.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);
