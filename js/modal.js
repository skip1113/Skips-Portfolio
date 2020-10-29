$(document).ready(function () {
    var modalText = {
        trails: {
            title: 'Trails on Tap',
            tag: 'Hiking Trails & Breweries',
            detail: 'Trails on Tap is a application for users to simply plan a full adventure with a search of city or zip, to find hiking trails, and breweries. Be outdoors with friends, and receive a reward after your hard work.',
            link: 'https://github.com/skip1113/class-pro-1'
            // demo: 'https://skip1113.github.io/class-pro-1/views/index.html'
        },
        hootholla: {
            title: 'Hoot & Holla',
            tag: 'Blog Social Media',
            detail: 'Hoot to post a blog, and Holla at a friend. This application uses authentication for users to create an account, post their blogs, and see other users blogs.',
            link: 'https://github.com/Ragnorok303/Project2DBC'
            // demo: 'https://pure-peak-54891.herokuapp.com/login'
        }
    };
    var modal = document.getElementById('modal');
    // var slide = document.getElementByClassName('slide');
    $('#gallery .button').on('click', function () {
        console.log(this.id);
        fillModal(this.id);
        $('.modal-wrap').addClass('visible')
            .css({
                zIndex: 1,
                position: 'fixed'
            });
        modal.style.display = 'block';
    });
    $('.close').on('click', function () {
        $('.modal-wrap, #modal .button').removeClass('visible');
        modal.style.display = 'none';
    });
    // window.addEventListener('click', function(event) {
    //     if (event.target == modal) {
    //         $('.modal-wrap, #modal .button').removeClass('visibile');
    //         modal.style.display = 'none';
    //     }
    // });
    $(window).click(function (e) {
        if (e.target == modal) {
            $('.modal-wrap, #modal .button').removeClass('visibile');

            modal.style.display = 'none';
        }
    })
    // window.onClick = function(event) {
    //     if (event.target == modal) {
    //         $('.modal-wrap, #modal .button').removeClass('visibile');

    //         modal.style.display = 'none';
    //     }
    // };
    $('.mask').on('click', function () {
        $('.modal-wrap, #modal .button').removeClass('visibile');
        // modal.style.display = 'none';
    });

    var carousel = $('#carousel'),
        slideWidth = 700,
        threshold = slideWidth / 3,
        dragStart,
        dragEnd;

    setDimensions();

    $('#next').on('click', function () {
        shiftSlide(-1);
    });
    $('#prev').on('click', function () {
        shiftSlide(1);
    });

    carousel.on('mousedown', function () {
        if (carousel.hasClass('transition')) return;
        dragStart = Event.pageX;
        $(this).on('mousemove', function () {
            if (dragPos() > threshold) {
                return shiftSlide(1);
            }
            if (dragPos() < -threshold) {
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
        // $('.carousel-wrap, .slide').css('width', slideWidth);
        $('.slide').css('width', slideWidth);
        $('.modal').css('max-width', slideWidth);
        // $('#carousel').css('left', slideWidth * 1);
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
        setTimeout(function () {
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
        console.log(modalText.title);
        console.log(modalText[id]);
        $('#modal .title').text(modalText[id].title);
        $('#modal .detail').text(modalText[id].detail);
        $('#modal .tag').text(modalText[id].tag);
        if (modalText[id].link)
            $('#modal .button')
                .addClass('visibile')
                .parent()
                .attr('href', modalText[id].link);
        // if (modalText[id].demo)
        //     ('#modal .button')
        //         .addClass('visible')
        //         .parent()
        //         .attr('href', modalText[id].demo);

        $.each($('#modal li'), function (index, value) {
            $(this).text(modalText[id].bullets[index]);
        });
        // document.getElementByClassName('slide').style.backgroundImage = "url('trails-1.png')";
        $.each(
            $('#modal .slide'), function (index, value) {
                $(this).css({
                    background:
                        "url('./img/slides/" + id + '-' + index + ".png') center center/cover",
                    backgroundSize: 'cover',
                    height: '100%'
                });
                // document.getElementByClassName('slide').src = "../img/slides/trails-1.png";
            });
            // document.getElementByClassName('slide').src = "../img/slides/trails-1.png";

    };
});

