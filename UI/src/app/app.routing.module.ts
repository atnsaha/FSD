import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './addemployee/addemployee.component';
import { EditEmployeeComponent } from './editemployee/editemployee.component';

const routes: Routes = [
    {path: 'addemployee', component: AddEmployeeComponent},
    {path: 'editemployee', component: EditEmployeeComponent},
    {path: '', redirectTo: 'addemployee', pathMatch: 'full'},
];

@NgModule({
    declarations: [
        AddEmployeeComponent,
        EditEmployeeComponent
    ],

    imports: [
        RouterModule.forRoot(routes)
      ],
      exports: [
            RouterModule
      ]
  })

  export class AppRoutingModule { }