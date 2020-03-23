import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { MDBBootstrapModule } from 'angular-bootstrap-md'; 
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ProfileComponent
  ],
  imports: [
    AmplifyAngularModule,
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule,
    FormsModule
  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
