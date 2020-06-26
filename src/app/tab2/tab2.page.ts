import { Component } from '@angular/core';
import { Historico } from '../models/Historico';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public historicos: Historico[] = [
  
    {dataHora: "25/06/2020 19:00", leitura: "Leitura 01"},
    {dataHora: "25/06/2020 19:30", leitura: "Leitura 02"},
    {dataHora: "25/06/2020 20:00", leitura: "Leitura 03"},
    {dataHora: "25/06/2020 20:30", leitura: "Leitura 04"},
    {dataHora: "26/06/2020 19:40", leitura: "Leitura 05"},

  ];

  constructor() {



  }



}
