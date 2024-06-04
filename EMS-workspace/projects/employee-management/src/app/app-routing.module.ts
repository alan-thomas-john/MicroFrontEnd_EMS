import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const REGISTRATION_URL = "http://localhost:4300/remoteEntry.js";
const VIEW_EMPLOYEES_URL = "http://localhost:4201/remoteEntry2.js";

const routes: Routes = [
  {path:'', redirectTo : '/search', pathMatch: 'full' },
  {path: 'search',component:SearchComponent},
  {path: 'registrationForm',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: REGISTRATION_URL,
        remoteName: "registration",
        exposedModule: "./RegistrationFormModule " 
      }).then(m => m.RegistrationFormModule ).catch(err => console.log(err));
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeCompArr = [SearchComponent];