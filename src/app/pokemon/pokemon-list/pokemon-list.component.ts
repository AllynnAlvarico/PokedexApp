import {OnChanges, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DataService} from "../../pokemon-data/data.service";
import {Pokemon} from "pokenode-ts";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit{
  public pokemons: Pokemon[] = [];
  pokemonCount: number = 0;
  progress = 0;
  constructor(
    private dataService: DataService,
    // private cdr: ChangeDetectorRef
  ) {
  }
  ngOnInit() {
    console.log("Hello");
    this.getPokemons();
  }
  getPokemons() {
    this.dataService.getAllPokemons().subscribe((res: any) => {
      this.pokemonCount = 0;
      this.pokemonCount = res.count;
      console.log(this.pokemonCount);

      res.results.forEach((result: any) => {
        this.dataService.getMoreData(result.name)
          .subscribe((uniqResponse: any) => {
            this.pokemons.push(uniqResponse);
            console.log(uniqResponse.name);
            // this.progress = 0;
            // this.updateProgress();
      //       console.log(this.progress);

            // console.log(uniqResponse);
          });
      });
    });
  }
  updateProgress(){
    this.progress = (this.pokemons.length / this.pokemonCount) * 100;
    // this.cdr.detectChanges();
  }
  getUpdateProgress(){
    return this.progress;
  }
}
