import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AboutComponent } from './layout/components/about/about.component';

export const routes: Routes = [
    {path:'',redirectTo:'overview', pathMatch:'full'},
    {path:'overview', component:LayoutComponent,
        children:[
            {path:'about', component:AboutComponent}
        ]
    }
];
