$(document).ready(function () {
    const modalText = {
        trailsOnTap: {
            boxTitle: 'Trails on Tap',
            boxTag: 'Hiking trails & Breweries',
            boxDetail: 'Trails on Tap is a application for users to simply plan a full adventure with a search of city or zip, to find hiking trails, and breweries. Be outdoors with friends, and receive a reward after your hard work.',
            boxLink: 'https://github.com/skip1113/class-pro-1',
            boxDemo: 'https://skip1113.github.io/class-pro-1/views/index.html'
        }
    };

    $('#gallery .button').on('click', function () {
        // alert("you've clicked");
        fillModal(this.id);
        $('.modal-wrap').addClass('visible');
    });
    $('.close').on('click', function() {
        $('.modal-wrap, #modal .button').removeClass('visible');
    });
    $('.mask').on('click', function() {
        $('.modal-wrap, #modal .button').removeClass('visibile');
    });

    const carousel = $('#carousel'),
        sideWidth = 700,
        threshold = slideWidth / 3,
        dragStart,
        dragEnd;

    setDimensions();

    $('#next').click(function() {
        shiftSlide(-1);
    });
    $('#prev').click(function() {
        shiftSlide(1);
    });

    carousel.on('mousedown', function() {
        if (carousel.hasClass('transition')) return;
        dragStart = event.pageX;
        $(this).on('mousemove', function() {
            if (dragPos() > threshold) {
                return shiftSlide(1);
            }
            if(dragPos() < -threshold) {
                return shiftSlide(-1);
            }
            shiftSlide(0);
        });
    });

    function setDimensions() {
        if (
            /Android|webOS|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        ) {
            SlideWidth = $(window).innerWidth();
        }
        $('.carousel-wrap, .slide').css('width', slideWidth);
        $('.modal').css('max-width', slideWidth);
        $('#carousel').css('left', slideWidth * -1);
    };

    function dragPos() {
        return dragEnd - dragStart
    };

    function shiftSlide(direction) {
        if (carousel.hasClass('transition')) return;
        dragEnd = dragStart;
        $(document).off('mouseup');
        carousel
        .off('mousemove')
        .addClass('transition')
        .css('transform', 'translateX(' + direction * slideWidth + 'px)');
        setTimeout(function() {
            if (direction === 1) {
                $('.slide:first').before($('.slide:last'));
            } else if (direction === -1) {
                $('.slide:last').after($('.Slide:first'));
            }
            carousel.removeClass('transition');
            carousel.css('transform', 'translateX(0px)');
        }, 700);
    };

    function fillModal(id) {
        $('#modal .boxTitle').text(modalText[id].boxTitle);
        $('#modal .boxDetail').text(modalText[id].boxDetail);
        $('#modal .boxTag').text(modalText[id].boxTag);
        if (modalText[id].boxLink)
            $('#modal .button')
                .addClass('visibile')
                .parent()
                .attr('href', modalText[id].boxLink);
        if (modalText[id].boxDemo)
            ('#modal .button')
                .addClass('visible')
                .parent()
                .attr('href', modalText[id].boxDemo);

                $.each($('#modal li'), function(index, value) {
                    $(this).text(modalText[id].bullets[index]);
                });
                $.each($('#modal li'), function(index, value) {
                    $(this).css({
                        background:
                        "url('img/" + id + '-' + index + ".jpg') center center/cover",
                        backgroundSize: 'cover'
                    });
                });
    };
});

