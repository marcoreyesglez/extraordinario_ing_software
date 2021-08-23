import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaPaisesComponent } from './components/consulta-paises/consulta-paises.component';
import { FormPaisesComponent } from './components/form-paises/form-paises.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'home',component: HomeComponent},
  { path: 'consulta', component: ConsultaPaisesComponent },
  { path: 'nuevo', component: FormPaisesComponent },
  { path: 'edita/:pais_id', component: FormPaisesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
