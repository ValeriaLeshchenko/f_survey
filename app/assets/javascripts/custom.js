$(function () {



    $('#countdown').countdown({until: new Date($('#countdown').data('time')), format: 'S', onTick: oops});

    function oops(periods) {
       if ($.countdown.periodsToSeconds(periods) == 0) {
          alert("Your time is out!");
       }
    }

    $.randomImage = {
        defaults: {

            //you can change these defaults to your own preferences.
            path: 'http://gifs.gifbin.com/', //change this to the path of your images
            myImages: ['052013/1372784443_dolphin_creates_bubble_rings.gif', '16014655g6.gif', '1239704331_gina-carano.gif', '032010/1270047760_kitten.gif' ] //put image names in this bracket. ex: 'harold.jpg', 'maude.jpg', 'etc'

        }
    };
    if ($('title').html() == 'Step 3') {
        $('#countdown').countdown('pause');
        window.localStorage.amount = window.localStorage.amount || $('.countdown_amount').text();
        $('.countdown_amount').text(window.localStorage.amount);
    }
    $.fn.extend({
        randomImage: function (config) {

            var config = $.extend({}, $.randomImage.defaults, config);

            return this.each(function () {

                var imageNames = config.myImages;

                //get size of array, randomize a number from this
                // use this number as the array index

                var imageNamesSize = imageNames.length;

                var lotteryNumber = Math.floor(Math.random() * imageNamesSize);

                var winnerImage = imageNames[lotteryNumber];

                var fullPath = config.path + winnerImage;


                //put this image into DOM at class of randomImage
                // alt tag will be image filename.
                $(this).attr({
                    src: fullPath,
                    alt: winnerImage
                });


            });
        }

    });
    $('.shuffle').randomImage();

    $("form[data-remote='true']").remoteValidation();


});
$('select[id*="user_birthday"], select[id*="survey_world_end"]').wrap('<div class="large-2 columns">');