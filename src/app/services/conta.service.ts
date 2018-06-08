import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import {Conta} from '../services/conta';
import {ConfigService} from './config.service';

@Injectable()
export class ContaService {

    private baseUrlService:string = '';
    private headers:Headers;
    private options:RequestOptions;

    constructor(private http: Http,
                private configService: ConfigService) { 
        
        /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
        this.baseUrlService = configService.getUrlService() + '/conta/';

        /*ADICIONANDO O JSON NO HEADER */
        this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });                
        this.options = new RequestOptions({ headers: this.headers });
    }

    /**CONSULTA TODAS AS CONTAS CADASTRADAS */
    getContas(){        
        return this.http.get(this.baseUrlService).map(res => res.json());
    }

    /**ADICIONA UMA NOVA CONTA */
    addConta(conta: Conta){
        
        return this.http.post(this.baseUrlService, JSON.stringify(conta),this.options)
        .map(res => res.json());
    }
    /**EXCLUI UMA CONTA */
    excluirConta(id:number){

        return this.http.delete(this.baseUrlService + id).map(res => res.json());
    }

    /**CONSULTA UMA CONTA PELO ID */
    getConta(id:number){
     
        return this.http.get(this.baseUrlService + id).map(res => res.json());
    }

    /**ATUALIZA INFORMAÇÕES DA CONTA */
    atualizarConta(conta:Conta){

        return this.http.put(this.baseUrlService, JSON.stringify(conta),this.options)
        .map(res => res.json());
    }

}