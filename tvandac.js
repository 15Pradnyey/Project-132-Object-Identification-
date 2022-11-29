Status = "";
img = "";

function preload() {
    img = loadImage("https://i.postimg.cc/266X60hk/Living-room-design-for-more-space-1366x768.webp");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status: objects detecting";
}

function modelloaded() {
    console.log("CoCoSSD model initiated");
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}

function draw() {
    image(img, 0, 0, 640, 420);
    text("Bed", 200, 150);
    stroke("red");
    rect(100, 150, 400, 250);
    fill(255, 0, 0, 0);
    noFill();
    
}

function back() {
    location.href = "home.html";
}