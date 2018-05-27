import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { PeopleComponent } from './components/people/people.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'testimonials', component: TestimonialsComponent},
  {path: 'people', component: PeopleComponent}
];

@NgModule({
  exports:[RouterModule],
  imports: [
   RouterModule.forRoot(routes) 
  ]
})
export class AppRoutingModule { }
