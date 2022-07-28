import { Component } from "@angular/core";
import { ApiService } from "src/app/api.service";

@Component({
    selector: 'bored',
    templateUrl: './bored.component.html',
    styleUrls: ['./bored.component.scss']
})

export class Bored {
    constructor(private api:ApiService) {}
    activity: any;
    random = false;

    ngOnInit(){
    }

    getRandom() {
        this.api.getBoredRandom().subscribe(bored=>{
            this.activity = bored;
        })
        this.random = true;
    }
}