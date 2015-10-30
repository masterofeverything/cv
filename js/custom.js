// Smooth scroll effect
$('a[href^="#"]').on('click', function(event) {
    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

// Circle diagrams
function computeDeg(id){
    var $ppc = $('#' + id),
    percent = parseInt($ppc.data('percent')),
    deg = 360*percent/100;
    if (percent > 50) {
        $ppc.addClass('gt-50');
    }
    $('#' + id + ' > .ppc-progress > .ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
    $('#' + id + ' > .ppc-percents span').html(percent+'%');
};

$(function(){
    computeSize();
    computeDeg("ppc1");
    computeDeg("ppc2");
    computeDeg("ppc3");
});

//Window size
function computeSize() {
    if ($(window).width() < 768) {
        $('#toggled').removeClass("row-eq-height");
    }
    else {
        $('#toggled').addClass("row-eq-height");
    }
}

$(window).resize(function() {
    computeSize();
});