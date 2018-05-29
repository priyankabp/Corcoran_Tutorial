import { Component } from "@angular/core";
import { GoogleDriveProvider } from './google-drive';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [ GoogleDriveProvider ]
})
export class AppComponent {
   title = 'app';
   persons: Array<any>;
   dataId: string;

  constructor( gDrive: GoogleDriveProvider ) {
    this.dataId = '1i2qbKeasPptIrY1PkFVjbHSrLtKEPIIwES6m2l2Mdd8';
    gDrive.load( this.dataId )
      .then( ( data ) => {
        this.persons = data;
      }, (error) => {
        console.log( error );
      });
  }

  sort_asc(){
    if(this.sort_asc){
      this.persons.sort((a,b) => 0 - (a > b ? -1 : 1));
    }
  }

  sort_des(){
    if(this.sort_des){
      this.persons.sort((a,b) => 0 - (a > b ? 1 : -1));
    }
  }
}