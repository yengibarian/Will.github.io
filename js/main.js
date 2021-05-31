$(document).ready(function(){

    let menuOpen = false;
    $(document).on('click','.menu_btn',function(){
        if(!menuOpen){
            $('.menu_btn').addClass('open');
            $('.menu_open').show();
            menuOpen = true;
        }else{
            $('.menu_btn').removeClass('open');
            $('.menu_open').hide();
            menuOpen = false;
        }
    
    })

    let arr = [
        {
            img:"img/img_sl1.png",
            number_one:3,
            one_text:"небоскреба",
            number_two:'52-56',
            two_text:"этажей",
            number_three:1906,
            three_text:"квартир",
         },
         {
             img:"img/img_sl2.png",
             number_one:2,
             one_text:"заказника",
             number_two:6,
             two_text:"парков",
             number_three:4,
             three_text:"пруда",
          },
          {
             img:"img/img_sl3.png",
             number_one:4,
             one_text:"км до ТТК",
             number_two:6,
             two_text:"км до МКАДа",
             number_three:9,
             three_text:"км до центра",
          },
        ]
let i = 0;
        function array(){
        i+= 1;
        if(i === 3){
            i = -1;
        }else{
            $('#bg_img').attr('src',arr[i].img);
            $('.main_info_text_number:nth-child(1)').html(arr[i].number_one  +'<span>'+ arr[i].one_text +'</span>');
            $('.main_info_text_number:nth-child(2)').html(arr[i].number_two  +'<span>'+ arr[i].two_text +'</span>')
            $('.main_info_text_number:nth-child(3)').html(arr[i].number_three+'<span>'+ arr[i].three_text +'</span>')
        }
        
        
            
        }

        setInterval(array,3000)

        $(document).on('click','.phone',function(e){
            e.preventDefault();
            $('#phone').show();
        })

        $(document).on('click','.close',function(e){
            $('#phone').hide();
        })
       



})