import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [],
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.scss'
})
export class CartaComponent{


  @Output() gira: EventEmitter<boolean> =  new EventEmitter()

  giraCarta(){
    this.gira.emit(!this._isFlipped)
  }

  _parola_mostrata: string;
  _isFlipped: boolean = true;

  @Input()
  set parola_mostrata(value: string) {
    this._parola_mostrata = value;
    // Resetta lo stato della carta a non girata ogni volta che il valore di parola_corretta viene aggiornato
    this.isFlipped = true;
  }

  get parola_mostrata(): string {
    return this._parola_mostrata;
  }

  @Input()
  set isFlipped(value: boolean){
    this._isFlipped = value;
  }

  get isFlipped():boolean{
    return this._isFlipped
  }


  flipCard() {
    this.giraCarta()
    //this.isFlipped = !this.isFlipped;
  }


}
