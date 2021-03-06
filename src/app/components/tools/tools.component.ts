import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/services.service';
import { FrontEnd, BackEnd, Msc } from '../../models/Tools';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  frontEnd:FrontEnd[];
  backEnd:BackEnd[];
  msc:Msc[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.frontEnd = this.dataService.getFrontEnd();
    this.backEnd = this.dataService.getBackEnd();
    this.msc = this.dataService.getMsc();
  }

  

}
