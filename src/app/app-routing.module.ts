import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { PeopleComponent } from './components/people/people.component';
import { FeedComponent } from './components/feed/feed.component';
import { ExperianceComponent } from './components/experiance/experiance.component';
import { ToolsComponent } from './components/tools/tools.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'testimonials', component: TestimonialsComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'feed', component:FeedComponent},
  //{path: 'experience', component:ExperianceComponent},
  {path: 'tools', component:ToolsComponent}
];

@NgModule({
  exports:[RouterModule],
  imports: [
   RouterModule.forRoot(routes) 
  ]
})
export class AppRoutingModule { }
