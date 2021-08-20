import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   ableToAdd :boolean =true;
   nearCapacity:boolean=true;
   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   addItem(addEquipment : object){
     if(!this.cargoHold.includes(addEquipment)){
     this.cargoHold.push(addEquipment);
     this.cargoMass +=addEquipment['mass'];
    if((this.cargoMass+200)<this.maximumAllowedMass){
       return true;
       }
       else{return false};
      }
      }
reset(){
  this.cargoHold=[];
  this.nearCapacity=false;
  this.cargoMass=0;
}
removeItem(removeEquipment:object){
  let index=this.cargoHold.indexOf(removeEquipment);
  this.cargoHold.splice(index,1);
}

}
