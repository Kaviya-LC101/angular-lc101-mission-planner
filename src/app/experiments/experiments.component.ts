import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
   experiment :string[]=[
    'Mars soil sample','Plant growth in habitat','Human bone density'
   ]
   workBeingEdited :string=null;
  
  constructor() { }

  ngOnInit() {
  }
  remove(experi:string){
    let index=this.experiment.indexOf(experi);
    this.experiment.splice(index,1);
  }
  add(newExperi){
    this.experiment.push(newExperi);
  }
  edit(editWork){
    this.workBeingEdited=editWork;
  }
  save(update,experi){
    let index=this.experiment.indexOf(experi)
    this.experiment.splice(index,1,update);
    this.workBeingEdited=null;
  }

}
