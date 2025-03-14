import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AwardsComponent } from './awards/awards.component';
import { DossierComponent } from './dossier/dossier.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { InterestsComponent } from './interests/interests.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [  
  { path: 'about', component: AboutComponent}, 
  { path: 'experience', component: ExperienceComponent}, 
  { path: 'education', component:EducationComponent }, 
  { path: 'skills', component: SkillsComponent},  
  { path: 'awards', component: AwardsComponent}, 
  { path: 'interests', component: InterestsComponent}, 
  { path: 'projects', component: ProjectsComponent}, 
  { path: 'dossier', component: DossierComponent}, 
  {path : '',   redirectTo: '/about', pathMatch: 'full' }, 
  {path : '**', component: AboutComponent } 

]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 