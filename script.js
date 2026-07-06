const PASSWORD = "dearest Tannu priya";

// Password
function checkPassword() {
    const pass = document.getElementById("password").value;

    if (pass === PASSWORD) {
        document.getElementById("login").style.display = "none";
        document.getElementById("website").style.display = "block";
    } else {
        document.getElementById("error").innerText = "❌ Incorrect password";
    }
}

// Together Since
const startDate = new Date("2026-01-16T00:00:00");

function updateCounter() {
    const now = new Date();

    let diff = now - startDate;

    if (diff < 0) {
        document.getElementById("counter").innerHTML =
            "💕 Together Since 16 January 2026";
        return;
    }

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((diff / (1000 * 60)) % 60);
    let seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("counter").innerHTML =
        `💕 Together for ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

setInterval(updateCounter, 1000);
updateCounter();


// Photo Upload

const upload = document.getElementById("photoUpload");

if(upload){

upload.addEventListener("change",function(){

const gallery=document.getElementById("gallery");

gallery.innerHTML="";

Array.from(this.files).forEach(file=>{

const reader=new FileReader();

reader.onload=function(e){

const img=document.createElement("img");

img.src=e.target.result;

gallery.appendChild(img);

}

reader.readAsDataURL(file);

})

})

}


// Music Upload

const music=document.getElementById("musicUpload");

if(music){

music.addEventListener("change",function(){

const audio=document.getElementById("player");

audio.src=URL.createObjectURL(this.files[0]);

audio.play();

})

}


// Floating Hearts

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💗";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(6+Math.random()*6)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},12000);

}

setInterval(createHeart,400);
const message = `My Dearest Tannu Priya ❤️,

Every heartbeat of mine whispers your name.

No matter how many miles separate us,
my heart always finds its way back to you.

You are my happiness,
my peace,
my biggest blessing.

I love you endlessly.

Forever Yours,
❤️ Himanshu ❤️`;

let i = 0;

function typeLetter() {

const box = document.getElementById("typing");

if (!box) return;

if (i < message.length) {

box.innerHTML += message.charAt(i);

i++;

setTimeout(typeLetter,45);

}

}
