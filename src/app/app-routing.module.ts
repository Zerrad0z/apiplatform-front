import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { ApidocComponent } from './apidoc/apidoc.component';

const routes: Routes = [
  {path: "api", component : ApiComponent},
  {path: "doc", component : ApidocComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
