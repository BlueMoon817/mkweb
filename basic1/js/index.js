const btnTop=document.querySelector('.btn_top');
const board =document.querySelector('.gnb_area .m_board');
const mLst = document.querySelector('.m_lst');
const gnb = document.querySelector('.gnb_area');
btnTop.addEventListener('click',function(){
   window.scrollTo({top:0, behavior:"smooth"})
});
mLst.addEventListener('mouseenter',function(){
    board.classList.add('is_active');
});
gnb.addEventListener('mouseleave',function(){
    board.classList.remove('is_active');
})

const mainSwiper = new Swiper('.main_vis .swiper', {
  loop: true,
    // If we need pagination
  pagination: {
    el: '.pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.main_vis .btn_next',
    prevEl: '.main_vis .btn_prev',
  }
});
const reviewSwiper = new Swiper('.review_section .swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.review_section .btn_next',
    prevEl: '.review_section .btn_prev',
  }
});

