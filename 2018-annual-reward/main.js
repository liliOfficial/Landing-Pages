
var name, count, id, token;
token = window.localStorage.getItem('cloudhub_token');

liDisplay();
login();
deposit();
formValidation();
slotMachine();
if (token) {
    getUserInfo();
}

// VIDEO DISPLAY
$(window).scroll(function () {
    $('.videoshow').each(function () {
        var top_of_object = $(this).offset().top;
        var top_of_window = $(window).scrollTop();
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + window.innerHeight;
        if (bottom_of_window > bottom_of_object && top_of_window < top_of_object) {
            this.play();
        } else {
            this.pause();
        }
    });
});

// TURNTABLE
var angle = 0;
var angleChange = 0.5
var rotate = setInterval(function () {
    if (angle >= 360) {
        angle = angle - 360;
    } else {
        angle += angleChange;
    }
    $('.process .turntable .rotate img').css('-webkit-transform', 'rotate(' + angle + 'deg)');
    $('.process .turntable .rotate img').css('-moz-transform', 'rotate(' + angle + 'deg)');
    $('.process .turntable .rotate img').css('-o-transform', 'rotate(' + angle + 'deg)');
    $('.process .turntable .rotate img').css('-ms-transform', 'rotate(' + angle + 'deg)');
    $('.process .turntable .rotate img').css('transform', 'rotate(' + angle + 'deg)');
}, 30);

function turntable(result) {
    angleChange = 15;
    var lowSpeed = setInterval(function () {
        angleChange = angleChange * 0.94;
    }, 200)
    var minAngle, maxAngle;
    switch (result) {
        case 11:
            minAngle = 237;
            maxAngle = 243;
            $('.popup-win .word').text('恭喜您抽中30美元现金红包，赠金将会在3个工作日内转入您的MT4交易主账户。');
            break;
        case 12:
            minAngle = 177;
            maxAngle = 183;
            $('.popup-win .word').text('恭喜您抽中50美元现金红包，赠金将会在3个工作日内转入您的MT4交易主账户。');
            break;
        case 13:
            minAngle = 57;
            maxAngle = 63;
            $('.popup-win .word').text('恭喜您抽中100美元现金红包，赠金将会在3个工作日内转入您的MT4交易主账户。');
            break;
        case 14:
            minAngle = 267;
            maxAngle = 273;
            $('.popup-win .word').text('恭喜您抽中500美元现金红包，赠金将会在3个工作日内转入您的MT4交易主账户。');
            break;
        case 15:
            minAngle = 147;
            maxAngle = 153;
            $('.popup-win .word').text('恭喜您抽中iPhone X，请您用开户邮箱将您的联系方式和居住地址发送到support.cn@acy.com，我们收到后会于5个工作日内与您联系，确认奖品。');
            break;
        case 16:
            minAngle = 207;
            maxAngle = 213;
            $('.popup-win .word').text('恭喜您抽中Samsung Curve TV，请您用开户邮箱将您的联系方式和居住地址发送到support.cn@acy.com，我们收到后会于5个工作日内与您联系，确认奖品。');
            break;
        case 17:
            minAngle = 87;
            maxAngle = 90;
            $('.popup-win .word').text('恭喜您抽中大溪地全家5日游，请您用开户邮箱将您的联系方式和居住地址发送到support.cn@acy.com，我们收到后会于5个工作日内与您联系，确认奖品。');

            break;
        case 18:
            minAngle = 297;
            maxAngle = 303;
            $('.popup-win .word').text('恭喜您抽中Land Rover Evoque，请您用开户邮箱将您的联系方式和居住地址发送到support.cn@acy.com，我们收到后会于5个工作日内与您联系，确认奖品。');
            break;
        case 19:
            minAngle = 327;
            maxAngle = 333;
            $('.popup-win .word').text('恭喜您抽中Tesla Model X，请您用开户邮箱将您的联系方式和居住地址发送到support.cn@acy.com，我们收到后会于5个工作日内与您联系，确认奖品。');
            break;
        case 20:
            minAngle = 0;
            maxAngle = 5;
            $('.popup-win .word').text('恭喜您抽中BMW i8，请您用开户邮箱将您的联系方式和居住地址发送到support.cn@acy.com，我们收到后会于5个工作日内与您联系，确认奖品。');
            break;
    };
    setTimeout(function () {
        clearInterval(lowSpeed);
        var showResult = setInterval(function () {
            if (angle >= minAngle && angle <= maxAngle) {
                clearInterval(rotate);
                clearInterval(showResult);
                setTimeout(function () {
                    $('.popup-win').fadeIn('slow');
                }, 1000);
            }
        }, 30);
    }, 9000);
}

