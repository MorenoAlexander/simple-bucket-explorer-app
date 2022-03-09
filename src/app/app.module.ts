import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule} from "./shared/shared.module";
import { S3Service } from "./services/s3.service";
import { HomeComponent } from './components/home/home.component';
import { S3clientSetupModalComponent } from './components/s3client-setup-modal/s3client-setup-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    S3clientSetupModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [S3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
