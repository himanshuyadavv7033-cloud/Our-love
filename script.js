const PASSWORD = "dearest Tannu priya";

// Password
function checkPassword() {
    const pass = document.getElementById("password").value;

    if (pass === PASSWORD) {

        document.getElementById("login").style.display = "none";
        document.getElementById("welcome").style.display = "flex";

        updateMonthMessage();

        const player = document.getElementById("player");
        if (player) {
            player.play().catch(() => {});
        }

        setTimeout(() => {
            document.getElementById("welcome").style.display = "none";
            document.getElementById("website").style.display = "block";
            typeLetter();
        }, 4000);

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



const photos = [
  "Images/IMG_20260413_190830_627.jpg",
  "Images/IMG_20260702_154955.jpg",
  "Images/IMG_20260702_171919.jpg",
  "Images/IMG_20260706_225248.jpg"
];

const gallery = document.getElementById("gallery");

if (gallery) {
    gallery.innerHTML = "";

    photos.forEach(photo => {
        const img = document.createElement("img");
        img.src = photo;
        img.className = "photo";
        gallery.appendChild(img);
    });
}   // 

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

Dearest tannu.. 💗
Tnne mai meri radha likh du mnne mai Ghanshyam likhunga... jee likhne jo baith gya mai to paaka mai kitab likhunga... 🪶
So let's start 😁....
Shuru karte h shuru se 🙃. 
When I saw u at first time on 16th Jan 2026 . I think how someone so cute 😊.  firstly u sat on my frnd Himanshu's bench then u came on mine bench  at that moment my happiness is next level and that's day the paper of maths and u know how was mine maths 😁 then what I want to impress u 🤫 so I solve the paper immediately and then I showed u . After that day I was eager for the next paper and curious for talking with u. But whenever I tried to talk to you, I don't know why my heartbeat🫀 would become so fast . For the first time this thing happening to me 🙃 . 
After that on 18th the examination of english on that day we talk a little bit 🤏 but  At the same time, I was also worried that I had only a few days to talk to you. 
Then the paper of IT  and that day we have only half an hour and that's is and this paper went wrost than all papers 😶. 
After that the paper 📜  of science and that's day  and I had just studied chemistry so I didn't do that well but I had a lot of fun 😊. We  took Himanshu's paper and wrote the entire physics 🥲.
 After that the paper of Hindi and Sanskrit and that's day I cannot talk to uu bcoz  you writing ✍️ continuously till end and  after the ending of examination uu used to disappear like a magician  and my eyes 👀 kept searching for uu 🔍 Now I have only one day to spend sometime with uu bcoz now that's is tha last paper. 
The paper of social science And I had come thinking that today I will definitely ask for your Insta ID, but I could not ask for it 🤦Whenever I tried to speak, I did not know what would happen and I could not say anything 😟. 
Then  I think I would ask after the exam was over but after that you went to talk to all your friends and how could I speak among the girls.Then I left the school with full of sadness 😟 . 

But I will never forget those six days I spent with you. 🤫

 then I thought uu said that you would come on Republic Day 🙃. I was going to the village, but I did not go because I had to meet you 🥲. I told Aditi to talk to uu and say about me that I like uu and ask for urr insta  ID. Aditi did not recognize you bcoz see didn't see uu before , so she told Mona Priya to find uu but she didn't say anything about me to mona Priya 👍. After a lot of searching, you were not found. Then we came to know that you did not come to school. Again with full of sadness and a sad heart 💔 I go to my home .  

Abb mai irritate ho gya hun English me likhte likhte🥴yaha se hindi me continue karta hun 👍

Uske baad aditi ne mujhe tumahra id diya fir maine tumhe follow Kiya ..  pehle mai chahta tha ki kuch din tumahre sath as a frnd baat karunga uske baad purpose karunga 🤔  fir maine socha kahi mujhe pehele koi aur kar dega to bas mai frnd hi reh jaunga 🥲.  Fir kya tha maine apne dil ki baat bol di tumhe aur uske baad jo tumahra nakhra suru hua uff 🤧 tm manne ko taiyaar hi nhi they . Aur mai haar mannne ko taiyaar nhi tha 🥲 .. 

Uske baad to tumhe pata hi h kitne masadaq ke baad tm accept kiye .. lekin bahot tadpaye aap maidam jeee .. 🥺

Aakhir me aap maan hi Gaye 😊 . 

Jis din Mai aapse mil kar aaya uss din raat ko tm ekdma alag tarike se baat kr rhe they 🫣 matlab bahot acche tarah se .. pehli baar tm mujh se usi raat itne pyar se baat kiye .. mai to khush ho gyaa  ekdam 🤫🤘 
_______________________________________________
kabhi labj bhul jauu kabhi baat bhul jauu tujhe iss qadar chhau ki jaat bhul jaau .. 😵‍💫
 uthh kar jo tere paas se  kabhi chal du to jaate hue khud ko tere pass bhul jauu ..🧭 
Kabhi labh bhul jaau kabhi jaati bhul jaau..🙊
_______________________________________________
Tu bilkul chand ki tarah h .noor bhi .. gurur bhi ..  durr bhi .. 💗   
 

               🙊    Love uu maidam jee 💗


--_------_-------_---------_-------_--------_----------_-----------_-------

Yaha se fir se continue karte h ..  to strt karte h maidam jeee 😁. 
 Pehli bar hm 7th March ko milkar baat kiye .  Exam ke baad .. mount litera ke campus me .  🙃Mai bol rha tha aaj aate h aapke idhar aur aap bas mana kar rhe they..😁 fir last me aap sad ho kar bolne na aane ko .. fir mai na aaya aapke idhar ..fir mai ghar jaane tak pura raste aapke baare me soch rha tha aur blush kar rha tha 🫣🤭.


Fir 5 din bad . 12 March ko aapse Milne gye .. pehle to laga bina mile hi Jana parega .  Aap nahi koi message kar rhe they aur kahi dikh bhi na rhe they .  Pata nhi pure icon ke kitne chakar lagaye they uss din .. phir kitna der intezaar karne ke baad mai aur mera dost thak kar upper garden me jaa kar baith gye .. phir aap message kiye ..😊 aapki dost ne dhoka de diya tha 😥 wo aayi hi nhi to aap bhi na aaye .  .. lekin fir aap milne aaye 💗🫶. wo kuch kharidne ke bahane se milne aaye they .. 😁. Pehele to lag rha tha Bina mile jaana parega . Lekin Aapse milne ke baad ekdam khush ho gya 😁🤟. 


Fir 1 mahine bad 12 April ho hm mile they .. uss din aap mere liye chips laaye they .. 😋.. bahot tasty tha . Hm aur mera dost dono milkar raaste me hi pura kha gye .. 😁.  Thanks a lot maidam jee . Aapne mere liye itna efforts kiya.   🫀♾️.


Uske baad aap may , June me aap milne aaye hi nhi .  Jab bhi Milne ki bolta tha aap bolte they neet baad milungii .  😔. 


Fir  4 july ko hm mile 😊.. aap 9 baje aane ko bole they .. mai 8 :20 me hi pahoch gya tha .. soche kahi late na ho jaye .  Subah subah uth kar fresh ho kar  naha kar ready ho gye .. 😁 sab puchne lage ready ho kar kaha Jaa rhe ho . Shilpi aur shivani ko bata diye they aapse milne jaa rhe  .. mummy ko bole aate h ghum kar .  Barimummy puchi to bol diye aa rhe court se .. kuch kaam h .. aur aise sabko jhuth bol kar 8 :20 tak bb ganj pahoch gye they .. uske baad itna slowly time nikal rha tha lag rha tha 40 min nhi 4 ghante baaki h abhi 9 bajne me 🙃. Aapse milne ki itni jaldi thi 😁Soch rhe they kab 9 bajega aur aapse milenge 😁✨. . 9 baja phir. Bhi aap na dikhe .  Meri aankhein 👀 charo taraf bas aapko dhund rahi thi .. 🙂   fir 9 : 10 me aap dikhe .. 🤟. Meri pyari maidam jee 💌.. uske baad jo time itna fastly beeta 😥 laga bas kuch palo me hi aap chale gye .. lekin sacchi sukoon mila aapko dekh kar . Aapse baate kar ke .. ✨🫶 .. kash kabhi aapke sath baithkar  ghanto bhar baate karte .. 👀✨. .  aapke sath ghumte .. 🧿
Thanks a lot  maidam jee .. id card Dene ke liye 🧿✨👀. Mai to bas aapki id card ko dekhta rehta hu .. 👀😁🫣.


Maidam jee mera na abb bilkul bhi yha se jaane ka man na kar rha .. 😥. Yahi soch kar man na lagta ki abb chale jayenge .  Lekin bubbu mai to aapke dil me hu na .. 🫀. Sambhal kar rakhiyega apne yadav jii ko .. 🫶. Bahot Miss karunga aapko 😥.

_____________🫀meri pyari bubbu 🫶_____________


Maidam jee aapse milkar jo sukoon milta h na kya bataye .. 👀🥂. Maidam jee mai bas aapse milne ka jid karta rehta hu .. ye na sochta kabhi koi dekh lega to kya hoga .. iske liye sorry 😔..!   
Lekin pata nhi mujhe bas aapse milne ka itna man karta h mai khud ko rok na paata 👀.. aur pata nhi jaane ke baad fir kab aaunga aur kab milunga aapse 😔. 
Jab bhi aapse milne jaate h aane ka man hi na karta .. bas wahi khade hokar sochte rehte h .  Kaash firse aap aa jaoo 🙃.. 
  

Kuch din me 16 july aane wala h aur phir hmme mile hue 6 months complete ho jayenge 🤟🥂🥰..and after more 6 months aapka birthday 🎈 🎂 and 1 year also completed.. 😁.yeeee 🤟



Mai jab bhi mangunga tmse tumahra waqt mangunga✨ ...  Kab kaha kaise ho iska jikr mangunga 👀 ...waqt -bewaqt call karne ka haq mangunga  ..bin baat ke mere ladne per tumahra sabr mangunga 😊 ... Alsayi- soi si tumhari tasveer mangunga 🫶.. mai jab bhi mangunga tumhe tumse thora aur mangunga ✨🫀 🧿


Love uuu bubbu 🫶 🤫.. mine dearest maidam jee 🫀💗..  meri cutie 🥰.. princess . Mine peace 😊..

---------------------------_-----------------_---------------------------------

Today's 16th July 🙃... So let's start ✍️

Pata h maidam. Jee .  Aapke prati mera pyar na lagta h mujhe writer ✍️. Bana dega ..  phirse aaj man kar rha aap pe kuch likhne ka ..  😁 .. phir maidam jee bolegi itna likhte kiu ho .. 🤫

   
So maidam jee aaj date h 16th July .. aur hmme mile hue 6 months complete ho gyee ..  🥰🫶..
We have completed a lovely journey of 6 months together with joy 😊,love 💕, caring each other 🫶, and a lot of madness 😁, aur hmne pyar ke sath sath jhagde bhi bahot kiye h .. 🤫..  

Aaj kal na meri maidam jee mere pe bahot sak karne lagi h .  Unko lagta h unka 👶 bahar aa gya h bade sehro me to koi dusri mil jayegi .. 🤦.. maidam jee dav me ladkiyo ki Kami thi kya .. mil jaana aur pyar hona dono me bahot fark hota h .. mujhe aapse pyar h .. aur kisi se jab saccha wla pyar hota h na .to kisi aur ke baare me sochne me bhi lagta h ki aap usse cheat kar rhe ho .. 🫥.. maidam jee ek baar phir se kehta hu .. me only yours 👶💌.. mai bas aapka hu .. 🫀. Aur haa tussi ka matlab hota h tm .. ye koi naam nhi h samjheee 🔪. Maine bola tha tussi na jaoo na .. tm na jaoo .. kuch bhi sochti rehti ho 🤦.. aur ye ( kuch kuch hota h ) movie ka dialogue h ... 


Bubbu mai agar ek dost bhi banunga na to aapse puch kar banunga .. aapki marzi ke bina ek dost bhi na banaunga .. aap pyar ho mera  🫶 samjhee ..💕

Kya aisa nhi ho sakta ki hm tumse tumko maange..🤫 aur tm kaho apni chije maangi nhi jaati ..🤔.  Ho sakta h kya maidam jeee .. ? 

Aata nhi tha hmme ikarar karna 🥴.. n jaane kaise sikh hm pyar karna.🫶 ek pal bhi na rukhte they hm kisi ke liye 👀 .. n jaane kaise sikh gye intezar karna .. 😶‍🌫️💌🫀.😁

Pata h maidam jee har baar maine aapko aise dekha h jaise ki andhe ne duniya ..👀🫣

Love uu 💕 my dearest maidam jee 💌.. meri pyari bubbu 🫶.. my love 🫀♾️....mela 👶.. ...  Kissi wali emoji daalne ka man kar rha lekin aap gussa ho jaoge .. 😁. Isiliye na daal rha 🤫... 


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

// ⬇️ PASTE THE VIDEO GALLERY CODE HERE
const videos = [
  "Videos/VID-20260312-WA0006.mp4",
  "Videos/VID-20260312-WA0007.mp4",
  "Videos/VID-20260312-WA0008.mp4",
  "Videos/VID_20260514_092938_161.mp4",
  "Videos/VID_20260514_092953_491.mp4"
];

const videoGallery = document.getElementById("videoGallery");

if (videoGallery) {
  videos.forEach(video => {
    const v = document.createElement("video");
    v.src = video;
    v.controls = true;
    v.style.width = "100%";
    v.style.maxWidth = "350px";
    v.style.margin = "10px";
    videoGallery.appendChild(v);
  });
}
function updateMonthMessage() {
    const start = new Date("2026-01-16");
    const now = new Date();

    let months = (now.getFullYear() - start.getFullYear()) * 12 +
                 (now.getMonth() - start.getMonth());

    if (now.getDate() < start.getDate()) {
        months--;
    }

    const message = document.getElementById("monthMessage");

    if (!message) return;

    if (months < 12) {
        message.innerHTML = `Happy ${months} Month${months !== 1 ? "s" : ""}, My Love 🫶`;
    } else {
        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;

        if (remainingMonths === 0) {
            message.innerHTML = `Happy ${years} Year${years > 1 ? "s" : ""}, My Love 🫶`;
        } else {
            message.innerHTML =
                `Happy ${years} Year${years > 1 ? "s" : ""} ${remainingMonths} Month${remainingMonths > 1 ? "s" : ""}, My Love 🫶`;
        }
    }
}

updateMonthMessage();
function openSecret() {
    window.location.href = "secret.html";
}
const letters = {

sad: {
title: "🌧️ Open when you're sad",
text: `My Dearest Bubbu ❤️,

If you're reading this, maybe today wasn't your best day.

I wish I could be there to hold your hand and tell you everything will be okay.

Always remember...

You are stronger than you think.

No matter how difficult life becomes...

You will never face it alone.

Because my heart will always stand beside yours.

Smile once for your Yadav Ji. 😊❤️`
},

miss: {
title: "🌙 Open when you miss me",
text: `Hey Maidam Jee ❤️,

If you're missing me right now...

Close your eyes.

Imagine me standing beside you...

Smiling like an idiot after seeing you. 😁

Distance can separate our hands...

But never our hearts.

I'm always with you.

Forever Yours,
❤️ Himanshu ❤️`
},

smile: {
title: "😊 Open when you want to smile",
text: `My Cute Bubbu ❤️,

Remember our exam days?

Remember how nervous I became whenever I tried talking to you?

And now...

We've completed six beautiful months together.

Thank you for becoming my happiness.

Now...

Smile once for me. 😊🫶`
},

sleep: {
title: "🌸 Open before sleeping",
text: `Good Night Bubbu ❤️🌙

Before you sleep...

Remember...

Someone is thanking God every single day for bringing you into his life.

Sweet dreams.

I'll meet you in your dreams. 🌸✨`
}

};

function openLetter(type){

document.getElementById("letterTitle").innerText=letters[type].title;

document.getElementById("letterText").innerText=letters[type].text;

document.getElementById("letterPopup").style.display="flex";

}

function closeLetter(){

document.getElementById("letterPopup").style.display="none";

}
