function back() {
    window.location = "activity_1.html";
}
function getScore(){ 
    sscore = localStorage.getItem("score");
    document.getElementById("update").innerHTML = "<h1>Score: " + score +"</h1>";
}