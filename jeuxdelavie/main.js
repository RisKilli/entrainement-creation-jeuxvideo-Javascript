

const divResultat = document.querySelector("#resultat");


var tabjeu=[
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
];

//var tabResultat =[
//    [1,1,2,2],
 //   [4,4,3,3],
   // [5,5,6,6],
   // [7,7,8,8],
//]

var tabResultat=genereTableauAleatoire();

var oldselection=[];
var nbaffiche= 0;
var ready= true;

afficherTableau();

function afficherTableau(){
    var txt ="";

   for(var i=0; i < tabjeu.length ; i++) {
      txt +="<div>";
    for(var j=0; j < tabjeu[i].length ; j++){
        if(tabjeu[i][j] === 0){
            txt +="<button style='width:100px;height:100px;margin:10px;' onClick='verif(\""+i+"-"+j+"\")'> Afficher</button>";

        }else{
            txt += "<img src='"+getImage(tabjeu[i][j])+"' style='width:50px;height:50px;margin:10px;'>";
        }
    }
    txt +="</div>";
   }

    divResultat.innerHTML= txt;
}

function getImage(valeur){
    var imgTxt="image/";
    switch(valeur){
        case 1: imgTxt +="elephant.png";
            break;
            case 2:imgTxt +="giraffe.png";
            break;
            case 3:imgTxt +="hippo.png";
            break;
            case 4:imgTxt +="monkey.png";
            break;
            case 5:imgTxt +="panda.png";
            break;
            case 6:imgTxt +="parrot.png";
            break;
            case 7:imgTxt +="penguin.png";
            break;
            case 8:imgTxt +="pig.png";
            break;
            default : console.log("cas non pris en compte")
    }
   return  imgTxt;
}

function verif(bouton){
    if(ready){
    nbaffiche++;

    var ligne =bouton.substr(0,1);
    var colonne = bouton.substr(2,1);
   
    tabjeu[ligne][colonne] = tabResultat[ligne][colonne];
    afficherTableau();

    if(nbaffiche>1) {
        ready = false;
        setTimeout(()=>{
              //verification
        if(tabjeu[ligne][colonne] !== tabResultat[oldselection[0]][oldselection[1]] ){
            tabjeu[ligne][colonne] =0;
            tabjeu[oldselection[0]][oldselection[1]]=0;
        }
        afficherTableau();
        ready= true; 
        nbaffiche=0;
        oldselection = [ligne,colonne];
        },500)
       

    }else{
        oldselection = [ligne,colonne];
    }

    
}
}

function genereTableauAleatoire(){
    var tab =[];

    var nbImagePosition=[0,0,0,0,0,0,0,0];
     
    for (var i = 0 ; i < 4 ; i++){
        var ligne = [];
        for(var j = 0; j < 4 ; j++){
            var fin = false;
            while(!fin){

           
            var randomImage =Math.floor(Math.random() * 8);
            if(nbImagePosition[randomImage] < 2){
                ligne.push(randomImage+1);
                nbImagePosition[randomImage]++;
                fin= true;
            }
          }
        }

        tab.push(ligne);
    }
    return tab;
}