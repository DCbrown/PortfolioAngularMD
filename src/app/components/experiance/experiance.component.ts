import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/services.service';
import { Experience } from '../../models/experience'

@Component({
  selector: 'app-experiance',
  templateUrl: './experiance.component.html',
  styleUrls: ['./experiance.component.scss']
})
export class ExperianceComponent implements OnInit {

  experience:Experience[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.experience = this.dataService.getExperience();
  }

}
