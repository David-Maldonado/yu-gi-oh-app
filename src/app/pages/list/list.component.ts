import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CardService } from '../../services/card.service';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  cards: any[] = [];
  offSet:number = 0;

  constructor(
    private cardService : CardService
  ) { }

  cardTextFormControl = new FormControl('');

  ngOnInit(): void {
    this.cardTextFormControl.valueChanges.pipe(
      //emite la respuesta al suscribe luego de 1 segundo de realizar el evento del form reactivo
      debounceTime(1000)
    )
    .subscribe((res)=> {
      this.cards = [];
      this.searchCards(res);
    })
   this.searchCards(); 
  }

  onScroll(){
    this.offSet +=100;
    this.searchCards();
  }

  
  searchCards(cardName:string | null = null){
    this.cardService.obtenerCartas(cardName, this.offSet).subscribe(
      //!hace como un merge entre lo que ya habia con lo que viene en la nueva llamada
      (res) => this.cards = [...this.cards, ...res])
  }

  

}
