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

function gotResult(error, results)
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

if(status !="")
{
objectDetector.detect(video, gotResult);

for(i=0; i<objects.length; i++)
{
    document.getElementById("status").innerHTML="Status: Objects Detected";
    document.getElementById("number_of_objects").innerHTML="Number of objects detected are"+objects.length;
    fill("#f20a0a");
    percent=floor(objects[i].confidence*100);
    text(objects[i].label+" "+percent+"%",objects[i].x, objects[i].y);
    nofill();
    stroke("#f8fc0a");
    rect(objects[i].x , objects[i].y , objects[i].width,  objects[i].height);
}

}

}