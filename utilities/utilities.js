'use strict';

module.exports = function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  date = ordinal_suffix_of(date);
  var hour = a.getHours();
  var minutes = a.getMinutes();
  var ampm = hour >= 12 ? 'pm' : 'am';
  hour = hour % 12;
  hour = hour ? hour : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'.concat(minutes) : minutes;
  var time =  month + ' ' +
              date + ' ' +
              year + ' @ ' +
              hour + ':' + minutes + ' ' + ampm;
  return time;
};

var ordinal_suffix_of = function (i) {
      var j = i % 10,
          k = i % 100;
      if (j == 1 && k != 11) {
          return i + "st";
      }
      if (j == 2 && k != 12) {
          return i + "nd";
      }
      if (j == 3 && k != 13) {
          return i + "rd";
      }
      return i + "th";
};