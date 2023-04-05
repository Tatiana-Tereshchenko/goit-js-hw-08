import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

const VIDEO_CURRENT_TIME = 'videoplayer - current - time';

player.on('timeupdate', throttle(function(data) {
  const time = data.seconds;
  localStorage.setItem(VIDEO_CURRENT_TIME, time);
}, 1000));

const savedTime = localStorage.getItem(VIDEO_CURRENT_TIME);
if (savedTime) {
  player.setCurrentTime(savedTime);
}

