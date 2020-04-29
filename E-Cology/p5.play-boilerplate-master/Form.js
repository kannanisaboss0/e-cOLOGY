class Form{
    constructor(){
         this.title=createElement('h1');
         this.space=createElement();
         this.choice=createElement('h1');
         this.animal=createElement('h2');
         this.plant=createElement('h2');
         
         

    }

    display(){
        if(gameState===0){
        this.title.html("E-Cology");
        this.title.position(900,100);  
        this.space.position(900,400);
        
        this.space.html("Press Space to play");
        }
        if(keyDown("space")){
            gameState=1;
        }
        if(gameState===1){  
         this.title.hide();     
         this.choice.html("What do you want to be?");
         this.choice.position(750,100); 
         this.space.hide();
         this.animal.html("Animal(press A)");
         this.animal.position(200,400);
         this.plant.html("Tree(press T)");
         this.plant.position(1400,400);
          
        }
        if(keyDown("T")){
            gameState=1.1;
        }
        if(gameState===1.1){
            this.choice.hide();
            this.plant.hide();
            this.animal.hide(); 
            background("green");
            rect(800,300,200,200);
            rectMode(CENTER);  
            
        }
        
       
            
            
           
            
       
        
 
 
        
        
    }
}