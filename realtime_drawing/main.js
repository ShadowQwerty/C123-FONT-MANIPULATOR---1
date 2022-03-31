function setup() 
{
  video = createCapture(VIDEO);
  video.size(550, 500);
  CANVAS= createCanvas(600,500)
  poses=ml5.poseNet(video,Modred)
  poses.on('pose',res)
}

function draw() {
 background("purple")

}

function Modred() {
    console.log("Model is dun dun dun ready!")
}

function res(results) {
    if (results.length>0) {
        console.log(results)
    }
    
    
}
