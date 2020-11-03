import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CommonService } from './commonservice';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pokedex';
  pokedoxs: any;
  view:number
  constructor(private commonservice: CommonService, private cookies: CookieService) {

  }
  ngOnInit() {
    
    const self = this;
    self.view=0;
    self.pokedoxs = JSON.parse(localStorage.getItem("pokemonList"));
    // console.log("pokemons",pokemons)
    if (self.pokedoxs !== null) {
      self.pokedoxs = self.pokedoxs;
    }
    else {
      self.commonservice.getPokedex('https://pokeapi.co/api/v2/pokemon?limit=151').then(_data => {
        localStorage.setItem("pokemonList", JSON.stringify(_data));
        self.pokedoxs = _data;
      });
    }
  }
}
