import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-identificacao',
  templateUrl: './identificacao.page.html',
  styleUrls: ['./identificacao.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class IdentificacaoPage {
  
  // Dados do aluno
  aluno = {
    nome: 'Seu Nome Completo',
    turma: 'ADS-2025-2',
    unidade: 'Centro Universitário Augusto Motta',
    horario: '19:00 - 22:30',
    periodo: 'Noite',
    curso: 'Análise e Desenvolvimento de Sistemas',
    semestre: '2º Semestre de 2025'
  };

  constructor() {}
}