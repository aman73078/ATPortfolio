import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AboutComponent } from './layout/components/about/about.component';
import { EducationComponent } from './layout/components/education/education.component';
import { ContactComponent } from './layout/components/contact/contact.component';
import { SkillsComponent } from './layout/components/skills/skills.component';
import { ProjectsComponent } from './layout/components/projects/projects.component';
import { ExperianceComponent } from './layout/components/experiance/experiance.component';

export const routes: Routes = [
    {path:'',redirectTo:'overview/about', pathMatch:'full'},
    {path:'overview', component:LayoutComponent,
        children:[
            {path:'about', component:AboutComponent},
            {path:'education', component:EducationComponent},
            {path:'contact', component:ContactComponent},
            {path:'skills', component:SkillsComponent},
            {path:'projects', component:ProjectsComponent},
            {path:'experience', component:ExperianceComponent},
        ]
    }
];
