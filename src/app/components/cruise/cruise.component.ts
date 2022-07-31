import { Component, ElementRef, HostListener, ViewChild } from "@angular/core";

@Component({
    selector: 'cruise',
    templateUrl: './cruise.component.html',
    styleUrls: ['./cruise.component.scss']
})

export class Cruise {
    @ViewChild('character', { static: false }) character!: ElementRef;
    @ViewChild('game', { static: false }) game!: ElementRef;
    @ViewChild('collision', { static: false }) collision!: ElementRef;
    @ViewChild('collision2', { static: false }) collision2!: ElementRef;
    @ViewChild('collision3', { static: false }) collision3!: ElementRef;
    @ViewChild('collision4', { static: false }) collision4!: ElementRef;


    interval: any;
    both = 0;
    begin = true;
    gameOver = false;

    ngOnInit(){

    }

    moveLeft() {
        var left = parseInt(window.getComputedStyle(this.character.nativeElement).left);
        if (left > 20) {
            this.character.nativeElement.style.left = left - 2 + "px";
        }
    }

    moveRight() {
        var left = parseInt(window.getComputedStyle(this.character.nativeElement).left);
        if (left < 450) {
            this.character.nativeElement.style.left = left + 2 + "px";
        }
    }

    moveUp() {
        var top = parseInt(window.getComputedStyle(this.character.nativeElement).top);
        if (top > 350) {
            this.character.nativeElement.style.top = top - 2 + "px";
        }
    }

    moveDown() {
        var top = parseInt(window.getComputedStyle(this.character.nativeElement).top);
        if (top >= 350 && top < 600) {
            this.character.nativeElement.style.top = top + 2 + "px";
        }
    }

    //controls to get the car to move
    @HostListener('window:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {
        if(this.both == 0){
            this.both++
            if (event.key === "ArrowLeft") {
                this.interval = setInterval(() => {
                    this.moveLeft();
                }, 1)
            }
            if (event.key === "ArrowRight") {
                this.interval = setInterval(() => {
                    this.moveRight();
                }, 1)
            }
            if (event.key === "ArrowUp") {
                this.interval = setInterval(() => {
                    this.moveUp();
                }, 1)
            }
            if (event.key === "ArrowDown") {
                this.interval = setInterval(() => {
                    this.moveDown();
                }, 1);
            }
            event.preventDefault();
        }
        event.preventDefault();
    }

    //stops the car from moving when key is lifted up
    @HostListener('window:keyup', ['$event'])
    keyEventStop() {
        clearInterval(this.interval)
        this.both=0;
    }

    checkCollision() {

        var characterTop = parseInt(window.getComputedStyle(this.character.nativeElement).top);

        var characterLeft = parseInt(window.getComputedStyle(this.character.nativeElement).left);

        var taxiTop = parseInt(window.getComputedStyle(this.collision.nativeElement).top) - 90;

        var taxiBottom = parseInt(window.getComputedStyle(this.collision.nativeElement).top) + 90;

        var outlawTop = parseInt(window.getComputedStyle(this.collision2.nativeElement).top) - 90;

        var outlawBottom = parseInt(window.getComputedStyle(this.collision2.nativeElement).top) + 100;

        var redTop = parseInt(window.getComputedStyle(this.collision3.nativeElement).top) - 90;

        var redBottom = parseInt(window.getComputedStyle(this.collision3.nativeElement).top) + 90;

        var whiteTop = parseInt(window.getComputedStyle(this.collision4.nativeElement).top) - 105;

        var whiteBottom = parseInt(window.getComputedStyle(this.collision4.nativeElement).top) + 120;

        //250 top
        //630 bottom

        if (characterTop < taxiBottom && characterTop > taxiTop && characterLeft < 90){
            alert("CRASH!!!")
            this.collision.nativeElement.classList.add('none');
            this.collision2.nativeElement.classList.add('none');
            this.collision3.nativeElement.classList.add('none');
            this.collision4.nativeElement.classList.add('none');
            this.gameOver = true;
        }
        if (characterTop < outlawBottom && characterTop > outlawTop && characterLeft > 120 && characterLeft < 220){
            alert("CRASH!!!")
            this.collision.nativeElement.classList.add('none');
            this.collision2.nativeElement.classList.add('none');
            this.collision3.nativeElement.classList.add('none');
            this.collision4.nativeElement.classList.add('none');
            this.gameOver = true;
        }
        if (characterTop < redBottom && characterTop > redTop && characterLeft > 375){
            alert("CRASH!!!")
            this.collision.nativeElement.classList.add('none');
            this.collision2.nativeElement.classList.add('none');
            this.collision3.nativeElement.classList.add('none');
            this.collision4.nativeElement.classList.add('none');
            this.gameOver = true;
        }
        if (characterTop < whiteBottom && characterTop > whiteTop && characterLeft > 243 && characterLeft < 340){
            alert("CRASH!!!")
            this.collision.nativeElement.classList.add('none');
            this.collision2.nativeElement.classList.add('none');
            this.collision3.nativeElement.classList.add('none');
            this.collision4.nativeElement.classList.add('none');
            this.gameOver = true;
        }

    }

    startGame() {
        this.begin = false;
        setInterval(() => { this.checkCollision() }, 2);
    }

    //resets the game
    reset() {
        this.collision.nativeElement.classList.remove('none');
        this.collision2.nativeElement.classList.remove('none');
        this.collision3.nativeElement.classList.remove('none');
        this.collision4.nativeElement.classList.remove('none');
        this.gameOver = false;
    }
}