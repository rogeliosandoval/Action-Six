import { Component } from "@angular/core";
import { ApiService } from "src/app/api.service";

@Component({
    selector: 'bored',
    templateUrl: './bored.component.html',
    styleUrls: ['./bored.component.scss']
})

export class Bored {
    constructor(private api:ApiService) {}
    randomActivity: any;
    relaxActivity: any;
    socialActivity: any;
    recreationalActivity: any;
    busyActivity: any;
    cookingActivity: any;
    educationalActivity: any;
    charityActivity: any;
    diyActivity: any;
    musicActivity: any;

    random = false;
    relax = false;
    social = false;
    recreational = false;
    busy = false;
    cooking = false;
    education = false;
    charity = false;
    diy = false;
    music = false;

    ngOnInit(){
    }

    getRandom() {
        this.api.getBoredRandom().subscribe(bored=>{
            this.randomActivity = bored;
        })
        this.random = true;
    }

    getRelax() {
        this.api.getRelax().subscribe(relax=>{
            this.relaxActivity = relax;
        })
        this.relax = true;
    }

    getSocial() {
        this.api.getSocial().subscribe(social=>{
            this.socialActivity = social;
        })
        this.social = true;
    }

    getRecreational() {
        this.api.getRecreational().subscribe(recreational=>{
            this.recreationalActivity = recreational;
        })
        this.recreational = true;
    }

    getBusy() {
        this.api.getBusy().subscribe(busy=>{
            this.busyActivity = busy;
        })
        this.busy = true;
    }

    getCooking() {
        this.api.getCooking().subscribe(cooking=>{
            this.cookingActivity = cooking;
        })
        this.cooking = true;
    }

    getEducation() {
        this.api.getEducation().subscribe(educational=>{
            this.educationalActivity = educational;
        })
        this.education = true;
    }

    getCharity() {
        this.api.getCharity().subscribe(charity=>{
            this.charityActivity = charity;
        })
        this.charity = true;
    }

    getDiy() {
        this.api.getDiy().subscribe(diy=>{
            this.diyActivity = diy;
        })
        this.diy = true;
    }

    getMusic() {
        this.api.getMusic().subscribe(music=>{
            this.musicActivity = music;
        })
        this.music = true;
    }
}