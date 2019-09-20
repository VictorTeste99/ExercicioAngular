import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SegundoComponeteComponent } from './segundo-componete/segundo-componete.component';
import { NgIfForComponent } from './ng-if-for/ng-if-for.component';
import { CrudComponent } from './Componentes/crud/crud.component';


const routes: Routes = [
{path: 'p-c', component: DataBindingComponent},
{path: 's-c', component: SegundoComponeteComponent},
{path: 'test', component: NgIfForComponent},
{path: 'geting', component: CrudComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