$('.popup-win').click(function () {
    $(this).hide();
    window.location.reload();
});

// LI ANIMATION
function liDisplay() {
    var i = 1;
    setInterval(function () {
        $(".section2 ul li:nth-child(" + i + ")").removeClass('highlight');
        if (i === 4) {
            i = 1
        } else {
            i++
        }
        $(".section2 ul li:nth-child(" + i + ")").addClass('highlight');
    }, 2000);
}

$('.fu-bottom').click(function () {
    $('html, body').animate({ scrollTop: $('.form').offset().top }, 2200);
});

// SLOT MACHINE
function slotMachine() {
    function startGame() {
        var i = 0;
        var top = 26;
        var roll = setInterval(function () {
            if (i > 110) {
                i = 0;
            } else {
                i += 6;
            }
            $('.money .game .col').css('top', top - i + '%');
        }, 10);
        $('.stop-game').click(function () {
            clearInterval(roll);
            $('.start-game').show();
            $('.stop-game').hide();
            var random = Math.random();
            if (random > 0.7) {
                $('.money .game .col').css('top', top - 120 + '%');
                $('h3.gameword').text('今日手气爆表，快来入金抽奖吧！');

            } else {
                $('.money .game .col').css('top', top - 60 + '%');
                $('h3.gameword').text('今日手气不错，快来入金抽奖吧！');
            }

            setTimeout(function () {
                $('.gameword').show();
                if (token) {
                    $('.login').hide();
                    $('.inprocess').show();
                }
                $('.popup-log').fadeIn();

            }, 500);
        })

    }

    $('.start-game').click(function () {
        if (token) {
            startGame();
            $('.start-game').hide();
            $('.stop-game').show();
        } else {
            $('.popup-log').show();
            $('.gamebutton').show();
        }
    });

    $('.gamebutton').click(function () {
        $('.popup-log').hide();
        setTimeout(function () {
            startGame();
            $('.start-game').hide();
            $('.stop-game').show();
            $('.gamebutton').hide();
        }, 100);
    });

    $('.inprocess').click(function () {
        $('.popup-log').hide();
        $('html, body').animate({ scrollTop: $('.process h3').offset().top - 50 }, 1200);
    });
}

//CODE DISPLAY
$('.turntable').click(function () {
    $('.popup-code').show()
});
$('.popup-code').click(function () {
    $(this).hide();
})

//GET NAME AND COUNT
function getUserInfo() {
    $.ajax({
        type: 'POST',
        url: HOST + '/lottery/getLeftLucky',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        success: function (data) {
            $('.logged').show();
            name = data.name;
            count = data.count;
            id = data.id
            var deposit = data.deposit_count;
            $('.logged .name').text(name);
            $('.logged .number').text(count);
            if (deposit === 0 && count === 0) {
                $('.popup-deposit').fadeIn();
            }
            if (count !== 0) {
                websockets();
            }
        },
        error: function (xhr, type) {
            window.alert('error');
        }
    });
}

// WEBSOCKETS
function websockets() {
    echo1 = new echo({
        broadcaster: 'socket.io',
        host: wsHost,
    });
    // echo1.channel('general-' + id)
    //     .listen('.Lottery', (e) => {
    //         console.log(e);
    //         var winResult = e.info.prizeid;
    //         turntable(winResult);
    //     });
    echo1.channel('general-' + id)
    .listen('.Lottery', function(e) {
        console.log(e);
        var winResult = e.info.prizeid;
        turntable(winResult);
    });
}

// LOGIN
function login() {
    if (token) {
        $('.login-button').hide();
        if (name && count) {
            $('.logged .name').text(name);
            $('.logged .number').text(count);
            $('.logged').show();
        }
    } else {
        $('.login-button').show();
    };

    $('.login-button').click(function () {
        $('.popup-log').show();
    });

    // GENERAL RESPONSIVE
    $('.login .buttons button').click(function () {
        $('.gamebutton').hide();
        $('.logerror').hide();

    });

    $('.login .buttons .cancel').click(function () {
        $('.popup-log').hide();
        $('.gameword').hide();
    });

    $('.buttons .account').click(function () {
        $('.popup-log').hide();
        $('html, body').animate({ scrollTop: $('.form').offset().top - 50 }, 1800);
    });

    // LOGIN
    $('.buttons .log').click(function () {
        var logId = $('#logid').val();
        var logPassword = $('#logpassword').val();
        $.ajax({
            type: 'POST',
            url: HOST + '/login?email=' + logId + '&password=' + logPassword,
            success: function (data) {
                if (data.token) {
                    window.localStorage.setItem('cloudhub_token', data.token);
                    document.cookie = data.token;
                    console.log(document.cookie);
                    token = data.token;
                    $('html, body').animate({ scrollTop: $('.process h3').offset().top - 50 }, 1200);
                    $('.popup-log').hide();
                    $('.login-button').hide();
                    getUserInfo();
                }
            },
            error: function (xhr, type) {
                $('.logerror').show();
            }
        });
    });

    $('.logged').click(function () {
        $('html, body').animate({ scrollTop: $('.process h3').offset().top - 50 }, 1800);
    });

    $('.logged .logout').click(function () {
        window.localStorage.clear();
        window.location.reload();
    });

}

