function Toggler(selesctor){
    this._elem = document.querySelector(selesctor);
}

Toggler.prototype.getElem = function (){
    return this._elem;
}

Toggler.prototype.show = function (){
    this._elem.style.display = "";
}

Toggler.prototype.hide = function (){
    this._elem.style.display = "none";
}


var elem = new Toggler("#section");
var button = document.querySelector("#button");

button.addEventListener("click", function() {

    if(elem.getElem().style.display == "none") {
        elem.show();
    } else {
        elem.hide();
    }

}, false);