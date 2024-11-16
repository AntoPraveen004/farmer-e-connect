window.addEventListener('scroll',function(){
        console.log('func run');
        let header = document.querySelector('#rowbar');
        let windowPosition = window.scrollY > 0;
        header.classList.toggle('scrolling-active',windowPosition);
});
    
    
