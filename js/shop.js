$(document).ready(function(){
    let list="";
    for(let i =0; i < Img_list[1].length; i++){
        list="";
        list += '<div class="item_box">'
        list +=     '<div class="item_img_box">'
        list +=         '<img src="img/1/'+Img_list[1][i].src+'" alt="베스트상품1">'
        list +=     '</div>'
        list +=     '<div class="item_sale_icon"></div>'
        list +=     '<div class="item_star"></div>'
        list +=     '<div class="item_txt">'
        list +=         '<div class="item_name">'+Img_list[1][i].name+'</div>'
        list +=         '<div class="o_price">'+Img_list[1][i].price+'원</div>'
        list +=         '<div class="real_price">'
        list +=             '<div class="sale_rate">'+Img_list[1][i].sale+'%</div>'
        list +=             '<div class="s_price">'+Img_list[1][i].s_price+'원</div>'
        list +=         '</div>'
        list +=     '</div>'
        list += '</div>'
        
        $('.best_item_box').append(list)
    // sale안하면 sale박스와 할인율 박스 제거 
        if(Img_list[1][i].price =="" && Img_list[1][i].sale == ""){
            $('.item_box').eq(i).find('.o_price').remove()
            $('.item_box').eq(i).find('.sale_rate').remove()
            $('.item_box').eq(i).find('.item_sale_icon').remove()
        }
    }

    $(window).scroll(function(){

    })



})