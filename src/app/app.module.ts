import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SingleLineComponent } from './single-line/single-line.component';
import { VertLineComponent } from './vert-line/vert-line.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    DashboardComponent,
    SingleLineComponent,
    VertLineComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
