$(document).ready(function () {
    var modalText = {
        trails: {
            title: 'Trails on Tap',
            tag: 'Hiking Trails & Breweries',
            detail: 'Trails on Tap is a application for users to simply plan a full adventure with a search of city or zip, to find hiking trails, and breweries. Be outdoors with friends, and receive a reward after your hard work.',
            link: 'https://github.com/skip1113/class-pro-1',
            demo: 'https://skip1113.github.io/class-pro-1/views/index.html'
        },
        hootholla: {
            title: 'Hoot & Holla',
            tag: 'Blog Social Media',
            detail: 'Hoot to post a blog, and Holla at a friend. This application uses authentication for users to create an account, post their blogs, and see other users blogs.',
            link: 'https://github.com/Ragnorok303/Project2DBC',
            demo: 'https://pure-peak-54891.herokuapp.com/login'
        },
        nitinerary: {
            title: 'Nitinerary',
            tag: 'Date night planner',
            detail: 'Plan a date anyday with that special someone. This is a MERN Stack application with APIs to search for events, and save them so you wont ever forget what you are doing.',
            link: 'https://github.com/imjvdn/DUFinalProject',
            demo: 'https://nitetinerary.herokuapp.com/'
        },
        mongoscrape: {
            title: 'Mongo Web Scraper',
            tag: 'Time Magazine Articles scraper',
            detail: 'This application uses MongoDB for users to save articles to read later. These articles were scraped from Time Magazine using Mongoose and Cheerio',
            link: 'https://github.com/skip1113/Scraping-Mongo',
            demo: 'https://scraping-mongo.herokuapp.com/'
        },
        bamazon: {
            title: 'Bamazon CLI',
            tag: 'Command line items shop',
            detail: 'Bamazon operates using the terminal. Items can be bought, sold, added and managed with a specific command line. This application uses Node.js, Inquirer, and MySQL.',
            link: 'https://github.com/skip1113/bamazon',
            demo: 'https://github.com/skip1113/bamazon'
        },
        liribot: {
            title: 'Node LIRI Bot',
            tag: 'Language Interpretation and Recgonition Interface with APIs',
            detail: 'This LIRI bot application allows users to find songs, concerts and movies through their terminal using Axios and APIs',
            link: 'https://github.com/skip1113/Liri-node-app',
            demo: 'https://github.com/skip1113/Liri-node-app'
        },
        googlebooks: {
            title: 'Google Books',
            tag: 'Reading List DataBase',
            detail: 'Google books reading list. This application uses React, Google Books API and Mongoose. Users are able to search for books, save and create for reading later.',
            link: 'https://github.com/skip1113/google-books',
            demo: 'https://gogglebooks.herokuapp.com/'
        },
        firetrain: {
            title: 'Fire Train Schedule',
            tag: 'Train departure, and arrival schedule',
            detail: 'This train application uses Momment.js for real time, and Firebase for storage. Users are able to create and see the calculated times when the train will next arrive.',
            link: 'https://github.com/skip1113/FireTrain',
            demo: 'https://skip1113.github.io/FireTrain/index.html'
        },
        wordguessgame: {
            title: 'Word Guess Game',
            tag: '80s Band Guess Game',
            detail: 'This game uses Jquery to enable the users to guess the bands with a type of a letter on their keyboard. Wins and Losses are also kept score on the screen.',
            link: 'https://github.com/skip1113/Word-Guess-Game',
            demo: 'https://skip1113.github.io/Word-Guess-Game/'
        },
        burger: {
            title: 'Burger Creator',
            tag: 'Create burgers and watch the DOM update after devourings.',
            detail: 'This burger creation application is built with Handlebars, Express, and MySQL. Users are able to create their own burger and devour it. Burgers that are created are saved in MySQL Database.',
            link: 'https://github.com/skip1113/burger',
            demo: 'https://hidden-chamber-83537.herokuapp.com/'
        },
        crystals: {
            title: 'Crystal Game',
            tag: 'Random Number Generator Crystals',
            detail: 'This game is created with JQuery, the game updates after a win or lose, and each click of a crystal. Add up the crystals to the computer score to win.',
            link: 'https://github.com/skip1113/unit-4-game',
            demo: 'https://skip1113.github.io/unit-4-game/'
        },
        friendfinder: {
            title: 'Friend Finder',
            tag: 'Social Dating App',
            detail: 'This application was built with Express, and Node. Users complete a survey and the matching algorithm pairs the user with someone that has the closests answers to your survey.',
            link: 'https://github.com/skip1113/friend-finder',
            demo: 'https://hidden-chamber-83537.herokuapp.com/survey'
        },
        giphy: {
            title: 'Giphy App',
            tag: 'Animated Gif Application',
            detail: 'This uses the giphy API, which is communicated with the Ajax functions to create results of the Gifs the users searches for. The Gifs are animated by clicking the still image.',
            link: 'https://github.com/skip1113/GIFtastic',
            demo: 'https://skip1113.github.io/GIFtastic'
        },
        simpsonstriv: {
            title: 'Simpsons Trivia',
            tag: 'Test what you know about the Simpsons',
            detail: 'This is a timed trivia about the Simpsons made with Javascript, and JQuery. After the count down or submission button the questions will be validated if they are correct or incorrect.',
            link: 'https://github.com/skip1113/TriviaGame',
            demo: 'https://skip1113.github.io/TriviaGame/'   
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
            $('#modal .button')
                .addClass('visibile')
                .parent()
                .attr('href', modalText[id].link);
            $('#modal .buttonDemo')
                .addClass('visible')
                .parent()
                .attr('href', modalText[id].demo);

        $.each($('#modal li'), function (index, value) {
            $(this).text(modalText[id].bullets[index]);
        });
        $.each(
            $('#modal .slide'), function (index, value) {
                $(this).css({
                    background:
                        "url('./img/slides/" + id + '-' + index + ".png') center center/cover",
                    backgroundSize: 'cover'
                });
            });
    };
});

