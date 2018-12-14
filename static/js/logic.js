// JumboTron Title text animation set up
$(function () {
    $('#jumboText').textillate({
        initialDelay: 1,
        in: {
            effect: 'fadeInLeft',
            delayScale: 2,
            // delay: 50,
            shuffle: false,
        }
    });
  });

// MVP Title text animation set up
$(function () {
    $('#mvpTitle').textillate({
        loop: true,
        initialDelay: 50,
        in: {
            effect: 'bounceIn',
            delay: 10,
            shuffle: false,
        },
        out: {
            effect: 'bounceOut',
            delay: 50,
            shuffle: false
        }
    });
  });

  // Credits text animation set up
$(function () {
    $('#credits').textillate({
        loop: true,
        initialDelay: 50,
        in: {
            effect: 'bounceIn',
            delay: 60,
            shuffle: false,
        },
        out: {
            effect: 'bounceOut',
            delay: 10,
            shuffle: false
        }
    });
  });

