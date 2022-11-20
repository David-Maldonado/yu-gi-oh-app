import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id!:string;
  card$!: Observable<any>;
  constructor(
    private route: ActivatedRoute,
    private cardService : CardService
  ) { }

  ngOnInit(): void {
    //!forma de saber cual es el parametro (en este caso el id que se pasa a la ruta) actual que aparece en la url al cargar
    this.id = this.route.snapshot.paramMap.get('id') || "";
    
    this.card$ =  this.cardService.obtenerCarta(this.id);

  }

}
