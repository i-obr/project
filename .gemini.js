module.exports = {
  rootUrl: 'http://localhost:3000/',
  gridUrl: 'http://127.0.0.1:4444/wd/hub',
  calibrate: false,

  browsers: {
    'desktop-chrome': {
      desiredCapabilities: {
        browserName: 'chrome',
      },
    },
  },

  system: {
    plugins: {
      'html-reporter/gemini': {
        enabled: true,
        path: 'gemini-reports',
        defaultView: 'all'
      }
    },
  },
};
