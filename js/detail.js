$(document).ready(function(){

    //공유버튼 나오고 말고
$('.share_btn').on('click',function(){
    $('.url_btn').toggleClass('sharebtn_act');
    $('.facebook_btn').toggleClass('sharebtn_act')
    $(this).toggleClass('share_btn_color')
})

// 배송관련 내용 펼치고 닫기
$('.n_t_arr').on('click',function(){
    $(this).toggleClass('n_t_arr_act');
    $('.n_delivery').slideToggle()
})

// 작은 사진에 마우스 들어가면 큰 사진 변경
$('.sm_img').on('mouseenter',function(){
    $('.show_img_act').removeClass('show_img_act')
    console.log($(this).index())
    $('.show_img').eq($(this).index()).addClass('show_img_act')
})

// 수량 클릭시 증가 감소
$('.btm_qty').on('click',function(){
    if($(this).index() == 2){
        $('.item_qty').val(Number($('.item_qty').val()) + 1)
    }
    else if($(this).index() == 0){
        if($('.item_qty').val() >= 2){
            $('.item_qty').val(Number($('.item_qty').val()) - 1)
        }
        else{alert("최소 주문 수량입니다")}
    }
    // 총 가격 보여주기
    let t_price = $('.item_qty').val() * Img_list[1][0].s_price
    $('.total_price').text(t_price+"원")
})

// sub_menu 누르면 해당 위치로 이동
$('.content_sub_menu li').on('click',function(){
    console.log($(this).index())
    let s_o_top = $('section').eq($(this).index()+2).offset().top;
    console.log(s_o_top)
    $('html, body').animate({scrollTop:s_o_top },1000)
})

// r_btn 클릭하면 색 칠해지고 밑의 화면 변경

$('.r_btn').on('click',function(){
    $('.r_btn p').removeClass('r_btn_act')
    $(this).find('p').addClass('r_btn_act')
    $('.review_content').removeClass('review_content_act')
    $('.review_content').eq($(this).index()).addClass('review_content_act')
})






})