//DEPOSIT
function deposit() {
    $('.deposit .cancel').click(function () {
        $('.popup-deposit').hide();
    });
}

//FORM VALIDATION
function formValidation() {
    $('form input[name="first_name"]').change(function () {
        if (!$(this).val()) {
            $(this).parent().siblings('.message').show();
        } else {
            $(this).parent().siblings('.message').hide();
        }
    });

    $('form input[name="last_name"]').change(function () {
        if (!$(this).val()) {
            $(this).parent().siblings('.message').show();
        } else {
            $(this).parent().siblings('.message').hide();
        }
    });

    $('form input[name="email"]').change(function () {
        if (!validateEmail($(this).val())) {
            $(this).parent().siblings('.message').show();
        } else {
            $(this).parent().siblings('.message').hide();
        }
    });

    $('form input[name="phone"]').change(function () {
        if (!validatePhone($(this).val())) {
            $(this).parent().siblings('.message').show();
        } else {
            $(this).parent().siblings('.message').hide();
        }
    });

}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validatePhone(phone) {
    var vali = /^\d{7,13}$/;
    return vali.test(phone);
}

function getIEVersion() {
    var match = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
    return match ? parseInt(match[1]) : undefined;
}

function sumbitForm() {
    if (getIEVersion() < 10) {
        var xdr = new XDomainRequest();
        xdr.open("POST", jQuery('#' + a_form.id).attr('action'));
        xdr.send(jQuery('#' + a_form.id).serialize());
        xdr.onprogress = function () {
        }; // no aborting
        xdr.ontimeout = function () {
        }; // "
        xdr.onerror = function () {
            // error handling
        };
        xdr.onload = function () {
            var result = JSON.parse(xdr.responseText);
            if (result.status_code == 201) {
                window.location.href = result.message;
            } else if (result.status_code == 409) {
                window.alert('error : email已存在， 请重新填写');
            }
        }
    } else {
       $(this).attr('disabled', true);
       var url = $('#form').attr('action');
       var data = $('#form').serialize();
       $.ajax({
            type: 'POST',
            url: url,
            crossDomain: true,
            data: data,
            dataType: 'json',
            success: function (data, textStatus, jqXHR) {
                if (data.status_code == 201) {
                    window.location.href = data.message;
                } else if (data.status_code == 409) {
                    window.alert('error : email已存在， 请重新填写');
                } else {
                    window.alert('error : 请与我们联系');
                }
                clicked = false;
            },
            error: function (xhr, type) {
                clicked = false;
                var message = xhr.status == 429 ? "Too many request" : "error : 请与我们联系";
                window.alert(message);
            }
        });
    }
}

$('#submit').click(function() {
    if ($('form input[name="first_name"]').val() && $('form input[name="last_name"]').val() && validatePhone($('form input[name="phone"]').val()) && validateEmail($('form input[name="email"]').val())){
        sumbitForm();
    } else {
        if (!$('form input[name="first_name"]').val()) {
            $('form input[name="first_name"]').parent().siblings('.message').show();
        } else {
            $('form input[name="first_name"]').parent().siblings('.message').hide();
        }
        if (!$('form input[name="last_name"]').val()) {
            $('form input[name="last_name"]').parent().siblings('.message').show();
        } else {
            $('form input[name="last_name"]').parent().siblings('.message').hide();
        }
        if (!validateEmail($('form input[name="email"]').val())) {
            $('form input[name="email"]').parent().siblings('.message').show();
        } else {
            $('form input[name="email"]').parent().siblings('.message').hide();
        }
        if (!validatePhone($('form input[name="phone"]').val())) {
            $('form input[name="phone"]').parent().siblings('.message').show();
        } else {
            $('form input[name="phone"]').parent().siblings('.message').hide();
        }

    }   
});

