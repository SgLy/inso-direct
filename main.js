'use strict';

const $ = (selector, element = document) =>
  Array.from(element.querySelectorAll(selector));
const onScroll = () => {
  try {
    const songCount = $('.beatmapset-panel__panel').length;
    const downloadLinkCount = $('.inso-beatmapset-download-link').length;
    if (songCount !== downloadLinkCount) {
      $('.inso-beatmapset-download-link').forEach(element => {
        element.parentNode.removeChild(element);
      });
      $('.beatmapset-panel__panel').forEach(songPanel => {
        const link = $('.beatmapset-panel__header', songPanel)[0].href;
        const id = link.match(/\/beatmapsets\/(\d+)/)[1];
        const iconBox = $('.beatmapset-panel__icons-box', songPanel)[0];
        console.log(iconBox);
        const button = $('.js-beatmapset-download-link', iconBox)[0].cloneNode(
          true,
        );
        button.classList.replace(
          'js-beatmapset-download-link',
          'inso-beatmapset-download-link',
        );
        button.href = `http://inso.link/yukiho/?m=${id}`;
        button.target = `inso-${id}`;
        $('i', button)[0].classList.replace('fa-download', 'fa-cloud');
        iconBox.appendChild(button);
      });
    }
  } catch (e) {
    console.error('inso-direct error: ', e);
  }
};

window.addEventListener('scroll', onScroll);
onScroll();
