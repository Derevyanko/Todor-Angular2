import { Component } from '@angular/core';
import {
    NgForm,
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl
} from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'uploader',
    templateUrl: 'uploader.component.html',
    styles:[` 
        uploader-file {
       width:100%;
        }
    `]
})

export class UploaderFileComponent {

    readUrl(event) {
        // imageSrc: string = '';
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.onload = (event) => {
                this.url = event.target.result;
                console.log(this.url);
            }

            reader.readAsDataURL(event.target.files[0]);
        }
    }
}