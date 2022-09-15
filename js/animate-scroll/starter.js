function log(value){
    console.log(value)
}
document.addEventListener('DOMContentLoaded',function(e){
    console.log(e.target)
    const images = document.querySelectorAll('.container img');
    [...images].forEach(function(item){
        const itemOffsetTop = item.offsetTop;
        log(itemOffsetTop)
    })
    window.addEventListener('scroll',function(){
        const windowScroll = window.pageYOffset;
        [...images].forEach(function(item){
            const itemOffsetTop = item.offsetTop;
            if(windowScroll > itemOffsetTop - item.offsetHeight){
                item.classList.add('active')
            }else{
                item.classList.remove('active')
            }
        })
    })

})