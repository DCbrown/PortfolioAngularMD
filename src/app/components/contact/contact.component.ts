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

  form_name: string;
  form_email: string;
  form_msg: string;

  public data:any=[]                     
  
  constructor(private fb: FormBuilder, private http: HttpClient ) { 

  
  }

  ngOnInit(){
    
  }

  click(){
    let alert_msg = document.getElementById('show');
    let formDiv = document.getElementById('form');
    alert_msg.classList.remove("hidden");
    formDiv.classList.add("hidden");
    
  }

}



