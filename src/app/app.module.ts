import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConsultaComponent } from './conta/consulta/consulta.component';
import { CadastroComponent} from './conta/cadastro/cadastro.component';

import {routing} from './../app.routes';


import {ConfigService} from './services/config.service';
import {ContaService} from './services/conta.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ConsultaComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [ConfigService,ContaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
