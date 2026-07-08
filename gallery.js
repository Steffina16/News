// ===============================
// THE DAILY HEART - SNAPSHOTS
// ===============================

const snapshots = [

{
    image: "images/snapshots/1.jpg",
    date: "July 14, 2025",
    text: "Our first café date together. I still remember how nervous I was. test"
},

{
    image: "images/snapshots/2.jpg",
    date: "August 3, 2025",
    text: "One of the happiest afternoons we ever had. test"
},

{
    image: "images/snapshots/3.jpg",
    date: "September 8, 2025",
    text: "The day we couldn't stop laughing test."
},

{
    image: "images/snapshots/4.jpg",
    date: "October 20, 2025",
    text: "Another beautiful memory together test."
},

{
    image: "images/snapshots/5.jpg",
    date: "November 16, 2025",
    text: "My Birthday this is a test"
}

];

// ===============================
// ELEMENTS
// ===============================

const leftImg = document.getElementById("leftImg");
const centerImg = document.getElementById("centerImg");
const rightImg = document.getElementById("rightImg");

const date = document.getElementById("snapshotDate");
const text = document.getElementById("snapshotText");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

const dotsContainer = document.getElementById("dots");

// ===============================
// RANDOM START
// ===============================

let current = Math.floor(Math.random() * snapshots.length);

// ===============================
// UPDATE GALLERY
// ===============================

function updateGallery(){

    const left =
        (current - 1 + snapshots.length) % snapshots.length;

    const right =
        (current + 1) % snapshots.length;

    leftImg.src = snapshots[left].image;

    centerImg.src = snapshots[current].image;

    rightImg.src = snapshots[right].image;

    date.textContent = snapshots[current].date;

    text.textContent = snapshots[current].text;

    updateDots();

}

// ===============================
// DOTS
// ===============================

function updateDots(){

    dotsContainer.innerHTML = "";

    snapshots.forEach((item,index)=>{

        const dot=document.createElement("span");

        dot.classList.add("dot");

        if(index===current){

            dot.classList.add("active");

        }

        dot.onclick=()=>{

            current=index;

            updateGallery();

        };

        dotsContainer.appendChild(dot);

    });

}

// ===============================
// BUTTONS
// ===============================

next.onclick=()=>{

    current++;

    if(current>=snapshots.length){

        current=0;

    }

    updateGallery();

};

prev.onclick=()=>{

    current--;

    if(current<0){

        current=snapshots.length-1;

    }

    updateGallery();

};

// ===============================
// CLICK SIDE IMAGES
// ===============================

leftImg.onclick=()=>{

    prev.click();

};

rightImg.onclick=()=>{

    next.click();

};

// ===============================
// START
// ===============================

updateGallery();

function updateGallery(){

    const left =
        (current - 1 + snapshots.length) % snapshots.length;

    const right =
        (current + 1) % snapshots.length;

    // Fade OUT
    leftImg.style.opacity = "0";
    centerImg.style.opacity = "0";
    rightImg.style.opacity = "0";

    centerImg.style.transform = "scale(.96)";

    setTimeout(()=>{

        leftImg.src = snapshots[left].image;
        centerImg.src = snapshots[current].image;
        rightImg.src = snapshots[right].image;

        snapshotDate.textContent = snapshots[current].date;
        snapshotText.textContent = snapshots[current].text;

        // Fade IN
        leftImg.style.opacity = ".35";
        centerImg.style.opacity = "1";
        rightImg.style.opacity = ".35";

        centerImg.style.transform = "scale(1)";

        updateDots();

    },180);

}