$( document ).ready(function() {
    $('.toggle').click(function(){
        $(this).parent().parent().children().children('.content-toggle').toggle(500);
    });

    $('.popup .close').click(function(){
        $('.popup').fadeOut(150);
    });

    $('#project_info_summary').click(function(){
        $('.popup').fadeIn(200);
        $('.popup-content').hide();
        $('#pc_0').show();
    });
    $('#show_pc_1').click(function(){
        $('.popup').fadeIn(200);
        $('.popup-content').hide();
        $('#pc_1').show();
    });
    $('#show_pc_2').click(function(){
        $('.popup').fadeIn(200);
        $('.popup-content').hide();
        $('#pc_2').show();
    });
    $('#show_pc_3').click(function(){
        $('.popup').fadeIn(200);
        $('.popup-content').hide();
        $('#pc_3').show();
    });
    $('#show_pc_4').click(function(){
        $('.popup').fadeIn(200);
        $('.popup-content').hide();
        $('#pc_4').show();
    });
    $('#show_pc_5').click(function(){
        $('.popup').fadeIn(200);
        $('.popup-content').hide();
        $('#pc_5').show();
    });
    $('#show_pc_6').click(function(){
        $('.popup').fadeIn(200);
        $('.popup-content').hide();
        $('#pc_6').show();
    });
    $(function() {
        $('.my-slider').unslider();
    });

    $('#show_hide_all').click(function(){
        var sclass = $('#show_hide_all').hasClass('show-all');

        if (sclass) {
            $('.content-mini').hide(100);
            $('.content-full').show(100);
            $('#show_hide_all').attr('class', 'hide-all');
        } else {
            $('.content-mini').show(100);
            $('.content-full').hide(100);
            $('#show_hide_all').attr('class', 'show-all');
        }
    });

    $('.unslider-content-list li').click(function(){
        $(this).children('.content-sub-list').toggle();
    });
});