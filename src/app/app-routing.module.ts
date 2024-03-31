import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'contato', component: ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
