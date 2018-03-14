module.exports = {
  rootUrl: 'http://localhost:3000/',
  gridUrl: 'http://ondemand.saucelabs.com/wd/hub',
  calibrate: false,

  browsers: {
    'desktop-chrome': {
      desiredCapabilities: {
        browserName: 'chrome',
        version: '63',
        platform: 'macOS 10.13'
      },
    },
    ie10Win7: {
      desiredCapabilities: {
        browserName: 'internet explorer',
        version: '10',
        platform: 'Windows 7'
      }
    },
  },

  system: {
    debug: false,
    exclude: [
      'gemini/screens/',
      'gemini-*/',
      'node_modules/',
      'source/'
    ],
    plugins: {
      babel: true,
      'html-reporter/gemini': {
        enabled: true,
        path: 'gemini-reports',
        defaultView: 'all'
      },
      optipng: true,
      'saucelabs-info': {}
    },
    projectRoot: './',
    tempDir: './'
  },
};
