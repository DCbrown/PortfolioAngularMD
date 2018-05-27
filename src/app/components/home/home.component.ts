import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  flipOut;
  slideOutLeft;
  slideOutRight;
  bounceOutUp;

  constructor(private router: Router) { }

  ngOnInit() {
    this.ngAfterContentInit();
  }

  projectEvent(){
    this.flipOut.className = "animated flipOutY";
    this.slideOutLeft.className = "animated slideOutLeft";
    this.slideOutRight.className = "animated slideOutRight";
    this.bounceOutUp.className = "animated bounceOutDown";
    setTimeout(()=>{ 
      this.router.navigate(['/projects']);
    }, 1000);
  }

  ngAfterContentInit() {
    this.flipOut = document.getElementById('pic');
    this.slideOutLeft = document.getElementById('slideOutLeft');
    this.slideOutRight = document.getElementById('slideOutRight');
    this.bounceOutUp = document.getElementById('bounceOutUp');
  }


}
