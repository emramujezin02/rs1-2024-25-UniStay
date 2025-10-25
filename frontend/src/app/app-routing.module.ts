import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [



  // 🎓 Student (dashboard, announcements, applications, profile...)
  {
    path: 'student',
    loadChildren: () => import('./modules/student/student-module').then(m => m.StudentModule)
  },

  // 🧑‍💼 Employee (manage rooms, faults, inventory, etc.)
  {
    path: 'employee',
    loadChildren: () => import('./modules/employee/employee-module').then(m => m.EmployeeModule)
  },

  // 🧑‍💻 Administrator (manage users, announcements, reports...)
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin-module').then(m => m.AdminModule)
  },

  // 🚫 Wildcard — ako neko unese pogrešan URL
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
