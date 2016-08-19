var environment = 'development';


var _prod = {
    application: {
        name: 'Fishu',
        version: 1.0,
        timezone: {
            offset: -400
        }
    },
    testMode: false,
    testAccounts: ['test', 'smorhaim@fishu.io'],
    api: {
        url: 'https://api.fishu.io'
    },
    app: {
        url: 'https://app.fishu.io'
    },
    publisher: {
        urls: {
            landing: '/client/businesses'
        }
    },
    logout_codes: [404, 498, 499],
    date: {
        format: {
            iso: 'YYYY-MM-DDTHH:mm:ssZZ',
            date: 'MM/DD/YYYY',
            time: 'h:mma',
            day: 'ddd MM/DD',
            datetime: 'MM/DD/YYYY h:mm A'
        }
    },
    urls: {
        public: ['/login', '/logout'],
        login: '/login',
        logout: '/logout'
    },

};

var _dev = {
    api: {
        url: 'http://api.fishu.io:8081'
    },
    app: {
        url: 'https://app.fishu.io:8080'
    },
    testMode: true
};


var _config = (environment == 'development') ? angular.extend(_prod, _dev) : _prod;


angular.module('config', [])
    .constant('config', _config);

