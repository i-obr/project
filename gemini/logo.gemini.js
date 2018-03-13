gemini.suite('logo', (suite) => {
  suite.setUrl('/blocks-lib.html')
    .setCaptureElements('html')
    .capture('plain');
});
gemini.suite('logo1', (suite) => {
  suite.setUrl('/blocks-lib.html')
    .setCaptureElements('.Logo')
    .capture('plain');
});
