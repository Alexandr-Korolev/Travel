
$('.question__button').click(function () {
    // alert('Ура получилось');
    $('.popup').fadeIn(800);
    $('.popup').css('display', 'flex')
});

// открываем попарт по клику на кнопку
$('.image__button').click(function () {
    $('.popup').slideDown(1000);
    $('.popup').css('display', 'flex');
});

// открываем ответ на вопрос
// $('.faq-item__title--1').click(function () {
//     $('.faq-item__answer--1').toggle(1000);
// });


// $('.faq-item__title--2').click(function () {
//     $('.faq-item__answer--2').toggle(600)
// });

$('.faq-item').click(function () {
    $(this).find('.faq-item__answer').slideToggle(1000);
});



let $popup = $('.popup');

$('.header-button').click(function () {
    $popup.slideDown(1000);
    $popup.css('display', 'flex');
});

$('.close').click(function () {
    $popup.fadeOut(600);
});




$('.trips-item').click(function () {
    $(this).find('p').toggle(600);
});

$('.trips__hr').click(function () {
    $(this).animate({
        'width': '100%',
        'height': '5%',
        'border-radius': '5%',
    }, 1000);
});

$('.about').click(function () {
    $('html, body').animate({
        scrollTop: $('.heading').offset().top - $('header').outerHeight()
    }, 500);
    return false;
});

$('.cookies').css('bottom', -$('.cookies').outerHeight());
// $('.cookies').animate({
//     'bottom': 0
// }, 600);

$('.cookies-button, .close-cookies ').click(function () {
    $('.cookies').slideUp(600);
});

$('#button').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 700);
});



// Валидация формы
let $fio = $('.popup-form [name="fio"]');
let $email = $('.popup-form [name="email"]');
let $phone = $('.popup-form [name="phone"]');
let $error = $('.popup-form .form-error');

$('.popup-form').submit(function () {
    console.log('Значение инпута ФИО: ', $fio.val());
    console.log('Значение инпута Почта: ', $email.val());
    console.log('Значение инпута Телефон: ', $phone.val());

    if ($fio.val() == '') {
        // $fio.css('border-color', 'red');
        $fio.addClass('error');
    } else {
        // $fio.css('border-color', '');
        $fio.removeClass('error');
    }

    if ($email.val() == '') {
        $email.addClass('error');
    } else {
        $email.removeClass('error');
    }

    if ($phone.val() == '') {
        $phone.addClass('error');
    } else {
        $phone.removeClass('error');
    }


    // написать условие, при котором будет отправляться форма
    if (!$fio.hasClass('error') && !$email.hasClass('error') && !$phone.hasClass('error')) {
        $error.css('display', 'none');

       
        // Скрываем и показываем плавно
        $('.popup-answer').fadeOut(500);

        $('.popup-success h3').html($fio.val() + ', ваша форма отправлена');
        $('.popup-success p').html('С вами скоро свяжутся по телефону: ' + $phone.val());

        $('.popup-success').delay(500).fadeIn(500);


        this.reset();
    } else {
        $error.css('display', 'block');
    }

    return false;
});

// Событие нажатия клавиши на элементах
$('[name="fio"], [name="email"], [name="phone"]').keyup(function (e) {
    // console.log(e.keyCode);


    if ($(this).val() == '') {
        $(this).addClass('error');
    } else {
        $(this).removeClass('error');
    }

    if (!$fio.hasClass('error') && !$email.hasClass('error') && !$phone.hasClass('error')) {
        $error.css('display', 'none');
    }
    
});

// Событие нажатия клавиши на окне браузера
$(window).keyup(function (e) {

    if (e.keyCode == 27) {
        $popup.fadeOut(600);
    }
});



// Простой слайдер
$('.images').click(function () {
    if (!$(this).hasClass('images2')) {
        $(this).addClass('images2');
    } else {
        $(this).removeClass('images2');
    }
});

// Открываем / закрываем мобильное меню
$('.burger').click(function () {
    if ($(this).hasClass('open')) {
        $('.menu').animate({
            right: '-100%'
        }, 500, function () {
            $(this).css('display', 'none');
        });
    } else {
        $('.menu').css('display', 'flex').animate({
            right: 0
        }, 500);
    }

    $(this).toggleClass('open');
});