'use strict';

$(refresh);
function refresh() {
    const boxCnt = $('.bmlist-options').length;
    const cloudCnt = $('.inso_beatmap_download_link').length;
    if (boxCnt !== cloudCnt) {
        $('.inso_beatmap_download_link').remove();
        $('.bmlist-options').each((i, panel) => {
            const link = $(panel).children('.beatmap_download_link').attr('href');
            const id = link.match(/\/d\/(\d+)/)[1];

            let iconBox = $(panel);
            let button = iconBox
                .children('.beatmap_download_link')
                .not('.novid')
                .clone()
                .removeClass('beatmap_download_link')
                .addClass('inso_beatmap_download_link')
                .attr({
                    href: `http://inso.link/yukiho/?m=${id}`,
                    target: `inso-${id}`
                });
            button
                .children('i')
                .removeClass('icon-download-alt')
                .addClass('icon-cloud');
            iconBox
                .css('width', 48)
                .prepend(button);
        });
    }
}