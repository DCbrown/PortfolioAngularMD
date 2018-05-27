import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/services.service';
import { Projects } from '../../models/Projects';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects:Projects[];
  project:Projects
  id:any;
  sub:any;
  

  constructor(private dataService: DataService, private router: Router) { }
  
  ngOnInit() {
    this.projects = this.dataService.getProjects();
    
  }

  onClick () {
    this.id = this.project.id
    this.router.navigate(['/project', 'id']);
  }

}
