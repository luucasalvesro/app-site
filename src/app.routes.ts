import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 

import { ConsultaComponent } from './app/conta/consulta/consulta.component';

import {CadastroComponent} from './app/conta/cadastro/cadastro.component';

import { HomeComponent } from './app/home/home.component';
 
const appRoutes: Routes = [
    { path: 'home',                    component: HomeComponent },
    { path: '',                        component: HomeComponent },
    { path: 'consulta-conta',         component: ConsultaComponent },
    { path: 'cadastro-conta',         component: CadastroComponent },
    { path: 'cadastro-conta/:id', component: CadastroComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);