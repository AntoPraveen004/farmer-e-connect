var noti = document.querySelector('.cart-icon');
// var noti2 = document.querySelector('.mobi-cart-noti');

var select = document.querySelector('.select');

var button = document.getElementsByClassName('add-button');

var closebtn = document.getElementsByClassName('close');


var total_price=0;
for(but of button){
    but.addEventListener('click',(e)=>{
        // count=count+1;
        
        var add = Number(noti.getAttribute('data-count')||0);
        noti.setAttribute('data-count',add+1);
        // noti2.setAttribute('data-count',add+1);
        noti.classList.add('zero');
        // noti2.classList.add('zero');

        
        // copy and paste element 
        var parent = e.target.parentNode.parentNode;
        var clone = parent.cloneNode(true);
        select.appendChild(clone);
        if(clone){
            noti.onclick=()=>{
                console.log("noti click");
                select.classList.toggle('display');
                
            }
        }
        // clone.lastElementChild.innerText = 'Buy-now';
        // console.log('btn is  '+clone.lastElementChild.innerText);

        // price add
        var price_para = document.querySelector('.totalp');
        price_para.style.display='block';
        console.log("price add section");
        var pricestr=clone.lastElementChild.lastElementChild.previousElementSibling.innerText;
        console.log('inner price is '+pricestr);
        var price_is = document.querySelector('.tp');
        total_price=total_price+parseInt(pricestr);
        console.log('totap price '+total_price);
        price_is.innerText=total_price;


        // open close
        var count=0;
        var firecount=0;
        
        console.log('total close btn '+closebtn.length);
    
        for(clsbtn of closebtn)
        {
          
            clsbtn.onclick=(ev)=>
            {
                
                var min = Number(noti.getAttribute('data-count'));
                min=min-1;
                console.log('noti value '+ min);
                noti.setAttribute('data-count',min);
                // noti2.setAttribute('data-count',min);
                noti.classList.add('zero');
                // noti2.classList.add('zero');
        
            //    remove item
                var cparent = ev.target.parentNode;
                cparent.remove();
                console.log('removed item');
                if (min<=0){
                    select.classList.toggle('display');
                    
                    // cartsvg.classList.remove('hid');
                    noti.removeAttribute('data-count');
                    // noti2.removeAttribute('data-count');
                    noti.classList.remove('zero');
                    // noti2.classList.remove('zero');
                    price_para.style.display='none';
                }

                // price subs
                console.log(cparent.nodeName);
                subs_price=cparent.lastElementChild.lastElementChild.previousElementSibling.innerText;
                console.log(subs_price);
                total_price=total_price-parseInt(subs_price);
                price_is.innerText=total_price;
            }
        }
        
    });
}

