import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

player.on('timeupdate', throttle(function(data) {
  const time = data.seconds;
  localStorage.setItem('videoplayer-current-time', time);
}, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(savedTime);
}

