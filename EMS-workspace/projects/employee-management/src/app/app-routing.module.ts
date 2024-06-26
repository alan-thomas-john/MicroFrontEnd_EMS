import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const REGISTRATION_URL = "http://localhost:4300/registerEntry.js";
const VIEW_EMPLOYEES_URL = "http://localhost:4201/viewEntry.js";

const routes: Routes = [
  {
    path: 'registrationForm',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: REGISTRATION_URL,
        remoteName: "registration",
        exposedModule: "./RegistrationFormModule"
      }).then(m => m.RegistrationFormModule).catch(err => console.log(err));
    }
  },
  {
    path: 'viewEmployee',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: VIEW_EMPLOYEES_URL,
        remoteName: "viewEmployees",
        exposedModule: "./EmployeeListModule"
      }).then(m => m.EmployeeListModule).catch(err => console.log(err));
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeCompArr = [SearchComponent];
