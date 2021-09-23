function Personaje(nombre){ //Funcion
  this.nombre=nombre; //Nombre del personaje
  this.ki=100; //Puntos de vida del personaje
  this.mana=100;//Puntos de habilidad del personaje
  this.semillas//revives en 40 40
  this.sayayin//recuperas +20 +30
  

  //Metodos de habilidad
  this.recuperar = function(jugadorObjetivo){
      if(this.ki =0){
          jugadorObjetivo.ki +=10;
              this.mana +=20
              
      }else{
          console.warn("EL JUGADOR" + this.nombre + "RECUPERADO");
      }
      this.status(jugadorObjetivo);
  
  
  }  
  this.revivir = function(jugadorObjetivo){
      if(this.mana =0){
          console.warn("EL JUGADOR" + this.nombre + "MURIO")
          jugadorObjetivo.ki +=20;
          this.mana +=20
          this.semillas +=60
      }else{
          console.warn("EL JUGADOR" + this.nombre + "REVIVIO");
      }
      this.status(jugadorObjetivo);
      }


      this.curar = function(jugadorObjetivo){
          //Al curar gastas 40 y curas 20
          if(this.mana =40){
              jugadorObjetivo.ki += 20;
              this.mana -=20
          }else{
              console.warn("EL JUGADOR" + this.nombre + "YA NO PEDE CURAR");

          }
          this.status(jugadorObjetivo);
      }
      //Al atacar gastas 40 y pierde 20
      this.atacar=function(jugadorObjetivo){
          if(this.mana >= 40){
              jugadorObjetivo.ki -=20;
              this.mana -=20;
          }else{
              console.warn("EL JUGADOR" + this.nombre + "YANO TIENE MANA SUFICIENTE");
          }
      this.status(jugadorObjetivo);
      }

      //Metodo de sistema
      this.status=function(jugadorObjetivo){
          console.log(this);
          console.log(jugadorObjetivo);
          
      }
  }
  var personaje1= new Personaje("VEGUETA");
  var persoanje2= new Personaje("GOKU");

  console.log(personaje1);
  console.log(persoanje2);


