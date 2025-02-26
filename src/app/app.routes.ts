import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {AuthGuard} from './core/guards/auth.guard';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {UserComponent} from './components/user/user.component';
import {AddEditUserComponent} from './components/user/add-edit-user/add-edit-user.component';
import {DepartmentComponent} from './components/department/department.component';
import {AddEditDepartmentComponent} from './components/department/add-edit-department/add-edit-department.component';
import {EmployeeComponent} from './components/employee/employee.component';
import {AddEditEmployeeComponent} from './components/employee/add-edit-employee/add-edit-employee.component';
import {LogsComponent} from './components/logs/logs.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  // App Components
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/admin/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'users',
        component: UserComponent,
      },
      {
        path: 'users/add-edit',
        component: AddEditUserComponent,
      },
      {
        path: 'users/add-edit/:id',
        component: AddEditUserComponent,
      },
      {
        path: 'departments',
        component: DepartmentComponent,
      },
      {
        path: 'departments/add-edit',
        component: AddEditDepartmentComponent,
      },
      {
        path: 'departments/add-edit/:id',
        component: AddEditDepartmentComponent,
      },
      {
        path: 'employees',
        component: EmployeeComponent,
      },
      {
        path: 'employees/add-edit',
        component: AddEditEmployeeComponent,
      },
      {
        path: 'employees/add-edit/:id',
        component: AddEditEmployeeComponent,
      },
      {
        path: 'logs',
        component: LogsComponent,
      },
    ]
  }
];
