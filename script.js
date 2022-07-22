let slider = document.getElementById('first_image');
let forward = document.getElementById('forward');
let previous = document.getElementById('previous');
let par = document.getElementById('slide_no');
let par2 = document.getElementById('describe')
let changer = 0;
if(changer == 0){
    par2.innerText = "The drawing of a bird by tega"
}

let intervalID = setInterval(()=>{
    slide(changer)
    console.log(changer);
    changer = changer + 1;
    par.innerText = `SLIDE ${changer + 1}`;

    if(changer == images.length  ){
        changer = 0;
    }

}, 3000);


par.innerText = `SLIDE ${changer + 1}`

images = [
    "rain_bird.jpg",
    "light.png",
    "bfTAG.png",
    "Capture.png",
    "safari.png",
    "Snapshot49.jpg",
    "untitled.png",
    "Pawpals.png"
]




if(changer == 0){
    slide(changer)
}




function slide(counter){
    slider.style.backgroundImage = `url('imgs/${images[counter]}')`;
}


forward.addEventListener('click',()=>{

  (function (intId1, intId2){
    clearInterval(intId1);
    clearInterval(intId2);
})(intervalID, intervalId2);

intervalId2 = setInterval(()=>{
console.log('i dae here dae watch you my guy')
slide(changer)
changer += 1;
if(changer == images.length -1){
  changer = 0;
  par.innerText = `SLIDE ${changer + 1}`;
}
},3000);


  let interval2 = setInterval(()=>{
      slide(changer)
      stopper(intervalID);
      changer += 1;
      if(changer == images.length){
        changer = 0;
        par.innerText = `SLIDE ${changer + 1}`;
    }
  },3000);

    changer += 1;
    if(changer == images.length){
        changer = 0
        par.innerText = `SLIDE ${changer + 1}`
    }
    slide(changer);
    par.innerText = `SLIDE ${changer + 1}`
    if(changer == 0){
        par2.innerText = "The drawing of a bird by tega"
    }
    
    if(changer == 1){
        par2.innerText = "The drawing of a someone running from darkness by tega"
    }
    
    if(changer == 2){
        par2.innerText = "The drawing of a bfTAG's logo by tega"
    }
    
    if(changer == 3){
        par2.innerText = "The drawing of a pixelated cat by tega"
    }
    
    if(changer == 4){
        par2.innerText = "The drawing of a safari by tega"
    }
    
    if(changer == 5){
        par2.innerText = "The picture of tega"
    }
    
    if(changer == 6){
        par2.innerText = "TThe drawing of a pixelated cat by tega"
    }
    
    if(changer == 7){
        par2.innerText = "The drawing of a Pawpals's logo by tega"
    }
})
let intervalId2;
previous.addEventListener('click',()=>{
       
    (function (intId1, intId2){
        clearInterval(intId1);
        clearInterval(intId2);
    })(intervalID, intervalId2);
    
    intervalId2 = setInterval(()=>{
    console.log('i dae here dae watch you my guy')
    slide(changer)
    changer -= 1;
    if(changer == images.length -1){
      changer = 0;
      par.innerText = `SLIDE ${changer + 1}`;
    }
  },3000);


  if(changer == images.length){
    changer = 0
    par.innerText = `SLIDE ${changer + 1}`
  }

    changer -= 1;
    if(changer == -1){
        changer = images.length - 1;
        par.innerText = `SLIDE ${changer - 1}`
    }
    par.innerText = `SLIDE ${changer - 1}`
    slide(changer);
    if(changer == 0){
        par2.innerText = "The drawing of a bird by tega"
    }
    
    if(changer == 1){
        par2.innerText = "The drawing of a someone running from darkness by tega"
    }
    
    if(changer == 2){
        par2.innerText = "The drawing of a bfTAG's logo by tega"
    }
    
    if(changer == 3){
        par2.innerText = "The drawing of a pixelated cat by tega"
    }
    
    if(changer == 4){
        par2.innerText = "The drawing of a safari by tega"
    }
    
    if(changer == 5){
        par2.innerText = "The picture of tega"
    }
    
    if(changer == 6){
        par2.innerText = "TThe drawing of a pixelated cat by tega"
    }
    
    if(changer == 7){
        par2.innerText = "The drawing of a Pawpals's logo by tega"
    }
})






