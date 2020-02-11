import { Component } from '@angular/core';
import { isNumber } from 'util';
//import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
//optimisation du code 
//oui c'est ça 
//t'inquiète 
/*pour la prochaine avec l'optimisation du code de la calculatrice :
comment on créer un service 
récuperation des informations du téléphone avec du json 
Récuperation HTTP des des information
la prochaine :
les fonctionnalité native 
faire un certain nombre de chose avec le téléphone 
des exercices 
androïd, télécharger le sdk 
*/ 

  constructor() {}
  valeur = '0';
  anciennValeur = '0';
  signe = 'x';
  nouvelleEntrer = true ;
  numGroups=[['AC','+/-','%','/'],[7,8,9,'*'],[4,5,6,'-'],[1,2,3,'+'],[0,' ','.','=']]
  /*Appuyerbizarre(caractere){
    if (parseFloat(this.valeur) > 0){
      this.valeur = '-' + (this.valeur) ;
       parseFloat(this.valeur);
       this.nouvelleEntrer = true;
    }else{
      this.valeur = '' + (parseFloat(this.valeur)*-1);
    }
  }*/

  //caculer(){}
  Appuyer(caractere) {
    if (isNumber(caractere) || caractere ==='.' ) {
      if (this.nouvelleEntrer)
        this.valeur = '' + caractere;
      else
        this.valeur += '' + caractere;
      this.nouvelleEntrer = false;
    }
    else if (caractere === 'AC') {
      
      this.valeur = '0';
      this.nouvelleEntrer = true;
    }
    else if (caractere === '=') {
      
      if (this.signe === '*')
        this.valeur = '' + (parseFloat(this.anciennValeur) * parseFloat(this.valeur));
      else if (this.signe === '-')
        this.valeur = '' + (parseFloat(this.anciennValeur) - parseFloat(this.valeur));
      else if (this.signe === '+')
        this.valeur = '' + (parseFloat(this.anciennValeur) + parseFloat(this.valeur));
      else if (this.signe === '/')
        this.valeur = '' + (parseFloat(this.anciennValeur) / parseFloat(this.valeur));
      this.nouvelleEntrer = true;
    }
    else { 
      this.nouvelleEntrer = true;
      this.anciennValeur = this.valeur;
      this.signe = caractere;
    }
  }
  }
  
