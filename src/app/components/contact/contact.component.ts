import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {

  rForm: FormGroup;
  post:any;                     
 
  name:string = '';
  email:string = '';
  message:string = '';
  
  constructor(private fb: FormBuilder) { 

    this.rForm = fb.group({
      'name' : [null, Validators.required],
      'email': [null, Validators.required],
      'message' : [null, Validators.required]
    });

  }

 

}



