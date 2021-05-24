function Display(){
    var start = document.getElementById("disImage");
    var image = document.createElement("IMG");
    var InputNum = parseInt(document.getElementById("input").value);
    var child = start.childNodes;
    var length = child.length;
    var id = (length + 1).toString(10);
    var Source = id + ".png";
    image.src = Source;
    image.height = 100;
    image.width = 100;
    image.style.border = "5px solid white";
    image.style.padding = "10px";

    if(length < InputNum){
        start.appendChild(image);
        length++;
    }
    else if(length > InputNum){
        start.removeChild(child[length-1]);
        length--;
    }
    if(length !== InputNum){
        setTimeout(Display,1000);
    }
}
