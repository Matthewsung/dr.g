$(document).ready(function(){
    let menu_cir = true;
    let menu_cir_2 = true;
    // menu_box 호버시 원형과 햄버거 표시 나옴
    function H_show(){
        $('.menu_box').on('mouseenter',function(){
            if(menu_cir && win_w > 1100){
                $('.menu_txt').addClass('menu_txt_act');
                $('.line_disappear').addClass('line_appear');
                $('.menu_box > .menu_line:nth-child(2)').css({top:"44%"});
                $('.menu_box > .menu_line:nth-child(5)').css({bottom:"44%"});
            }
        })
        $('.menu_box').on('mouseleave',function(){
            if(menu_cir && win_w > 1100){
                $('.menu_txt_act').removeClass('menu_txt_act');
                $('.line_disappear').removeClass('line_appear');
                $('.menu_box > .menu_line:nth-child(2)').css({top:"0"});
                $('.menu_box > .menu_line:nth-child(5)').css({bottom:"0"});
            }
        })    
    }
    // 햄버거 누를때 원형 모양 만듬
    function H_click(){
        
        $('.menu_cir').on('click',function(){
            menu_cir = false;
            if(!menu_cir){
                if(menu_cir_2){
                    $('.menu_box').css({transform:"translate(-50%,-50%) rotate(180deg)"});
                    $('.menu_pan').addClass('menu_pan_act');
                    $('.menu_box > .menu_line:nth-child(2)').css({opacity:"0"});
                    $('.menu_box > .menu_line:nth-child(5)').css({opacity:"0"});
                    $('.menu_box > .menu_line:nth-child(3)').css({transform:"translate(-50%,-50%) rotate(45deg)"});
                    $('.menu_box > .menu_line:nth-child(4)').css({transform:"translate(-50%,-50%) rotate(-45deg)"});
                    menu_cir_2 = false;
                }
                else if(!menu_cir_2){
                    $('.menu_box').css({transform:"translate(-50%,-50%) rotate(0deg)"});
                    $('.menu_pan_act').removeClass('menu_pan_act');
                    $('.menu_box > .menu_line:nth-child(2)').css({opacity:"1"});
                    $('.menu_box > .menu_line:nth-child(5)').css({opacity:"1"});
                    $('.menu_box > .menu_line:nth-child(3)').css({transform:"translate(-50%,-50%) rotate(0deg)"});
                    $('.menu_box > .menu_line:nth-child(4)').css({transform:"translate(-50%,-50%) rotate(0deg)"});
                    menu_cir_2 = true;
                }
                if(menu_cir_2){
                    menu_cir = true;
                }
            }
        })
    }
    // 마우스 오버시  X모양이 돌게
    function mouse_cir(){
        $('.menu_cir').on('mouseenter',function(){
            if($('.menu_pan').hasClass('menu_pan_act')){
                $('.menu_box').css({transform:"translate(-50%,-50%) rotate(180deg)"});
            }
        })
        $('.menu_cir').on('mouseleave',function(){
            if($('.menu_pan').hasClass('menu_pan_act')){
                $('.menu_box').css({transform:"translate(-50%,-50%) rotate(0deg)"});
            }
        })
    }
    let win_w = $(window).outerWidth()+17;
    $(window).resize(function(){
        win_w = $(window).outerWidth()+17;
        // 햄버그버튼 초기로 되돌리기
        if(win_w<1100){
            $('.menu_pan').css({transition:"height 0.5s"})
            $('.menu_txt').addClass('menu_txt_act');
            $('.line_disappear').addClass('line_appear');
            $('.menu_box > .menu_line:nth-child(2)').css({top:"44%"});
            $('.menu_box > .menu_line:nth-child(5)').css({bottom:"44%"});
        }
        else if(win_w > 1100){
            $('.menu_pan').css({transition:"left 0.5s"})
            $('.menu_txt_act').removeClass('menu_txt_act');
            $('.line_disappear').removeClass('line_appear');
            $('.menu_box > .menu_line:nth-child(2)').css({top:"0"});
            $('.menu_box > .menu_line:nth-child(5)').css({bottom:"0"});
        }
        H_show()
    })
    
    //////////////////////////////////////윈도우 resize 이후//////////////////////
    
    // 1100이하시 햄버그버튼 초기로 되돌리기
    if(win_w<1100){
        $('.menu_pan').css({transition:"height 0.5s"})
        $('.menu_txt').addClass('menu_txt_act');
        $('.line_disappear').addClass('line_appear');
        $('.menu_box > .menu_line:nth-child(2)').css({top:"44%"});
        $('.menu_box > .menu_line:nth-child(5)').css({bottom:"44%"});
    }
    else if(win_w > 1100){
        $('.menu_pan').css({transition:"left 0.5s"})
        $('.menu_txt_act').removeClass('menu_txt_act');
        $('.line_disappear').removeClass('line_appear');
        $('.menu_box > .menu_line:nth-child(2)').css({top:"0"});
        $('.menu_box > .menu_line:nth-child(5)').css({bottom:"0"});
    }

    H_show()
    mouse_cir()
    H_click()
    // 메뉴 클릭시 색상변경
    $('.m_title').on('click',function(){
        $('.m_title_act').removeClass('m_title_act');
        $(this).addClass('m_title_act');
        $('.t_menu_box_act').removeClass('t_menu_box_act');
        if($(this).index() == 0){
            $('.t_menu_box').eq(0).addClass('t_menu_box_act');
        }
        else{
            $('.t_menu_box').eq(1).addClass('t_menu_box_act');
        }
    })
    // 탑배너 접혔다 폈다
    $('.t_banner_icon').on('click',function(){
        $('.tob_banner_box').toggleClass('tob_banner_box_act');
        $(this).toggleClass('t_banner_icon_act');
    })
    // footer 버튼 누를시 가장 위로 이동
    $('.f_btn_t').on('click',function(){
        $('html, body').animate({scrollTop:"0"},1000)
    })



})