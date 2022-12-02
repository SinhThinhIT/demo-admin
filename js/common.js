

// menu toggle
$(function () {
    var html = $('html, body'),
        navContainer = $('.nav-container'),
        navToggle = $('.nav-toggle'),
        navDropdownToggle = $('.has-dropdown');
    overlay = $("<div class='overlay'></div> ");
    overlay2 = $("<div class='overlay'></div> ");

    // Nav toggle
    navToggle.on('click', function (e) {
        overlay.toggle();
        var $this = $(this);
        e.preventDefault();
        $this.toggleClass('is-active');
        navContainer.toggleClass('is-visible');
        html.toggleClass('nav-open');
    });


    $("body").prepend(overlay);
    overlay.click(function () {
        navToggle.trigger('click');
        // $(this).toggle();
    })

    $("body").prepend(overlay2);
    overlay2.click(function () {
        $(this).toggle();
    })
    // Nav dropdown toggle
    navDropdownToggle.on('click', function () {
        var $this = $(this);
        $this.toggleClass('is-active').siblings().removeClass('is-active');
        // if(!$(this).children('ul').is(":visible"))
        // {
        //   $(this).children('ul').slideDown();
        // }
        if ($this.children('ul').hasClass('open-nav')) {
            $this.children('ul').removeClass('open-nav');
            $this.children('ul').slideUp(350);
        }
        else {
            $this.parent().parent().find('li .nav-dropdown').removeClass('open-nav');
            $this.parent().parent().find('li .nav-dropdown').slideUp(350);
            $this.children('ul').toggleClass('open-nav');
            $this.children('ul').slideToggle(350);
        }
    });

    // Prevent click events from firing on children of navDropdownToggle
    navDropdownToggle.on('click', '*', function (e) {
        e.stopPropagation();
    });


});

// style img

$(window).load(function () {
    render_size();
    var url = window.location.href;
    $('.menu-item  a').parent().removeClass('active');
    $('.menu-item  a[href="' + url + '"]').parent().addClass('active');
});

$(window).resize(function () {
    render_size();
});

function render_size() {
    var h_7714 = $('.h_7714 img').width();
    $('.h_7714 img').height(Math.ceil(0.7714 * parseInt(h_7714)));

    var h_5 = $('.h_5 img').width();
    $('.h_5 img').height(Math.ceil(0.5 * parseInt(h_5)));

}

// scroll add class
if (window.innerWidth > 768) {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.sticky-header').addClass('fixed');
        } else {
            $('.sticky-header').removeClass('fixed');
        }
    });
}
if (window.innerWidth > 320) {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.sticky-header').addClass('clearfix');
        } else {
            $('.sticky-header').removeClass('clearfix');
        }
    });
}


// btn_search
$(function () {
    // search dropdown button
    $('.btn_search').click(function (e) {
        overlay2.toggle();
        e.preventDefault();
        $(this).parents('.search_drop').find('.form_search').toggleClass('open')
    })
    $(document).click(function (event) {
        // Check if clicked outside target
        if (!($(event.target).closest(".search_drop").length)) {
            // Hide target
            $(".form_search").removeClass('open');

        }

    });
});




//scroll to top button
$(function () {
    $("a[href='#top']").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
}, 0);

$(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
        $('#go_top').show();
    }
    else {
        $('#go_top').hide();
    }
});



// slider



$(function () {
    $(".slider_main").owlCarousel({
        items: 1,
        responsive: {
            1200: { item: 1, },// breakpoint from 1200 up
            992: { items: 1, },
            768: { items: 1, },
            480: { items: 1, },
            0: { items: 1, }
        },
        rewind: false,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000, //slide speed smooth
        dots: false,
        dotsEach: false,
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left arrow-slider"></i>', '<i class="fa fa-angle-right arrow-slider"></i>'],
        margin: 10,
        animateOut: ['fadeOutUp', 'zoomOut', 'fadeOutLeft'], // default: false
        animateIn: ['fadeInDown', 'zoomIn', 'fadeInLeft'], // default: false
        center: false,
    });
});




function myFunction(id) {
    document.getElementById(id).classList.toggle("show");
}

// Đóng class khi click ra ngoài màn hình
window.onclick = function (event) {
    if (!event.target('.user-nguoi')) {
        var dropdowns1 = document.getElementsByClassName("user-menu");
        var i;
        for (i = 0; i < dropdowns1.length; i++) {
            var openDropdown1 = dropdowns1[i];
            if (openDropdown1.classList.contains('show')) {
                openDropdown1.classList.remove('show');
                console.log("ada");
            }
        }
    }
}


function anhien_menu_pc(id) {
    document.getElementById(id).classList.toggle("max-w-menu");
    document.getElementById("id-col-lg-3").classList.toggle("max-w-menu");
}

// Đóng class khi click ra ngoài màn hình
window.onclick = function (event) {
    if (!event.target.matches('.navbar-brand')) {
        var dropdowns = document.getElementsByClassName(".col-lg-3");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("max-w-menu")) {
                openDropdown.classList.remove('max-w-menu');
                console.log("ada");
            }
        }
    }
}



function myMenu1(id) {
    document.getElementById(id).classList.toggle("show");
}

// Đóng class khi click ra ngoài màn hình
window.onclick = function (event) {
    if (!event.target.matches('.myMenu')) {
        var dropdowns = document.getElementsByClassName(".ul-menu-lv-2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove('show');
                console.log("ada");
            }
        }
    }
}




function anhien_menu_mobi(id) {
    document.getElementById(id).classList.toggle("menu_mobi");
}

// Đóng class khi click ra ngoài màn hình
window.onclick = function (event) {
    if (!event.target.matches('.navbar-brand')) {
        var dropdowns = document.getElementsByClassName(".col-lg-3");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("menu_mobi")) {
                openDropdown.classList.remove('menu_mobi');
                console.log("ada");
            }
        }
    }
}



