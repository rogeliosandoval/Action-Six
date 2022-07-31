import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ngbd-modal-content',
    template: `
      <div class="modal-header">
        <h4 class="modal-title mx-auto">Message Sent!</h4>
        <i class="fa fa-close float-right" style="font-size:30px; color:red; cursor:pointer;" (click)="activeModal.dismiss('Cross click')"></i>
      </div>
      <div class="modal-body">
        <p class="text-center">We will get back to you as soon as we can. Thank you!</p>
      </div>
      <div class="modal-footer d-flex justify-content-center">
        <div type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</div>
      </div>
    `,
    styles: ['']
})

export class NgbdModalContent {
    //   @Input() name: any;
  
    constructor(public activeModal: NgbActiveModal) {}
}

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']

})

export class Home {
    constructor(private modalService: NgbModal) {}

    contactForm = new FormGroup({
        Name: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]),
        Email: new FormControl('', [Validators.required, Validators.email]),
        Message: new FormControl('', [Validators.required, Validators.maxLength(3000)])
    });

    get Name() {
        return this.contactForm.get('Name');
    }

    get Email() {
        return this.contactForm.get('Email');
    }

    get Message() {
        return this.contactForm.get('Message');
    }

    onSubmit() {
        this.modalService.open(NgbdModalContent);
        console.log(this.contactForm.value);
        this.contactForm.reset();
    }

}