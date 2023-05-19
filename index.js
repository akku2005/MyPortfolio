const p_btns = document.querySelector('.p-btns');
const p_btn = document.querySelectorAll('.p-btn');
const p_img_elem = document.querySelectorAll('.img-overlay');

p_btns.addEventListener('click',(e)=>{
    const p_btn_clicked = e.target;
    
    p_btn.forEach((curElem)=>curElem.classList.remove("p-btn-active"));
    p_btn_clicked.classList.add("p-btn-active");

    const btn_num = p_btn_clicked.dataset.btnNum ;
    // console.log(btn_num);


    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((curElem)=>curElem.classList.add('p-image-not-active'));

    img_active.forEach((curElem) => curElem.classList.remove('p-image-not-active'));


});
var swiper = new Swiper(".mySwiper", {
    slidesPerView:3,
    spaceBetween:30,
    autoplay:{
      delay:2500,
      disableOnInteraction:false,
    },
      pagination: {
        el: ".swiper-pagination",
        clickable:true,
      },
    });
  
// scrooll to top button

const footerElem = document.querySelectorAll(".section-footer")
const scroolElement = document.createElement("div");
scroolElement.classList.add("scrollTop-style");
scroolElement.innerHTML=`<ion-icon name="arrow-up-outline" class="scrll-top></ion-icon>`;
footerElem.after(scroolElement); 


//latest work
const counterNum = document.querySelectorAll('.counter-numbers');
const speed = 200;
counterNum.forEach((curElem)=>{
  const updateNumber=()=>{
    const targetNumber =parseInt( curElem.dataset.numbers);
    const initialNum = parseInt(curElem.innerText);

    const incrementNumber = Math.trunc(targetNumber/speed);
    if(initialNum<targetNumber){
      curElem.innerText=initialNum+incrementNumber;
      setTimeout(updateNumber,10);
    }
  };
  updateNumber();
});