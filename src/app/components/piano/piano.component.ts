import { Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from "@angular/core";

@Component({
    selector: 'piano',
    templateUrl: './piano.component.html',
    styleUrls: ['./piano.component.scss']
})

export class Piano {
    @ViewChildren('key') keys!: QueryList<any>
    @ViewChild('Cnote', { static: true }) Cnote!: ElementRef;
    @ViewChild('Dbnote', { static: true }) Dbnote!: ElementRef;
    @ViewChild('Dnote', { static: true }) Dnote!: ElementRef;
    @ViewChild('Ebnote', { static: true }) Ebnote!: ElementRef;
    @ViewChild('Enote', { static: true }) Enote!: ElementRef;
    @ViewChild('Fnote', { static: true }) Fnote!: ElementRef;
    @ViewChild('Gbnote', { static: true }) Gbnote!: ElementRef;
    @ViewChild('Gnote', { static: true }) Gnote!: ElementRef;
    @ViewChild('Abnote', { static: true }) Abnote!: ElementRef;
    @ViewChild('Anote', { static: true }) Anote!: ElementRef;
    @ViewChild('Bbnote', { static: true }) Bbnote!: ElementRef;
    @ViewChild('Bnote', { static: true }) Bnote!: ElementRef;

    //Plans on refactoring this code to a more simplified version in the future. Just want to get the basic functionality working for presentation
    @HostListener('window:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {
        if(event.key == 'z'){
            this.Cnote.nativeElement.classList.add('white-active');
            let audio = new Audio();
            audio.src = "../../../assets/piano/notes/C.mp3";
            audio.load();
            audio.play();
            audio.addEventListener('ended', () => {
                this.Cnote.nativeElement.classList.remove('white-active');
            });
        }
        if(event.key == 'x'){
            this.Dnote.nativeElement.classList.add('white-active');
            let audio = new Audio();
            audio.src = "../../../assets/piano/notes/D.mp3";
            audio.load();
            audio.play();
            audio.addEventListener('ended', () => {
                this.Dnote.nativeElement.classList.remove('white-active');
            });
        }
        if(event.key == 'c'){
            this.Enote.nativeElement.classList.add('white-active');
            let audio = new Audio();
            audio.src = "../../../assets/piano/notes/E.mp3";
            audio.load();
            audio.play();
            audio.addEventListener('ended', () => {
                this.Enote.nativeElement.classList.remove('white-active');
            });
        }
        if(event.key == 'v'){
            this.Fnote.nativeElement.classList.add('white-active');
            let audio = new Audio();
            audio.src = "../../../assets/piano/notes/F.mp3";
            audio.load();
            audio.play();
            audio.addEventListener('ended', () => {
                this.Fnote.nativeElement.classList.remove('white-active');
            });
        }
        if(event.key == 'b'){
            this.Gnote.nativeElement.classList.add('white-active');
            let audio = new Audio();
            audio.src = "../../../assets/piano/notes/G.mp3";
            audio.load();
            audio.play();
            audio.addEventListener('ended', () => {
                this.Gnote.nativeElement.classList.remove('white-active');
            });
        }
        if(event.key == 'n'){
            this.Anote.nativeElement.classList.add('white-active');
            let audio = new Audio();
            audio.src = "../../../assets/piano/notes/A.mp3";
            audio.load();
            audio.play();
            audio.addEventListener('ended', () => {
                this.Anote.nativeElement.classList.remove('white-active');
            });
        }
        if(event.key == 'm'){
            this.Bnote.nativeElement.classList.add('white-active');
            let audio = new Audio();
            audio.src = "../../../assets/piano/notes/B.mp3";
            audio.load();
            audio.play();
            audio.addEventListener('ended', () => {
                this.Bnote.nativeElement.classList.remove('white-active');
            });
        }
        if(event.key == 's'){
            this.Dbnote.nativeElement.classList.add('black-active');
            let audio = new Audio();
            audio.src = "../../../assets/piano/notes/Db.mp3";
            audio.load();
            audio.play();
            audio.addEventListener('ended', () => {
                this.Dbnote.nativeElement.classList.remove('black-active');
            });
        }
        if(event.key == 'd'){
            this.Ebnote.nativeElement.classList.add('black-active');
            let audio = new Audio();
            audio.src = "../../../assets/piano/notes/Eb.mp3";
            audio.load();
            audio.play();
            audio.addEventListener('ended', () => {
                this.Ebnote.nativeElement.classList.remove('black-active');
            });
        }
        if(event.key == 'g'){
            this.Gbnote.nativeElement.classList.add('black-active');
            let audio = new Audio();
            audio.src = "../../../assets/piano/notes/Gb.mp3";
            audio.load();
            audio.play();
            audio.addEventListener('ended', () => {
                this.Gbnote.nativeElement.classList.remove('black-active');
            });
        }
        if(event.key == 'h'){
            this.Abnote.nativeElement.classList.add('black-active');
            let audio = new Audio();
            audio.src = "../../../assets/piano/notes/Ab.mp3";
            audio.load();
            audio.play();
            audio.addEventListener('ended', () => {
                this.Abnote.nativeElement.classList.remove('black-active');
            });
        }
        if(event.key == 'j'){
            this.Bbnote.nativeElement.classList.add('black-active');
            let audio = new Audio();
            audio.src = "../../../assets/piano/notes/Bb.mp3";
            audio.load();
            audio.play();
            audio.addEventListener('ended', () => {
                this.Bbnote.nativeElement.classList.remove('black-active');
            });
        }
    }

    C() {
        let audio = new Audio();
        audio.src = "../../../assets/piano/notes/C.mp3";
        audio.load();
        audio.play();
    }

    Db() {
        let audio = new Audio();
        audio.src = "../../../assets/piano/notes/Db.mp3";
        audio.load();
        audio.play();
    }

    D() {
        let audio = new Audio();
        audio.src = "../../../assets/piano/notes/D.mp3";
        audio.load();
        audio.play();
    }

    Eb() {
        let audio = new Audio();
        audio.src = "../../../assets/piano/notes/Eb.mp3";
        audio.load();
        audio.play();
    }

    E() {
        let audio = new Audio();
        audio.src = "../../../assets/piano/notes/E.mp3";
        audio.load();
        audio.play();
    }

    F() {
        let audio = new Audio();
        audio.src = "../../../assets/piano/notes/F.mp3";
        audio.load();
        audio.play();
    }

    Gb() {
        let audio = new Audio();
        audio.src = "../../../assets/piano/notes/Gb.mp3";
        audio.load();
        audio.play();
    }

    G() {
        let audio = new Audio();
        audio.src = "../../../assets/piano/notes/G.mp3";
        audio.load();
        audio.play();
    }

    Ab() {
        let audio = new Audio();
        audio.src = "../../../assets/piano/notes/Ab.mp3";
        audio.load();
        audio.play();
    }

    A() {
        let audio = new Audio();
        audio.src = "../../../assets/piano/notes/A.mp3";
        audio.load();
        audio.play();
    }

    Bb() {
        let audio = new Audio();
        audio.src = "../../../assets/piano/notes/Bb.mp3";
        audio.load();
        audio.play();
    }

    B() {
        let audio = new Audio();
        audio.src = "../../../assets/piano/notes/B.mp3";
        audio.load();
        audio.play();
    }

    //This code grabs the data value of all of the divs with id 'key'
    // test() {
    //     this.keys.toArray().forEach((key) => {
    //         console.log(key.nativeElement.dataset.note);
    //     });
    // }

}