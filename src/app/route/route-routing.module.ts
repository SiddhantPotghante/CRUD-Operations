import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from '../homepage/homepage.component';
import { CreateComponent } from '../create/create.component';
import { ReadComponent } from '../read/read.component';
import { UpdateComponent } from '../update/update.component';
import { DeleteComponent } from '../delete/delete.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'home', component: HomepageComponent  },
  { path: 'showstudents', component:  ReadComponent },
  { path: 'addstudent', component: CreateComponent  },
  { path: 'deletestudent', component: DeleteComponent  },
  { path: 'updatestudent', component: UpdateComponent  }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
