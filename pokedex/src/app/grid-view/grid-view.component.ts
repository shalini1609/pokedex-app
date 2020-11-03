import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../commonservice';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
  pokemons: any;
  pokemonDetailedArray: any = Array;
  @Input('pokedoxList') pokedoxList: any = Array;
  constructor(private commonservice: CommonService) { }

  ngOnInit(): void {
    const self = this;
    self.getImage();
  }
  getImage() {
    const self = this;
    self.pokemonDetailedArray = [];
    self.pokedoxList['results'].forEach(ele => {
      self.commonservice.getPokemonDetails(ele['url']).then(_result => {
        if (_result['sprites'] !== null) {
          ele['image'] = _result['sprites']['front_default']
          self.pokemonDetailedArray.push(ele);
          if (self.pokemonDetailedArray.length == self.pokedoxList['results'].length) {
            localStorage.clear();
            localStorage.setItem("pokemonList", JSON.stringify(self.pokedoxList))
          }
        }
      })
    })
  }
  deletePokemon(index) {
    const self = this;
    let ans = confirm("Are you sure, you want to delete this record")
    if (ans == true) {
      self.pokedoxList['results'].splice(index, 1);
    }
    localStorage.clear()
    localStorage.setItem("pokemonList", JSON.stringify(self.pokedoxList))
  }
}
