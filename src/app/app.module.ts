// angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// services
import { ApiDemoService } from './services/api-demo.service';

// user modules

// user components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ApiDemoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
