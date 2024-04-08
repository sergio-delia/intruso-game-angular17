import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartaComponent } from '../carta/carta.component';
import { lista_parole } from '../lista_parole';


@Component({
  selector: 'app-start',
  standalone: true,
  imports: [ CartaComponent ],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent implements OnInit{

  giocatori: any
  current_player: number = 1
  intruso: number = 1;
  parola_corretta: string;
  parola_mostrata: string;
  girato: boolean = true;
  selectedWord: string;


  constructor( private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.giocatori = params['number']
      console.log(this.giocatori);

      if (this.giocatori <= 2 || !this.giocatori){
        this.router.navigate(['home'])
      }

      this.cambiaParola();
      this.assegnaIntruso();
      this.checkPlayer();

    }
  )
  }

giocaAncora(){
  this.cambiaParola()
  this.assegnaIntruso()
  this.current_player = 1
}

cambiaParola(){
  const randomIndex = Math.floor(Math.random() * lista_parole.length);
  this.parola_corretta = lista_parole[randomIndex];
  this.parola_mostrata = this.parola_corretta;
}

assegnaIntruso(){
  this.intruso = Math.floor(Math.random() * this.giocatori) + 1;
}


checkPlayer(){
  if(this.current_player == this.intruso){
    this.parola_mostrata = 'Intruso';
  } else {
    this.parola_mostrata = this.parola_corretta;
  }
}

backPlayer(){
  this.girato = true;
  setTimeout(() => {
    this.current_player-=1
    this.checkPlayer();
  }, 1000);
}

nextPlayer(){
  this.girato = true;
  setTimeout(() => {
    this.current_player+=1
    this.checkPlayer();
  }, 1000);
}

backToHome(){
  this.router.navigate(['/home'])
}



onGira(evento){
  this.girato = !this.girato
}


}
