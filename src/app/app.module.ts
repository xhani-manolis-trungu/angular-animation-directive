import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MaterialModule } from './material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DemoComponent } from './demo/demo.component';
import { XpAnimationDirective } from './directives/animation.directive'; 
 
@NgModule({
  imports:      [ BrowserModule, FormsModule, MaterialModule, BrowserAnimationsModule, FormsModule, FlexLayoutModule ],
  declarations: [ AppComponent, HelloComponent, XpAnimationDirective, DemoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
