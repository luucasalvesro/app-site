import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import {ContaService} from '../../services/conta.service';

import {Conta} from '../../services/conta';

import {Response} from '../../services/response';

import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-cadastro-conta',
    templateUrl: './cadastro.component.html',
    styleUrls:["./cadastro.component.css"]
  })
  export class CadastroComponent implements OnInit {
  
    private titulo:string;
    private conta:Conta = new Conta();

    constructor(private contaService: ContaService,
                private router: Router,
                private activatedRoute: ActivatedRoute){}
  
    ngOnInit() {
      
      this.activatedRoute.params.subscribe(parametro=>{
        
        
        if(parametro["id"] == undefined){
          
          this.titulo = "Novo Cadastro de Conta";
        }
        else{

          this.titulo = "Editar Cadastro de Conta";
          this.contaService.getConta(Number(parametro["id"])).subscribe(res => this.conta = res);
        }
      

      });      
    }
    salvar():void {
    
      if(this.conta.id == undefined){
        
        /*CHAMA O SERVIÇO PARA ADICIONAR UMA NOVA CONTA */
        this.contaService.addConta(this.conta).subscribe(response => {
            
           let res:Response = <Response>response;
              
           if(res.codigo == 1){
            alert(res.mensagem);
            this.conta = new Conta();
           }
           else{
             alert(res.mensagem);
           }
         },
         (erro) => {                    
            alert(erro);
         });

      }
      else{

        /*ATUALIZAR AS INFORMAÇÕES DE UM REGISTRO EXISTENTE */
        this.contaService.atualizarConta(this.conta).subscribe(response => {

        let res:Response = <Response>response;
              
        if(res.codigo == 1){
          alert(res.mensagem);
          this.router.navigate(['/consulta-conta']);
        }
         else{
           alert(res.mensagem);
         }
       },
       (erro) => {                                   
          alert(erro);
       });
      }

    }
  
  }