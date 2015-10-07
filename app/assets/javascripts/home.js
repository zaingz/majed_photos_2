
$(document).ready(function() {

    $(".link>a").on({
        mouseenter: function () {
            $("#bg_img").css({"filter": "blur(0px)", "-webkit-filter": "blur(0px)"});
        },
        mouseleave: function () {
            $("#bg_img").css({"filter": "blur(5px)", "-webkit-filter": "blur(5px)"});
        }
    });

    $("#vid").on({
        mouseenter: function () {
            $("#photo").css({"width": "40%"});
            $("#vid").css({"width": "60%"});
        },
        mouseleave: function () {
            $("#photo").css({"width": "50%"});
            $("#vid").css({"width": "50%"});
        }
    });

    $("#photo").on({
        mouseenter: function () {
            $("#photo").css({"width": "60%"});
            $("#vid").css({"width": "40%"});
        },
        mouseleave: function () {
            $("#photo").css({"width": "50%"});
            $("#vid").css({"width": "50%"});
        }
    });

});

