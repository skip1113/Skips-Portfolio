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
        },
        nitinerary: {
            title: 'Nitinerary',
            tag: 'Date night planner',
            detail: 'Plan a date anyday with that special someone. This is a MERN Stack application with APIs to search for events, and save them so you wont ever forget what you are doing.',
            link: 'https://github.com/imjvdn/DUFinalProject'
        },
        mongoscrape: {
            title: 'Mongo Web Scraper',
            tag: 'Time Magazine Articles scraper',
            detail: 'This application uses MongoDB for users to save articles to read later. These articles were scraped from Time Magazine using Mongoose and Cheerio',
            link: 'https://github.com/skip1113/Scraping-Mongo'
        },
        bamazon: {
            title: 'Bamazon CLI',
            tag: 'Command line items shop',
            detail: 'Bamazon operates using the terminal. Items can be bought, sold, added and managed with a specific command line. This application uses Node.js, Inquirer, and MySQL.',
            link: 'https://github.com/skip1113/bamazon'
        },
        liribot: {
            title: 'Node LIRI Bot',
            tag: 'Language Interpretation and Recgonition Interface with APIs',
            detail: 'This LIRI bot application allows users to find songs, concerts and movies through their terminal using Axios and APIs',
            link: 'https://github.com/skip1113/Liri-node-app'
        },
        googlebooks: {
            title: 'Google Books',
            tag: 'Reading List DataBase',
            detail: 'Google books reading list. This application uses React, Google Books API and Mongoose. Users are able to search for books, save and create for reading later.',
            link: 'https://github.com/skip1113/google-books'
        },
        firetrain: {
            title: 'Fire Train Schedule',
            tag: 'Train departure, and arrival schedule',
            detail: 'This train application uses Momment.js for real time, and Firebase for storage. Users are able to create and see the calculated times when the train will next arrive.',
            link: 'https://github.com/skip1113/FireTrain'
        }
    };
    var modal = document.getElementById('modal');
    // var slide = document.getElementByClassName('slide');
    $('#gallery .button').on('click', function () {
        console.log(this.id);
        fillModal(this.id);
        $('.modal-wrap').addClass('visible')
            .css({
                zIndex: 2,
                position: 'fixed'
            });
        modal.style.display = 'block';
    });
    $('.close').on('click', function () {
        $('.modal-wrap, #modal .button').removeClass('visible');
        modal.style.display = 'none';
    });
    $(window).click(function (e) {
        if (e.target == modal) {
            $('.modal-wrap, #modal .button').removeClass('visible');

            modal.style.display = 'none';
        }
    })
    $('.mask').on('click', function () {
        $('.modal-wrap, #modal .button').removeClass('visible');
        modal.style.display = 'none';
    });
    var mouseEvent = document.createEvent('MouseEvent');
    mouseEvent.initMouseEvent('click', true, true, window, 1, 100, 100, 100,100);
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
        dragStart = event.pageX;
        $(this).on('mousemove', function () {
            dragnEnd = event.pageX;
            $(this).css('transform', 'translateX(' + dragPos() + 'px)');
        });
        $(document).on('mouseup', function() {
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
        return dragEnd - dragStart;
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
                    backgroundSize: 'cover'
                    // height: '100%'
                });
                // document.getElementByClassName('slide').src = "../img/slides/trails-1.png";
            });
            // document.getElementByClassName('slide').src = "../img/slides/trails-1.png";

    };
});

