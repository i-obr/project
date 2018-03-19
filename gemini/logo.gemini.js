gemini.suite('logo', suite => {
  suite
    .setUrl('/blocks-lib.html')
    .setCaptureElements('.Logo')
    .capture('plain');
});
