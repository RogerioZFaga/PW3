import { Component } from '@angular/core';

@Component({
  selector: 'app-frases',
  standalone: true,
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css']
})
export class FrasesComponent {
  frases: string[] = [
    "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
    "Viver é a coisa mais rara do mundo. A maioria das pessoas apenas existe.",
    "Há muitas razões para duvidar e uma só para crer.",
    "A normalidade é uma estrada pavimentada: é confortável andar, mas não crescem flores.",
    "Não deixe que o medo de falhar te impeça de viver a vida ao máximo e buscar seus sonhos.",
    "Ser original é ter a coragem de ser você mesmo, mesmo quando o mundo insiste em te moldar.",
    "A melhor forma de prever o futuro é criá-lo.",
    "Quando não souber para onde ir, siga o perfume dos seus sonhos.",
    "Assuma toda a responsabilidade sobre seus próprios ombros e saiba que você é o criador do seu próprio destino.",
    "Acredite em si mesmo e você será imparável."
  ];

  fraseAtual: string;

  constructor() {
    this.fraseAtual = this.sortearFraseDiferente();
  }

  sortearFraseDiferente(): string {
    const ultimaFrase = localStorage.getItem('fraseAtual');
    let novaFrase: string;

    do {
      const index = Math.floor(Math.random() * this.frases.length);
      novaFrase = this.frases[index];
    } while (novaFrase === ultimaFrase);

    localStorage.setItem('fraseAtual', novaFrase);
    return novaFrase;
  }
}
