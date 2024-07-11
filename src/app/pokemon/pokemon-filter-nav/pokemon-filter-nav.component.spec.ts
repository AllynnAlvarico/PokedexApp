import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFilterNavComponent } from './pokemon-filter-nav.component';

describe('PokemonFilterNavComponent', () => {
  let component: PokemonFilterNavComponent;
  let fixture: ComponentFixture<PokemonFilterNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonFilterNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonFilterNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
