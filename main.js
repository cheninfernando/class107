/*https://teachablemachine.withgoogle.com/models/EPPGe0TlU/ */

function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/k8JLHOnwO/model.json",modelready);
}

function modelready(){
    console.log("Model has been initialized");
    classifier.classify(gotresults);
}

function gotresults(error,results){
console.log(results);
console.log("gotresults");
}



