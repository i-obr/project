import notify from 'gulp-notify';

function errorHandler() {
  const args = Array.prototype.slice.call(arguments); // eslint-disable-line
  notify
    .onError({
      title: 'Compile Error',
      message: '<%= error.message %>',
      sound: 'Submarine',
    })
    .apply(this, args);
  this.emit('end');
}

export default errorHandler;
