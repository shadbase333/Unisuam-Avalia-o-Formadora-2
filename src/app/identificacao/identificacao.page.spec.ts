import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-identificacao',
  templateUrl: './identificacao.page.html',
  styleUrls: ['./identificacao.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class IdentificacaoPage {
  // Caminho da foto, você pode trocar facilmente
  fotoAluno: string = 'assets/20250728_105901.jpg';

  // Informações do aluno (opcional, para facilitar alteração futura)
  nome: string = 'Jean Silva Aragão';
  cargo: string = 'Desenvolvedor Mobile';
  codigoTurma: string = '24104305';
  unidade: string = 'CG1';
  horario: string = '8:30-11:00';
  

  constructor(private router: Router) {}

  // Navegação para a página Dogs
  goToDogs() {
    this.router.navigateByUrl('/dogs');
  }

  // Voltar para a home
  goToHome() {
    this.router.navigateByUrl('/');
  }
}
