const fireEls = document.querySelectorAll('.js-fire');
const bodyEl = document.querySelector('.js-wrap-cake');
const candleEls = document.querySelectorAll('.js-candle');
// const fireElone = document.querySelector('.js-fire');


// THổi xong châm nến thổi tiếp

// fireEls.forEach((fireEl) => {
//     bodyEl.addEventListener("click", function () {
//         fireEl.classList.add('active');
//     });
// });

// candleEls.forEach((candle) => {

//     candle.addEventListener("click", function (e) {
//         document.querySelector('.js-fire.active').classList.remove('active');
//         e.stopPropagation();
//     });
// });


// Châm nến rồi thổi

// candleEls.forEach((candleEl) => {
//     candleEl.addEventListener("click", function (e) {
//         fireEls.forEach((fireEl) => {
//             fireEl.classList.add('active');
//         })
//         e.stopPropagation();
//     })
// });

fireEls.forEach((fireEl) => {
    bodyEl.addEventListener("click", function () {
        fireEl.classList.remove('active');
    });
});

candleEls.forEach((candle, index) => {
    var fireup = fireEls[index];
    candle.addEventListener("click", function (e) {
        fireup.classList.add('active');
        e.stopPropagation();
    })
});