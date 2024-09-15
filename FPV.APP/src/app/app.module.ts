import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app.routes";

import { AppComponent } from './app.component';
import { FlashModule } from "./flash/flash.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        
        
        FlashModule,
        
        //FormsModule,
       // ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: []
})
export class AppModule { }