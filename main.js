const tun_kun_btn = document.querySelector(".tun_kun_btn");
const body = document.querySelector("body");
const download_btn=document.querySelector(".download-btn")
const modal=document.querySelector(".modal")

tun_kun_btn.addEventListener("click", () => {
  body.classList.toggle("active");
});
download_btn.addEventListener("click",()=>{
  modal.classList.add("active")
  
})