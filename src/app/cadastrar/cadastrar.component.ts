import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})

export class CadastrarComponent {

  items = [
    { label: 'java', isSelected: false },
    { label: 'mysql', isSelected: false },
    { label: 'spring', isSelected: false },
    { label: 'postgres', isSelected: false },
    { label: 'python', isSelected: false },
    { label: 'nodejs', isSelected: false },
    { label: 'angular', isSelected: false },
    { label: 'scrum', isSelected: false }
  ];

  itensSelecionados: any[] = [];
  adicionarItem(item: any) {
    const itemIndex = this.itensSelecionados.findIndex((i) => i.label === item.label);

    if (itemIndex === -1) {
      this.itensSelecionados.push(item);
      item.isSelected === true;
    } else {
      this.itensSelecionados.splice(itemIndex, 1);
    }
  }

  mostrarLista() {
    console.log(this.itensSelecionados);
    this.itensSelecionados;
  }
}
