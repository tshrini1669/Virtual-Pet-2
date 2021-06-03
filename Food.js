class Food{
    constructor(){
        this.foodstock=0;
        this.lastfed;
        this.image=loadImage("images/Milk.png");
    }
    updatefoodstock(foodstock){
        this.foodstock=foodstock
    }
    getfoodstock(){
        return this.foodstock
    }
    deductfood(){
        if(this.foodstock>0){
            this.foodstock=foodstock-1;
        }
    }
    display(){
        var x=80;
      var   y=100;
        imageMode(CENTER);
        image(this.image,720,220,70,70);
        if(this.foodstock!=0){
            for(var i=0; i<this.foodstock; i++){
                if(i%10===0){
                    x=10;
                    y=y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30
            }
        }
    }
}