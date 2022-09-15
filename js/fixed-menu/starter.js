// function debounceFn(func, wait, immediate) {
//     let timeout
//     return function () {
//         let context = this,
//             args = arguments
//         let later = function () {
//             timeout = null
//             if (!immediate) func.apply(context, args)
//         }
//         let callNow = immediate && !timeout
//         clearTimeout(timeout)
//         timeout = setTimeout(later, wait)
//         if (callNow) func.apply(context, args)
//     }
// }

// window.addEventListener(
//     "scroll",
//     debounceFn(function (e) {
//         console.log("scroll");
//     }, 500)
// );

// function log(value) {
//     console.log(value)
// }
// const header = document.querySelector('.header');
// const headerHeight = header.offsetHeight;
// log(headerHeight)
// // log(header)

// document.addEventListener('DOMContentLoaded', debounceFn(function (e) {
//     window.addEventListener('scroll', function (e) {
//         const scrollY = window.pageYOffset;
//         if (scrollY > headerHeight) {
//             header.classList.add('is-fixed');
//             document.body.paddingTop = `${headerHeight}px`
//         } else {
//             header.classList.remove('is-fixed');
//             document.body.paddingTop = `0px`
//         }
//     })
// }, 1000) )
// // Chú ý: header && header.classList.add('active');
// // if(header){ header.classList.add('active') }


function log(value){
    console.log(value)
}
log(document.documentElement.scrollTop)
const progress = document.querySelector('.progress');
log(progress)
window.addEventListener('scroll', function (e) {
    const scrollTop = window.pageYOffset;
    const height = document.documentElement.scrollHeight  - document.documentElement.clientHeight;
    const width = (scrollTop/height) * 100;
    log(width)
    progress.style.width = `${width}%`
})