var noti = document.querySelector('.cart-icon');
var noti2 = document.querySelector('.mobi-cart-noti');

var select = document.querySelector('.cartcntnt');

var button = document.getElementsByClassName('add-button');

var closebtn = document.getElementsByClassName('close');
// mobile js 
// var mobshopcart=document.getElementsByClassName('shop-cart');
// mobshopcart.onclick()=()=>{
//     document.getElementsById('shoppingcart').style.display='block';
// }


var total_price=0;
for(but of button){
    but.addEventListener('click',(e)=>{
        // count=count+1;
        
        var add = Number(noti.getAttribute('data-count')||0);
        noti.setAttribute('data-count',add+1);
        noti2.setAttribute('data-count',add+1);
        noti.classList.add('zero');
        noti2.classList.add('zero');

        
        // copy and paste element 
        var cartsvg = document.querySelector('.cartsvg');
        cartsvg.classList.add('hid');
        var parent = e.target.parentNode;
        var clone = parent.cloneNode(true);
        select.appendChild(clone);
        clone.lastElementChild.innerText = 'Buy-now';
        // console.log('btn is  '+clone.lastElementChild.innerText);

        // price add
        var price_para = document.querySelector('.price-para');
        price_para.style.display='block';
        var price=clone.lastElementChild.previousElementSibling.lastElementChild.innerText;
        console.log('inner price is '+parseInt(price));
        var price_is = document.querySelector('.price-is');
        total_price=total_price+parseInt(price);
        price_is.innerText=total_price;


        // open close
        // var count=0;
        // var firecount=0;
        
        // console.log('total close btn '+closebtn.length);
    
        for(clsbtn of closebtn)
        {
            // count=count+1;
            // console.log('clsbtn for loop'+count);
            clsbtn.onclick=(ev)=>
            {
                // firecount=firecount+1;
                // console.log('fire click count '+firecount);
                // count=count-1;
                var min = Number(noti.getAttribute('data-count'));
                min=min-1;
                console.log('noti value '+ min);
                noti.setAttribute('data-count',min);
                noti2.setAttribute('data-count',min);
                noti.classList.add('zero');
                noti2.classList.add('zero');
        
               //remove item
                var cparent = ev.target.parentNode;
                cparent.remove();
                console.log('removed item');
                if (min<=0){
                    cartsvg.classList.remove('hid');
                    noti.removeAttribute('data-count');
                    noti2.removeAttribute('data-count');
                    noti.classList.remove('zero');
                    noti2.classList.remove('zero');
                    price_para.style.display='none';
                }

                // price subs
                console.log(cparent.nodeName);
                subs_price=cparent.lastElementChild.previousElementSibling.lastElementChild.innerText;
                console.log(subs_price);
                total_price=total_price-parseInt(subs_price);
                price_is.innerText=total_price;
            }
        }
        
    });
}

