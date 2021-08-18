import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
equipment :string[]=[
  'Habitat dome','Drones','Food container','Oxygen tanks'
]
equipmentBeingEdited :string =null;
  constructor() { }

  ngOnInit() {
  }
  addEquipment(name:string){
    this.equipment.push(name);
  }
  removeEquipment(name:string){
    let index= this.equipment.indexOf(name);
    this.equipment.splice(index,1);
  }
  edit(device){
   this.equipmentBeingEdited=device;
  }
  save(name:string , equip:string){
    let index=this.equipment.indexOf(equip);
    this.equipment.splice(index,1,name);
    this.equipmentBeingEdited=null;
  }

}
