
let img_box= document.getElementById("image_box")
let img=document.getElementById("QR_img")
let input_txt=document.getElementById("text_input")
let cantaniar=document.getElementById("cantainar")

function eventclick(){
    img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input_txt.value;
    img.classList.add("img");
}
