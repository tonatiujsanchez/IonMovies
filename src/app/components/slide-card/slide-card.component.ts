import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slide-card',
  templateUrl: './slide-card.component.html',
  styleUrls: ['./slide-card.component.scss'],
})
export class SlideCardComponent implements OnInit {

  @Input() peliculaImg: string;
  @Input() idPelicula: number;

  constructor( public modalController: ModalController ) { }

  ngOnInit() {}

  async verDetalle(){

    const modal = await this.modalController.create({
      component: DetalleComponent,
      componentProps: {
        'id': this.idPelicula,
      }
    });

    (await modal).present();
    
  }

}
