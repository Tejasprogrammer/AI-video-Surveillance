video="";
status="";
objects=[];

function preload()
{
    video=createVideo('video.mp4');
    video.hide();

}

function setup()
{
    canvas = createCanvas(480, 340);
    canvas.center();
    
}

function start()
{
objectDetector=ml5.objectDetector('cocossd', modelloaded);
document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelloaded()
{
console.log("Modelloaded");
status=true;
video.loop();
video.speed(1);
video.volume(0);
}

function gotresults(error, results)
{
if(error)
{
    console.log(error);
}
console.log(results);
objects=results;
}

function draw()
{
image(video,0,0,480, 380);
}