import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  locador = false;

  constructor() { }

  ngOnInit() {
  }
  
  isLocador(e){
    this.locador = e.target.checked;
  }

}
