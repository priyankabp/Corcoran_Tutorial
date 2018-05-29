import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GoogleDrive provider.
*/
@Injectable()
export class GoogleDriveProvider {
  data: any = null;

  constructor(public http: Http) {}

  load( id ) {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    var url = 'https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id='+id+'&sheet=Sheet1'
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get(url)
        .map(res => res.json() )
        .subscribe( data => {
          this.data = data.Sheet1;
          
          let returnArray: Array<any> = [];
          if( this.data && this.data.length > 0 ) {
            this.data.forEach( ( entry, index ) => {
              var obj = {};
              for( let name in entry ) {
                if( name.includes('President')){
                  obj = entry[name];
                }
              }
              returnArray.push( obj );
            });
          }
          resolve(returnArray);
        });
    });
  }
}