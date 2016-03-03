'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _soundworksClient = require('soundworks/client');

var _soundworksClient2 = _interopRequireDefault(_soundworksClient);

var _PlayerExperience = require('./PlayerExperience');

var _PlayerExperience2 = _interopRequireDefault(_PlayerExperience);

var client = _soundworksClient2['default'].client;

window.addEventListener('load', function () {
  // configuration shared by the server (see `views/default.ejs`)
  var socketIO = window.CONFIG && window.CONFIG.SOCKET_CONFIG;
  var appName = window.CONFIG && window.CONFIG.APP_NAME;

  // init client
  client.init('player', { socketIO: socketIO, appName: appName });

  // create client side player experience
  var experience = new _PlayerExperience2['default']();

  // start client
  client.start();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zY2huZWxsL0RldmVsb3BtZW50L3dlYi9jb2xsZWN0aXZlLXNvdW5kd29ya3MvZHJvcHMvc3JjL2NsaWVudC9wbGF5ZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztnQ0FBdUIsbUJBQW1COzs7O2dDQUNiLG9CQUFvQjs7OztBQUNqRCxJQUFNLE1BQU0sR0FBRyw4QkFBVyxNQUFNLENBQUM7O0FBRWpDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsWUFBTTs7QUFFcEMsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztBQUM5RCxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDOzs7QUFHeEQsUUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQVIsUUFBUSxFQUFFLE9BQU8sRUFBUCxPQUFPLEVBQUUsQ0FBQyxDQUFDOzs7QUFHN0MsTUFBTSxVQUFVLEdBQUcsbUNBQXNCLENBQUM7OztBQUcxQyxRQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7Q0FDaEIsQ0FBQyxDQUFDIiwiZmlsZSI6Ii9Vc2Vycy9zY2huZWxsL0RldmVsb3BtZW50L3dlYi9jb2xsZWN0aXZlLXNvdW5kd29ya3MvZHJvcHMvc3JjL2NsaWVudC9wbGF5ZXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc291bmR3b3JrcyBmcm9tICdzb3VuZHdvcmtzL2NsaWVudCc7XG5pbXBvcnQgUGxheWVyRXhwZXJpZW5jZSBmcm9tICcuL1BsYXllckV4cGVyaWVuY2UnO1xuY29uc3QgY2xpZW50ID0gc291bmR3b3Jrcy5jbGllbnQ7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAvLyBjb25maWd1cmF0aW9uIHNoYXJlZCBieSB0aGUgc2VydmVyIChzZWUgYHZpZXdzL2RlZmF1bHQuZWpzYClcbiAgY29uc3Qgc29ja2V0SU8gPSB3aW5kb3cuQ09ORklHICYmIHdpbmRvdy5DT05GSUcuU09DS0VUX0NPTkZJRztcbiAgY29uc3QgYXBwTmFtZSA9IHdpbmRvdy5DT05GSUcgJiYgd2luZG93LkNPTkZJRy5BUFBfTkFNRTtcblxuICAvLyBpbml0IGNsaWVudFxuICBjbGllbnQuaW5pdCgncGxheWVyJywgeyBzb2NrZXRJTywgYXBwTmFtZSB9KTtcblxuICAvLyBjcmVhdGUgY2xpZW50IHNpZGUgcGxheWVyIGV4cGVyaWVuY2VcbiAgY29uc3QgZXhwZXJpZW5jZSA9IG5ldyBQbGF5ZXJFeHBlcmllbmNlKCk7XG5cbiAgLy8gc3RhcnQgY2xpZW50XG4gIGNsaWVudC5zdGFydCgpO1xufSk7XG4iXX0=