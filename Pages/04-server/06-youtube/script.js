$(function () {
    $("#tabs").tabs({ collapsible: true, active: false });
    $("#accordion-1").accordion({ collapsible: true, active: false });
    $("#accordion-2").accordion({ collapsible: true, active: false });
    $("#accordion-3").accordion({ collapsible: true, active: false });
    $("#accordion-4").accordion({ collapsible: true, active: false });
    $("#accordion-5").accordion({ collapsible: true, active: false });

    $('#tabs').click(addVideo)
});


let videoID = ['THAUdRxNd-Y', 'Kp-sLOmeq9c', 'MOteQc3bNYI', 'uWydqDis4kc', 'sXFWj82s1WI'];
let player;

function loadVideoTitle(_variable, _j) {
    let player;
    let tagInsert;
    let j = _j;
    let event = _variable;
    tagInsert = '#tabs-' + j + 'a';
    player = new YT.Player(event, {
        height: '360',
        width: '640',
        videoId: videoID[j - 1],
        events: {
            'onReady': onPlayerReady
        }
    });
    function onPlayerReady(_e) {
        let data = player.getVideoData();
        $(tagInsert).html(data.title);
        player.destroy();
    }
}

for (let i = 1; i < 6; i++) {
    loadVideoTitle('video' + i, i);
}

function addVideo(_event) {
    let event;
    let i;
    if (_event.target.id === 'tabs-1a') {
        if (player) {
            player.destroy();
        }
        event = 'video1';
        i = 0;
    } else if (_event.target.id === 'tabs-2a') {
        if (player) {
            player.destroy();
        }
        event = 'video2';
        i = 1;
    } else if (_event.target.id === 'tabs-3a') {
        if (player) {
            player.destroy();
        }
        event = 'video3';
        i = 2;
    }
    else if (_event.target.id === 'tabs-4a') {
        if (player) {
            player.destroy();
        }
        event = 'video4';
        i = 3;
    } else if (_event.target.id === 'tabs-5a') {
        if (player) {
            player.destroy();
        }
        event = 'video5';
        i = 4;
    }
    if (event) {
        player = new YT.Player(event, {
            height: '360',
            width: '640',
            videoId: videoID[i],
            events: {
                'onReady': onPlayerReady
            }
        });

        function onPlayerReady(_e) {
            _e.target.playVideo();
            let durationSecTot = player.getDuration();
            let durationSec = durationSecTot % 60;
            let durationMin = Math.trunc(durationSecTot / 60);
            let data = player.getVideoData();
            let urlVideo = player.getVideoUrl();
            if (event === 'video1') {
                $('#title01').html(data.title);
                if (data.author === "") {
                    $('#author01').html("Informação não disponível");
                } else {
                    $('#author01').html(data.author);
                }
                $('#duration01').html(`${durationMin}:${durationSec} Minutos`);
                $('#videoID01').html(data.video_id);
                $('#videoLink01').html(`<a href="${urlVideo}">${urlVideo}</a>`)
            } else if (event === 'video2') {
                $('#title02').html(data.title);
                if (data.author === "") {
                    $('#author02').html("Informação não disponível");
                } else {
                    $('#author02').html(data.author);
                }
                $('#duration02').html(`${durationMin}:${durationSec} Minutos`);
                $('#videoID02').html(data.video_id);
                $('#videoLink02').html(`<a href="${urlVideo}">${urlVideo}</a>`)
            } else if (event === 'video3') {
                $('#title03').html(data.title);
                if (data.author === "") {
                    $('#author03').html("Informação não disponível");
                } else {
                    $('#author03').html(data.author);
                }
                $('#duration03').html(`${durationMin}:${durationSec} Minutos`);
                $('#videoID03').html(data.video_id);
                $('#videoLink03').html(`<a href="${urlVideo}">${urlVideo}</a>`)
            } else if (event === 'video4') {
                $('#title04').html(data.title);
                if (data.author === "") {
                    $('#author04').html("Informação não disponível");
                } else {
                    $('#author04').html(data.author);
                }
                $('#duration04').html(`${durationMin}:${durationSec} Minutos`);
                $('#videoID04').html(data.video_id);
                $('#videoLink04').html(`<a href="${urlVideo}">${urlVideo}</a>`);
            } else {
                $('#title05').html(data.title);
                if (data.author === "") {
                    $('#author05').html("Informação não disponível");
                } else {
                    $('#author05').html(data.author);
                }
                $('#duration05').html(`${durationMin}:${durationSec} Minutos`);
                $('#videoID05').html(data.video_id);
                $('#videoLink05').html(`<a href="${urlVideo}">${urlVideo}</a>`);
            }
        }
    }
}

