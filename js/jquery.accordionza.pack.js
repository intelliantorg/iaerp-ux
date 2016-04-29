/*
 * Accordionza jQuery Plugin
 * Copyright 2010, Geert De Deckere <geert@idoe.be>
 */ (function ($) {
    var r = '1.0.2';
    $.fn.accordionza = function (q) {
        var o = $.extend(true, {}, $.fn.accordionza.defaults, q);
        this.each(function () {
            var c = $(this);
            var d = c.children('li');
            var e = d.filter(':first');
            var f = d.filter(':last');
            var g = d.filter('.' + o.classSlideOpened);
            var h = c.width();
            var j = c.height();
            var k = (o.slideWidthClosed === false) ? d.filter(':not(.' + o.classSlideOpened + '):first').find('.' + o.classHandle + ':first').outerWidth() : o.slideWidthClosed;
            var l = h - (d.length - 1) * k;
            var m;
            var n;
            var p = false;
            c.css({
                'position': 'relative',
                'overflow': 'hidden'
            });
            d.css({
                'position': 'absolute',
                'top': '0',
                'width': l + 'px',
                'height': j + 'px'
            });
            d.each(function (i) {
                $(this).css('left', i * k + 'px').data('order', i)
            });
            $('.' + o.classCaption, d).css('top', j + 'px');

            function startAutoPlay() {
                stopAutoPlay();
                m = setInterval(function () {
                    if (!p) {
                        nextSlide().trigger('slide')
                    }
                }, o.slideDelay)
            }
            function stopAutoPlay() {
                clearInterval(m)
            }
            function pauseAutoPlay(a) {
                if (a === undefined) {
                    var a = o.autoRestartDelay
                }
                stopAutoPlay();
                if (a === false) {
                    return
                }
                clearTimeout(n);
                n = setTimeout(function () {
                    startAutoPlay()
                }, a)
            }
            function prevSlide(a) {
                if (a === undefined) {
                    var a = true
                }
                var b = g.prev();
                if (b.length) {
                    return b
                } else if (a) {
                    return f
                } else {
                    return g
                }
            }
            function nextSlide(a) {
                if (a === undefined) {
                    var a = true
                }
                var b = g.next();
                if (b.length) {
                    return b
                } else if (a) {
                    return e
                } else {
                    return g
                }
            }
            d.bind(o.slideTrigger, function () {
                pauseAutoPlay();
                $(this).trigger('slide')
            });
            d.bind('slide', function () {
                if ($(this).hasClass(o.classSlideOpened)) {
                    return
                }
                g.removeClass(o.classSlideOpened);
                $(this).addClass(o.classSlideOpened);
                d.filter(':gt(' + $(this).data('order') + ')').each(function () {
                    $(this).stop(true).animate({
                        left: l + ($(this).data('order') - 1) * k + 'px'
                    }, o.slideSpeed, o.slideEasing)
                }).end().filter(':lt(' + ($(this).data('order') + 1) + ')').each(function () {
                    $(this).stop(true).animate({
                        left: $(this).data('order') * k + 'px'
                    }, o.slideSpeed, o.slideEasing)
                });
                $('.' + o.classCaption, g).stop(true).animate({
                    top: j + 'px'
                }, o.captionSpeed, o.captionEasing);
                $('.' + o.classCaption, $(this)).stop(true).delay(o.captionDelay).animate({
                    top: j - o.captionHeight + 'px'
                }, o.captionSpeed, o.captionEasing);
                if ($.isFunction(o.onSlideClose)) {
                    o.onSlideClose.call(g)
                }
                if ($.isFunction(o.onSlideOpen)) {
                    o.onSlideOpen.call($(this))
                }
                $.event.trigger('accordionza_slide');
                g = $(this)
            });
            d.find('.' + o.classCaptionToggle).click(function () {
                pauseAutoPlay();
                var a = $(this).closest('li').find('.' + o.classCaption);
                if (!g.hasClass(o.classCaptionCollapsed)) {
                    a.stop(true).animate({
                        top: j - o.captionHeightClosed + 'px'
                    }, o.captionSpeed, o.captionEasing)
                } else {
                    a.stop(true).animate({
                        top: j - o.captionHeight + 'px'
                    }, o.captionSpeed, o.captionEasing)
                }
                g.toggleClass(o.classCaptionCollapsed)
            });
            if (o.navKey) {
                $(document.documentElement).keyup(function (a) {
                    if (a.which == 37) {
                        prevSlide().trigger(o.slideTrigger)
                    } else if (a.which == 39) {
                        nextSlide().trigger(o.slideTrigger)
                    }
                })
            }
            if (g.length) {
                prevSlide().trigger('slide')
            } else {
                f.addClass(o.classSlideOpened);
                g = f;
                e.trigger('slide')
            }
            if (o.autoPlay) {
                if (o.pauseOnHover) {
                    c.mouseenter(function () {
                        p = true
                    }).mouseleave(function () {
                        p = false
                    })
                }
                startAutoPlay()
            }
        });
        return this
    };
    $.fn.accordionza.defaults = {
        autoPlay: false,
        autoRestartDelay: false,
        captionDelay: 0,
        captionEasing: 'swing',
        captionHeight: 50,
        captionHeightClosed: 0,
        captionSpeed: 500,
        classSlideOpened: 'slide_opened',
        classCaption: 'slide_caption',
        classCaptionCollapsed: 'slide_caption_collapsed',
        classCaptionToggle: 'slide_caption_toggle',
        classHandle: 'slide_handle',
        navKey: false,
        onSlideClose: null,
        onSlideOpen: null,
        pauseOnHover: false,
        slideDelay: 5000,
        slideEasing: 'swing',
        slideSpeed: 500,
        slideTrigger: 'click',
        slideWidthClosed: false
    }
})(jQuery);