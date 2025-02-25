import { Component } from '@angular/core';

@Component({
  selector: 'app-imagem',
  standalone: true,
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css']
})
export class ImagemComponent {
  imagens: string[] = ['/biscoito.png', '/biscoito-aberto.png'];
  imagemAtual: string;

  constructor() {
    this.imagemAtual = this.alternarImagem();
  }

  alternarImagem(): string {
    const ultimaImagem = localStorage.getItem('imagemAtual');
    const novaImagem = ultimaImagem === this.imagens[0] ? this.imagens[1] : this.imagens[0];
    localStorage.setItem('imagemAtual', novaImagem);
    return novaImagem;
  }
}
