import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app.routes";

import { FlashModule } from "./flash/flash.module";

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