import { NgModule } from "@angular/core";
import { FlashComponent } from "./flash.component";
import { FlashService } from "./flash.service";
import { HttpClient } from "@angular/common/http";

@NgModule({
    imports: [
        
        // self
        
        FlashComponent,

        // service
        
        //FlashService
        
    ],
    declarations: [
        
    ],
    providers: [],
    bootstrap: []
})
export class FlashModule { }