$(document).ready(function(){
/*////////////////////////////////////////////////// 함수 모음 ///////////////////////////////////////////////////*/
// 배너 움직이는 함수
    function b_click (next){
        $('.m_banner').eq((b_index - 1) % b_length).stop().fadeOut();
        $('.m_banner .m_b_txt').eq((b_index - 1) % b_length).removeClass('m_b_txt_act');
        $('.m_banner').eq(next).stop().fadeIn();
        $('.m_banner .m_b_txt').eq(next).addClass('m_b_txt_act');
    }
// 배너 자동 슬라이드 함수
    function banner_auto(){
        clearInterval(b_interval)
        b_interval= setInterval(function(){
            $('.btn_L').trigger('click');
        },timer)
    }
// 베스트 신제품 움직이는 함수
let window_W = $(window).innerWidth();
function Content_move(){
        let b_box_o_L = $('.best .content_box').offset().left;
        let b_box_W = $('.best .content_box').innerWidth() +b_box_o_L
        let n_box_o_L = $('.new .content_box').offset().left;
        let n_box_W = $('.new .content_box').innerWidth() +n_box_o_L
        if(window_W > 1100){
            $('.best').on('mousemove',function(event){
                let m_pos_X = event.clientX;
                $('.best .content_box').css({left: -1 *((b_box_W-window_W) * m_pos_X) / window_W})
            })
            $('.new').on('mousemove',function(event){
                let m_pos_X = event.clientX;
                $('.new .content_box').css({left: -1 *((n_box_W-window_W) * m_pos_X) / window_W})
            })
        }
        else if(window_W < 1100){
            $('.best').on('mousemove',function(event){
                $('.best .content_box').css({left: 0})
            })
            $('.new').on('mousemove',function(event){
                $('.new .content_box').css({left: 0})
            })
        }
    }
    // title 하나씩 올라오는 함수
    function Title_up (box){
        for(let i =0; i < $(box).find('p').length; i++){
            (function(tmp_i){
                setTimeout(function(){
                    $(box).find('p').eq(tmp_i).addClass('title_p_act')
                },200*tmp_i)
            })(i)
        }
        $(box).next('.more').addClass('more_act')
    }
    // content 하나씩 올라오는 함수
    function Content_up(box){
        for(let i=0; i<$(box).length; i++){
            (function(tmp_i){
                setTimeout(function(){
                    $(box).eq(tmp_i).animate({top:0},400)
                },150*tmp_i)
            })(i);
        }
    }
    // 메인 컨텐츠 호버시 나오는 함수
    function Content_show(){
        $('.content_main, .content_main_txt').on('mouseenter',function(){
            if(window_W > 768){
                $('.c_m_sub_1').css({transform: "scale(1) rotate(0deg) translate(210%, -20%)"});
                $('.c_m_sub_2').css({transform: "scale(1) rotate(0deg) translate(228%,30%) "})
                $('.content_sub').css({display:"none"})
            }
        })
        $('.content_main, .content_main_txt').on('mouseleave',function(){
            if(window_W > 768){
                $('.c_m_sub_1').css({transform: "scale(0) rotate(180deg) translate(0) "});
                $('.c_m_sub_2').css({transform: "scale(0) rotate(180deg) translate(0) "})
                $('.content_sub').css({display:"block"})
            }
        })
    }

/*////////////////////////////////////////////////// 함수 모음 끝///////////////////////////////////////////////////*/
    let list="";
    // 배너 사진 넣기
    for(let i=0; i<Img_list[0].length;i++){
        list ="";
        list += '<div class="m_banner">';
        list +=     '<div class="m_b_bg">';
        list +=         '<img src="img/1/'+Img_list[0][i].src+'" alt="배너'+(i+1)+'">';
        list +=     '</div>';
        list +=     '<div class="m_b_txt">';
        list +=         '<img src="img/1/'+Img_list[0][i].src2+'" alt="배너'+(i+1)+' 글귀">';
        list +=     '</div>';
        list += '</div>';
        $('.main_banner_box').append(list);
    }
    // 베스트 사진 넣기
    for(let i=0; i<6; i++){
        list = "";
        list += '<div class="content">';
        list +=     '<a href="detail.html">'
        list +=         '<div class="c_img">';
        list +=             '<img src="img/1/'+Img_list[1][i].src+'" alt="베스트1">';
        list +=         '</div>';
        list +=         '<div class="c_rank">'+(i+1)+'</div>';
        list +=         '<div class="c_price_box">';
        list +=             '<div class="c_name">'+Img_list[1][i].name+'</div>';
        list +=             '<div class="c_price">';
        list +=                 '<span>'+Img_list[1][i].price+'</span><p>'+Img_list[1][i].s_price+'</p>';
        list +=             '</div>';
        list +=             '<div class="c_star"></div>';
        list +=         '</div>';
        list +=     '</a>'
        list += '</div>';
        $('.best .content_box').append(list);
    }
    // 신제품 사진 넣기
    for(let i=0; i<Img_list[2].length; i++){
        list = "";
        list += '<div class="content">';
        list +=     '<a href="detail.html">'
        list +=         '<div class="c_img">';
        list +=             '<img src="img/1/'+Img_list[2][i].src+'" alt="베스트'+(i+1)+'">';
        list +=         '</div>';
        list +=         '<div class=c_new_sale><p class="c_icon c_new">NEW</p><p class="c_icon c_sale">SALE</p></div>'
        list +=         '<div class="c_price_box">';
        list +=             '<div class="c_name">'+Img_list[2][i].name+'</div>';
        list +=             '<div class="c_price">';
        list +=                 '<span>'+Img_list[2][i].price+'</span><p>'+Img_list[2][i].s_price+'</p>';
        list +=             '</div>';
        list +=             '<div class="c_star"></div>';
        list +=         '</div>';
        list +=     '</a>'
        list += '</div>';
        $('.new .content_box').append(list);
    }
    /*////////////////////////////////////////////////// 변수 ///////////////////////////////////////////////////*/
    let b_index = 1;
    let b_length = $('.m_banner').length;
    let timer = 2000;
    let b_interval;
    let b_number;
    let mb_index = 0;

    /*////////////////////////////////////////////////// 변수 끝 ///////////////////////////////////////////////////*/
    
/*////////////////////////////////////////////////// DOM 생성시 실행될 것들 ///////////////////////////////////////////////////*/
    $('.m_banner').eq(0).fadeIn()
    $('.m_banner .m_b_txt').eq(0).addClass('m_b_txt_act');
    $('.b_now').text(b_index);
    $('.b_total').text(b_length);
    // 자동슬라이드 시작
    banner_auto()
    //best / new 움직임
    Content_move()
    // 베스트 제목 나타나기
    Title_up('.best .title')
    // 컨텐츠 호버시 나타나기
    Content_show()
    //mid_banner 계속 지나가게 하는 함수
    setInterval(function(){
        $('.mb').eq(mb_index%$('.mb').length).animate({left:"-100%"},10000, 'linear').animate({left:"100%"},0)
        $('.mb').eq((mb_index + 1)%$('.mb').length).animate({left:"0"},10000, 'linear')
        mb_index++
    })
$(window).resize(function(){
    window_W = $(window).innerWidth();

    Content_move()
    Content_show()
})
/*////////////////////////////////////////////////// DOM 생성시 실행될 것들 끝 //////////////////////////////////이벤트 관련/////////////////*/
    // 배너 클릭시 움직임
    $(document).on('click','.btn_L',function(){
        b_click(b_index % b_length);
        b_index++
        b_number = Math.abs(b_index % b_length);
        b_number == 0?$('.b_now').text(b_length):$('.b_now').text(b_number);
    })
    $(document).on('click','.btn_R',function(){
        b_click((b_index-2) % b_length);
        b_index--
        b_number = Math.abs(b_index % b_length);
        b_number == 0?$('.b_now').text(b_length):$('.b_now').text(b_number);
    })
    // 배너에 들어가면 자동 슬라이드 멈춤
    $('.m_banner, .m_banner_icon').on('mouseenter',function(){
        clearInterval(b_interval)
    })
    $('.m_banner, .m_banner_icon').on('mouseleave',function(){
        banner_auto()
    })
    // 화살표를 누르면  c_sub이 이동하면서 화살표는 흐려짐
    $('.sub_arr').on('click',function(){
        let timer = 300
        if($(this).index() == 0){
            $('.sub_arr_act').removeClass('sub_arr_act')
            $('.c_sub_L').animate({left:"0"},timer)
            $('.c_sub_R').animate({left:"100%"},timer)
            $('.sub_arr_L').addClass('sub_arr_act')
        }
        else if($(this).index() == 1){
            $('.sub_arr_act').removeClass('sub_arr_act')
            $('.c_sub_L').animate({left:"-100%"},timer)
            $('.c_sub_R').animate({left:"0"},timer)
            $('.sub_arr_R').addClass('sub_arr_act')
        }
    })
    // 스크롤하면 나오는 이벤트
    $(window).scroll(function(){
        let b_o_top = $('.main_banner_box').offset().top; 
        let b_height = $('.m_banner').height();
        let show_best = $('.main_banner_box').offset().top + ($('.m_banner').height() * 0.1);
        let best_o_top = $('.best .title_box').offset().top ;
        let new_o_top = $('.new .title_box').offset().top ;
        let show_new = new_o_top - ($('.best').height()*0.8);
        let show_contents = new_o_top + ($('.new').height()*0.5);
        // best 아이템 순서대로 올라옴
        if($(window).scrollTop() >= show_best){
            Content_up('.best .content')
        }
        // new title 올라오기
        if($(window).scrollTop() >= best_o_top){
            Title_up('.new .title')
        }
        // new의 아이템 순서대로 올라옴
        if($(window).scrollTop() >= show_new){
            Content_up('.new .content');
        }
        // content title 올라오기
        if($(window).scrollTop() >= show_contents){
            Title_up('.contents .title')
        }
        // 컨텐츠 양 옆에서 나오기
        let show_content_box = new_o_top +($('.new').height()*0.7);
        if($(window).scrollTop() >= show_content_box){
            $('.content_main_box').addClass('content_show_act')
            $('.content_sub').addClass('content_show_act')
        }
        // 공지사항 title 올라오기
        let show_notice = $('.contents .title').offset().top + ($('.contents .title').height() * 0.9);
        if($(window).scrollTop() >= show_notice){
            Title_up('.notice .title')
        }
    })
/////////////////////지금 만드는중////////////////////////////

















})