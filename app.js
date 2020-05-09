function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {  
    chiffre=ev.target.innerHTML;
    console.log(chiffre)
    return chiffre
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.innerHTML=chiffre;
  }

const grille_1_solution = [
    4,9,2,8,1,3,7,6,5,
    8,6,5,7,4,2,1,9,3,
    1,3,7,9,5,6,8,4,2,
    1,8,7,2,3,9,6,5,4,
    9,5,4,6,7,1,3,2,8,
    6,2,3,5,8,4,7,9,1,
    3,7,8,9,2,1,5,4,6,
    4,1,9,5,3,6,2,8,7,
    2,6,5,4,7,8,3,1,9

];

const grille_2_solution = [
    9,6,3,8,5,1,7,4,2,
    8,4,2,6,7,9,3,1,5,
    5,1,7,4,2,3,8,9,6,
    4,7,9,3,8,6,1,2,5,
    5,2,6,7,9,1,4,3,8,
    1,3,8,2,5,4,7,6,9,
    6,3,8,2,1,7,5,9,4,
    2,5,4,9,8,3,1,6,7,
    9,7,1,6,4,5,3,8,2
];

const grille_3_solution = [
    7,3,2,9,8,6,1,4,5,
    4,1,8,7,5,2,6,3,9,
    5,9,6,3,1,4,2,7,8,
    8,5,9,2,1,4,6,7,3,
    1,2,6,9,7,3,8,4,5,
    4,3,7,8,6,5,9,2,1,
    3,9,1,2,5,7,4,6,8,
    5,8,7,3,6,4,2,9,1,
    6,4,2,1,8,9,7,5,3
];

let final=[];



function submit(){
    for(i=1;i<82;i++){

         final.push(parseInt(document.getElementById(i).innerHTML));
        
    }
    // if(final===grille_1_solution){
    //     alert('oui')
    //     console.log(final);
    //     console.log(grille_1_solution)
    // }else{
    //     alert("Perdu !")
    //     console.log(final);
    //     console.log(grille_1_solution)
    //     final = [];
    // }

    for(i=1 ; i<=final.length ; i++){
        if(final.length != grille_1_solution.length){
        console.log ("Vous n'avez pas fini") 
        }else if(final[i] == grille_1_solution[i]){
            console.log("ok")
            if(i==final.length){
                alert("Bien joué!")
                final = [];
                    }
        }else{
            alert("Perdu");
            final = [];
            break
        }
    }
}