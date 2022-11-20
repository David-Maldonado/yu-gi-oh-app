import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  //!El componente card es hijo dentro de list, asi que con input recibira parametros desde list para msotrar

  @Input() card!: any;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  irACard(){
    this.router.navigate([`./card/${this.card.id}`])
  }
}
