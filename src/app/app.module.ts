import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpModule, Http } from '@angular/http';
import { OrderModule } from 'ngx-order-pipe';
import 'rxjs/add/operator/toPromise';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OrderModule,
    HttpModule,
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
