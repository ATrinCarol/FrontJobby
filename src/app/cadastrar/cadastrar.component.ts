import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})

export class CadastrarComponent {

  hab: Array<string> = [];

  selectedHab!: string;

  selectHab(hab: string) {
  this.selectedHab = hab; 
}

@ViewChildren('habs') itemsElements!: QueryList<ElementRef>;

  habs = [
    { label: 'Item 1', isSelected: false },
    { label: 'Item 2', isSelected: false },
    { label: 'Item 3', isSelected: false },
    // ... outros itens
  ];

  toggleHab(hab: any) {
    hab.isSelected = !hab.isSelected;
  }
}
