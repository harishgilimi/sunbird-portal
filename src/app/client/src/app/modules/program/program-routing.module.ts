import { ProgramsService } from '@sunbird/core';
import { ListAllProgramsComponent } from './components';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '', component: ListAllProgramsComponent, canActivate: [ProgramsService]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramRoutingModule { }
