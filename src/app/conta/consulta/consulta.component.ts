import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import {ContaService} from '../../services/conta.service';

import {Conta} from '../../services/conta';

import {Response} from '../../services/response';

@Component({
    selector: 'app-consulta-conta',
    templateUrl: './consulta.component.html',
    styleUrls:["./consulta.component.css"]
  })
  export class ConsultaComponent implements OnInit {
  
    private contas: Conta[] = new Array();
    private titulo: string;

    constructor(private contaService: ContaService,
                private router: Router){}
  
    ngOnInit() {
    
      this.titulo = "Registros Cadastrados";

      /*CHAMA O SERVIÇO E RETORNA TODAS AS CONTAS CADASTRADAS */
      this.contaService.getContas().subscribe(res => this.contas = res);
    }

    /**EXCLUI UM REGISTRO QUANDO CLICAMOS NA OPÇÃO EXCLUIR DE UMA 
     * LINHA DA TABELA*/
    excluir(id:number, index:number):void {
      
      if(confirm("Deseja realmente excluir esse registro?")){
      
        /*CHAMA O SERVIÇO PARA REALIZAR A EXCLUSÃO */
        this.contaService.excluirConta(id).subscribe(response => {
              let res:Response = <Response>response;
              if(res.codigo == 1){
                alert(res.mensagem);
                this.contas.splice(index,1);
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

    editar(id:number):void{

      this.router.navigate(['/cadastro-conta',id]);
      
    }
  
  }