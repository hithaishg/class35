class Form{
constructor() {
this.title = createElement("h1") ;
this.input = createInput("name") ;
this.button = createButton("play");


}
display() {
    this.title.html("Car Racing Game") ;
this.title.position(130 , 0) ;
this.button.position(250 , 200);
this.input.position(130 , 160);


}




}