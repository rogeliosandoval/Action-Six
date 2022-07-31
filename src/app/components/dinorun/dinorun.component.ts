import { Component, ElementRef, HostListener, ViewChild } from "@angular/core";

@Component({
    selector: 'dinorun',
    templateUrl: './dinorun.component.html',
    styleUrls: ['./dinorun.component.scss']
})

export class DinoRun {
    @ViewChild('game', { static: true }) game!: ElementRef;
    @ViewChild('character', { static: true }) character!: ElementRef;
    @ViewChild('block', { static: true }) block!: ElementRef;
    @ViewChild('turtle', { static: true }) turtle!: ElementRef;
    @ViewChild('gamedisplaybegin', { static: true }) gamedisplaybegin!: ElementRef;
    @ViewChild('gamedisplayplaying', { static: true }) gamedisplayplaying!: ElementRef;
    jump = false;
    dead = false;
    begin = true;

    ngOnInit(){
        setInterval(() => { this.checkCollision(); }, 10);
    }

    //gets the dino to jump when spacebar is pressed
    @HostListener('window:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {
        if(event.key == ' '){
            this.jump = true;
            setTimeout(() => {
                this.jump = false;
            }, 500)
        }
        event.preventDefault();
    }

    //gets the dino to jump when game is clicked
    animate() {
        this.jump = true;
        setTimeout(() => {
            this.jump = false;
        }, 500)
        this.checkCollision();
    }

    //hit detection (checks to see if the user lost)
    checkCollision() {
        var characterTop = parseInt(window.getComputedStyle(this.character.nativeElement).top);

        var blockLeft = parseInt(window.getComputedStyle(this.block.nativeElement).left);

        var turtleLeft = parseInt(window.getComputedStyle(this.turtle.nativeElement).left);

        if (blockLeft < 115 && blockLeft > 85 && characterTop >=233) {
            this.block.nativeElement.classList.add('none');
            this.turtle.nativeElement.classList.add('none');
            this.character.nativeElement.classList.add('none');
            this.game.nativeElement.classList.add('game-over-background');
            this.dead = true;
        }

        if (turtleLeft < 115 && turtleLeft > 85 && characterTop >=233) {
            this.block.nativeElement.classList.add('none');
            this.turtle.nativeElement.classList.add('none');
            this.character.nativeElement.classList.add('none');
            this.game.nativeElement.classList.add('game-over-background');
            this.dead = true;
        }
    }

    startGame() {
        this.begin = false;
        this.gamedisplaybegin.nativeElement.classList.add('none');
        this.gamedisplayplaying.nativeElement.classList.add('some');
    }

    //resets the game
    reset() {
        this.block.nativeElement.classList.remove('none');
        this.turtle.nativeElement.classList.remove('none');
        this.character.nativeElement.classList.remove('none');
        this.game.nativeElement.classList.remove('game-over-background');
        this.dead = false;
    }
}
