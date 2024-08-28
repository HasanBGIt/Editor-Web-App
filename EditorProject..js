let upload = document.getElementById("upload")
let download = document.getElementById("download")
let img = document.getElementById("img")
let reset = document.getElementById("reset")
let imgbox = document.getElementById("imgbox")

let saturate = document.getElementById("saturate")
let contrast = document.getElementById("contrast")
let brightness = document.getElementById("brightness")
let sepia = document.getElementById("sepia")
let grayscale = document.getElementById("grayscale")
let blurr = document.getElementById("blur")
let rotate = document.getElementById("hue-rotate")

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');


function resetvalue(){
    img.style.filter = "none";
    saturate.value = "100";
    contrast.value = "100";
    brightness.value = "100";
    sepia.value = "0";
    grayscale.value = "0";
    blurr.value = "0";
    rotate.value = "0";
}




download.onclick = function(){
    download.href = canvas.toDataURL('image/jpg');
}

reset.onclick = function(){
    
    
    resetvalue()
}
console.log(download);
window.onload = function(){
    download.style.display = "none";
    reset.style.display ='none';
    imgbox.style.display ='none';
}

upload.onchange = function(){
    resetvalue()
    download.style.display = "block";
    reset.style.display ='block';
    imgbox.style.display ='block';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function(){
        
        img.src = file.result;
    }
    img.onload = function(){
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        img.style.display = "none";
    }
  
}

let filters = document.querySelectorAll("ul li input");
filters.forEach(filter => {
    filter.addEventListener("input", function(){
        ctx.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blurr.value}px)
        hue-rotate(${rotate.value}deg)
        `;
        ctx.drawImage(img,0,0,canvas.width,canvas.height);

    })
})