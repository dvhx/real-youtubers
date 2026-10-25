// Render single channel
// linter: ngspicejs-lint --browser
// global: SC
"use strict";

export function renderChannel (key, channel, status) {
    // render one article
    var article = document.createElement('article');
    article.innerHTML = `
        <div class="title">
            <div class="channel_name">
                <a class="channel_url" href="" target="_blank" rel="noopener noreferrer" title="Open this YouTube channel in new tab"></a>
            </div>
            <div class="frequency">
                <span class="frequency_value"></span> videos<wbr>
                /<span class="frequency_period"></span>
            </div>
            <div class="duration"><span class="duration_value"></span> minutes<wbr>/video</div>
        </div>
        <div class="tags"></div>
        <div class="description"></div>
        <div class="status">
            Status:
            <select class="status_select">
                <option value="undecided" selected>Undecided</option>
                <option value="like">Like</option>
                <option value="hide">Hide</option>
            </select>
            <button class="watch_here" title="Video will be opened here in iframe">Watch it here</button>
            <button class="watch_yt" title="Video will be opened in new tab on YouTube">YouTube</button>
        </div>
        <iframe class="watch_here_iframe" frameborder="0" allowfullscreen="true"></iframe>
        <div class="last_video_images">
            <a class="last_video_link" href="">
            <img class="thumbnail_1" src="">
            <img class="thumbnail_2" src="">
            <img class="thumbnail_3" src="">
            </a>
        </div>
    </article>`;
    // fill values
    var e = SC.elementsWithClass(article);
    e.channel_url.textContent = channel.channel_name;
    e.channel_url.href = channel.channel_url;
    var y = channel.videos_last_year;
    var m = Math.round(y / 12);
    if (m > 1) {
        e.frequency_value.textContent = m;
        e.frequency_period.textContent = 'month';
    } else {
        e.frequency_value.textContent = y;
        e.frequency_period.textContent = 'year';
    }
    e.frequency.title = y + ' videos in last 12 months';
    e.duration_value.textContent = channel.average_video_duration_minutes;
    e.tags.textContent = 'Genres: ' + channel.tags.join(', ');
    e.description.textContent = channel.description;
    e.last_video_link.href = channel.last_video;
    var vid = channel.last_video.split('=').at(-1);
    e.thumbnail_1.src = 'https://img.youtube.com/vi/' + encodeURIComponent(vid) + '/1.jpg';
    e.thumbnail_2.src = 'https://img.youtube.com/vi/' + encodeURIComponent(vid) + '/2.jpg';
    e.thumbnail_3.src = 'https://img.youtube.com/vi/' + encodeURIComponent(vid) + '/3.jpg';
    // status dropdown
    e.status_select.value = status[key] || 'undecided';
    e.status_select.onchange = function (event) {
        // change channel status
        console.log(event.target.value, 'key', key);
        status[key] = event.target.value;
        SC.Storage.setObject('status', status);
        SC.updateCounts();
    };
    e.watch_here.onclick = function () {
        // watch here
        e.watch_here.disabled = true;
        e.watch_here_iframe.src = 'https://www.youtube.com/embed/' + vid;
        e.watch_here_iframe.style.display = 'block';
        e.last_video_images.style.display = 'none';
    };
    e.watch_yt.onclick = function () {
        // open youtube in new tab
        window.open(channel.last_video, '_blank');
    };
    e.watch_yt.onauxclick = function (event) {
        // open youtube in new tab on middle click
        if (event.button === 1) {
            window.open(channel.last_video, '_blank');
        }
    };
    // add to main
    document.querySelector('#channels').appendChild(article);
    return article;
}
