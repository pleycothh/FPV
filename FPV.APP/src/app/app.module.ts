import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClient } from "@angular/common/http";
import { FlashModule } from "./flash/flash.module";
import { AppRoutingModule } from "./app.routes";

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        //AppRoutingModule,

        
        
        FlashModule,
        
        //FormsModule,
       // ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: []
})
export class AppModule { }