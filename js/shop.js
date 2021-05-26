$(document).ready(function(){
    let list="";
    for(let i =0; i < Img_list[1].length; i++){
        list="";
        list += '<div class="item_box">'
        list +=     '<a href="detail.html">'
        list +=         '<div class="item_line">'
        list +=             '<p></p>'
        list +=             '<p></p>'
        list +=             '<p></p>'
        list +=             '<p></p>'
        list +=         '</div>'
        list +=         '<div class="item_img_box">'
        list +=             '<img src="img/1/'+Img_list[1][i].src+'" alt="베스트상품1">'
        list +=         '</div>'
        list +=         '<div class="item_sale_icon"></div>'
        list +=         '<div class="item_star"></div>'
        list +=         '<div class="item_txt">'
        list +=             '<div class="item_name">'+Img_list[1][i].name+'</div>'
        list +=             '<div class="o_price">'+Img_list[1][i].price+'원</div>'
        list +=             '<div class="real_price">'
        list +=                 '<div class="sale_rate">'+Img_list[1][i].sale+'%</div>'
        list +=                 '<div class="s_price">'+Img_list[1][i].s_price+'원</div>'
        list +=             '</div>'
        list +=         '</div>'
        list +=     '</a>'
        list += '</div>'
        
        $('.best_item_box').append(list)
    // sale안하면 sale박스와 할인율 박스 제거 
        if(Img_list[1][i].price =="" && Img_list[1][i].sale == ""){
            $('.item_box').eq(i).find('.o_price').remove()
            $('.item_box').eq(i).find('.sale_rate').remove()
            $('.item_box').eq(i).find('.item_sale_icon').remove()
        }
    }
    // 호버하면 선 그어짐
        // 높이를 잡아줌
    setTimeout(function(){
        let line_h = $('.item_box').outerHeight();
        $('.item_line').css({height:line_h})
    },300)
    $('.item_box').on('mouseenter',function(){
        let timer = 300;
        $(this).find('.item_line p:nth-of-type(1)').stop().animate({left:"0"},timer,'linear')
        $(this).find('.item_line p:nth-of-type(2)').stop().animate({top:"0"},timer,'linear')
        $(this).find('.item_line p:nth-of-type(3)').stop().animate({right:"0"},timer,'linear')
        $(this).find('.item_line p:nth-of-type(4)').stop().animate({bottom:"0"},timer,'linear')
        $(this).addClass('item_box_act')
    })
    $('.item_box').on('mouseout',function(){
        let timer = 300;
        $(this).find('.item_line p:nth-of-type(1)').stop().animate({left:"-100%"},timer,'linear')
        $(this).find('.item_line p:nth-of-type(2)').stop().animate({top:"-100%"},timer,'linear')
        $(this).find('.item_line p:nth-of-type(3)').stop().animate({right:"-100%"},timer,'linear')
        $(this).find('.item_line p:nth-of-type(4)').stop().animate({bottom:"-100%"},timer,'linear')
        $(this).removeClass('item_box_act')
    })




    $(window).scroll(function(){
        let win_scroll = $(window).scrollTop(); 
        let win_h =$(window).height();
        let doc_h = $('main').height() + 300;
        let pos_Y = (win_h * win_scroll) / doc_h;
        if(win_scroll > $('.weekly_best').offset().top){
            if($(window).width() > 800){
                $('.follow_icon').animate({
                    right: "-2%",
                },500)
                $('.follow_icon').css({
                    top:pos_Y+"px"
                })
            }
            else if($(window).width() < 800){
                $('.follow_icon').animate({right: "0%"},500)
                $('.follow_icon').css({
                    transform: "rotate(0deg)",
                    right: "0",
                    top: "auto",
                    bottom: "0"})
            }
        }

    })



})