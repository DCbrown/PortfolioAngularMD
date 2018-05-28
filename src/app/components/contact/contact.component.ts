import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  rForm: FormGroup;
  post:any;
  public data:any=[]                     
 
  name:string = '';
  email:string = '';
  message:string = '';

  form_name;
  form_email;
  form_msg;

  submit:boolean = false;
  
  constructor(private fb: FormBuilder, private http: HttpClient ) { 

   

  }

  ngOnInit(){
    this.createForm();
  }

  createForm(){
    this.rForm = this.fb.group({
      'name' : ['', Validators.required],
      'email': ['', Validators.required],
      'message' : ['', Validators.required]
    });
  }
  
  send(){
    let alert_msg = document.getElementById('alert-msg');
    alert_msg.classList.remove("hidden");
  }  

}



