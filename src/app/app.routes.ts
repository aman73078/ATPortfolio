import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AboutComponent } from './layout/components/about/about.component';
import { EducationComponent } from './layout/components/education/education.component';

export const routes: Routes = [
    {path:'',redirectTo:'overview/about', pathMatch:'full'},
    {path:'overview', component:LayoutComponent,
        children:[
            {path:'about', component:AboutComponent},
            {path:'education', component:EducationComponent},
        ]
    }
];
