import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.page.html',
  styleUrls: ['./dogs.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class DogsPage {
  imagemDog: string = '';
  carregando: boolean = false;
  erro: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  carregarDog() {
    this.carregando = true;
    this.erro = '';
    
    this.http.get<any>('https://dog.ceo/api/breeds/image/random')
      .subscribe({
        next: (data) => {
          this.imagemDog = data.message;
          this.carregando = false;
        },
        error: (error) => {
          this.erro = 'Falha ao carregar a foto do cachorro';
          this.carregando = false;
        }
      });
  }

  onImageLoad() {
    console.log('Imagem carregada com sucesso!');
  }

  onImageError() {
    this.erro = 'Erro ao carregar a imagem';
  }

  // Navegação para outras páginas
  goToIdentificacao() {
    this.router.navigateByUrl('/identificacao');
  }

  goToHome() {
    this.router.navigateByUrl('/');
  }

  ionViewDidEnter() {
    if (!this.imagemDog) {
      this.carregarDog();
    }
  }
}
