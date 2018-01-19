'use strict';

$(refresh);
$(window).on('scroll', refresh);
function refresh() {
    const boxCnt = $('.beatmapset-panel__panel').length;
    const cloudCnt = $('.inso-beatmapset-download-link').length;
    if (boxCnt !== cloudCnt) {
        $('.inso-beatmapset-download-link').remove();
        $('.beatmapset-panel__panel').each((i, panel) => {
            const link = $(panel).children('.beatmapset-panel__header').children('.beatmapset-panel__thumb').attr('href');
            const id = link.match(/\/beatmapsets\/(\d+)/)[1];

            const iconBox = $(panel).children('.beatmapset-panel__content').children('.beatmapset-panel__row').children('.beatmapset-panel__icons-box');
            let button = iconBox.children('.js-beatmapset-download-link')
                .clone()
                .removeClass('js-beatmapset-download-link')
                .addClass('inso-beatmapset-download-link')
                .attr({
                    href: `http://inso.link/yukiho/?m=${id}`,
                    target: `inso-${id}`
                });
            button
                .children('span')
                .removeClass('fa-download')
                .addClass('fa-cloud');
            iconBox.append(button);
        });
    }
}