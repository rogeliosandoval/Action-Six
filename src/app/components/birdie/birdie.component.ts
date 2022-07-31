import { Component, ElementRef, HostListener, Renderer2, ViewChild } from "@angular/core";

@Component({
    selector: 'birdie',
    templateUrl: 'birdie.component.html',
    styleUrls: ['./birdie.component.scss']
})

export class Birdie {
    @ViewChild('character', { static: false }) character!: ElementRef;
    @ViewChild('game', { static: false }) game!: ElementRef;
    @ViewChild('block', { static: false }) block!: ElementRef;
    @ViewChild('hole', { static: false }) hole!: ElementRef;
    @ViewChild('block2', { static: false }) block2!: ElementRef;
    @ViewChild('hole2', { static: false }) hole2!: ElementRef;
    @ViewChild('block3', { static: false }) block3!: ElementRef;
    @ViewChild('hole3', { static: false }) hole3!: ElementRef;
    @ViewChild('block4', { static: false }) block4!: ElementRef;
    @ViewChild('hole4', { static: false }) hole4!: ElementRef;
    @ViewChild('block5', { static: false }) block5!: ElementRef;
    interval: any;
    both = 0;
    begin = true;
    gameOver = false;
    random = Math.floor(Math.random() * 15);

    constructor (private el: ElementRef, private renderer:Renderer2) { }

    ngOnInit() {}

    ngAfterViewInit() {}

    moveLeft() {
        var left = parseInt(window.getComputedStyle(this.character.nativeElement).left);
        if (left > 0) {
            this.character.nativeElement.style.left = left - 2 + "px";
        }
    }

    moveRight() {
        var left = parseInt(window.getComputedStyle(this.character.nativeElement).left);
        if (left < 380) {
            this.character.nativeElement.style.left = left + 2 + "px";
        }
    }

    //controls to get the bird to move
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
        }
    }

    //stops the bird from moving when key is lifted up
    @HostListener('window:keyup', ['$event'])
    keyEventStop() {
        clearInterval(this.interval)
        this.both=0;
    }

    //hit detection (checks to see if the user lost)
    checkCollision() {
        var characterLeft = parseInt(window.getComputedStyle(this.character.nativeElement).left);

        var blockTop = parseInt(window.getComputedStyle(this.block.nativeElement).top);

        var blockTop2 = parseInt(window.getComputedStyle(this.block2.nativeElement).top);

        var blockTop3 = parseInt(window.getComputedStyle(this.block3.nativeElement).top);

        // var blockTop4 = parseInt(window.getComputedStyle(this.block4.nativeElement).top);

        if (blockTop > 531 && blockTop < 535 && characterLeft >= 20) {
            alert("boom");
            this.block.nativeElement.classList.add('none');
            this.hole.nativeElement.classList.add('none');
            this.block2.nativeElement.classList.add('none');
            this.hole2.nativeElement.classList.add('none');
            this.block3.nativeElement.classList.add('none');
            this.hole3.nativeElement.classList.add('none');
            this.block4.nativeElement.classList.add('none');
            this.block5.nativeElement.classList.add('none');
            this.gameOver = true;
        }

        if (blockTop2 > 531 && blockTop2 < 535 && (characterLeft >= 290 || characterLeft <= 210)) {
            alert("boom");
            this.block.nativeElement.classList.add('none');
            this.hole.nativeElement.classList.add('none');
            this.block2.nativeElement.classList.add('none');
            this.hole2.nativeElement.classList.add('none');
            this.block3.nativeElement.classList.add('none');
            this.hole3.nativeElement.classList.add('none');
            this.block4.nativeElement.classList.add('none');
            this.block5.nativeElement.classList.add('none');
            this.gameOver = true;
        }

        if (blockTop3 === 531 && (characterLeft >= 182 || characterLeft <= 102)) {
            alert("boom");
            this.block.nativeElement.classList.add('none');
            this.hole.nativeElement.classList.add('none');
            this.block2.nativeElement.classList.add('none');
            this.hole2.nativeElement.classList.add('none');
            this.block3.nativeElement.classList.add('none');
            this.hole3.nativeElement.classList.add('none');
            this.block4.nativeElement.classList.add('none');
            this.block5.nativeElement.classList.add('none');
            this.gameOver = true;
        }

        // if (blockTop4 === 530 && (characterLeft >= 140 || characterLeft <= 60)) {
        //     alert("boom");
        //     this.block.nativeElement.classList.add('none');
        //     this.hole.nativeElement.classList.add('none');
        //     this.block2.nativeElement.classList.add('none');
        //     this.hole2.nativeElement.classList.add('none');
        //     this.block3.nativeElement.classList.add('none');
        //     this.hole3.nativeElement.classList.add('none');
        //     this.block4.nativeElement.classList.add('none');
        //     this.hole4.nativeElement.classList.add('none');
        // }
    }

    startGame() {
        this.begin = false;
        setInterval(() => { this.checkCollision() }, 1);
    }

    //resets the game
    reset() {
        this.block.nativeElement.classList.remove('none');
        this.hole.nativeElement.classList.remove('none');
        this.block2.nativeElement.classList.remove('none');
        this.hole2.nativeElement.classList.remove('none');
        this.block3.nativeElement.classList.remove('none');
        this.hole3.nativeElement.classList.remove('none');
        this.block4.nativeElement.classList.remove('none');
        this.block5.nativeElement.classList.remove('none');
        this.gameOver = false;
    }

    // createHole() {
    //     const block = this.renderer.createElement('div');
    //     const hole = this.renderer.createElement('div');
    //     block.setAttribute('class', 'block');
    //     hole.setAttribute('class', 'hole');
    //     block.setAttribute('id', 'block');
    //     hole.setAttribute('id', 'hole');
    //     hole.style.left = this.random + "px";
    //     this.renderer.appendChild(this.el.nativeElement, block);
    //     this.renderer.appendChild(this.el.nativeElement, hole);
    //     this.hole.nativeElement.style.left = this.random + "px";
    //     console.log(this.hole.nativeElement.style.left);
    // }

}