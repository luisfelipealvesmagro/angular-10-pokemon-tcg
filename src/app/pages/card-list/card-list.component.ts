import { Component, OnInit } from '@angular/core';
import { CardListService } from './card-list.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  form: FormGroup;
  cards: any;
  cardsCopy: any;
  page = 1;

  constructor(
    private fb: FormBuilder,
    private cardListService: CardListService
  ) { }

  ngOnInit(): void {
    this.getCards();
    this.buildForm();
  }

  private getCards(): void {
    this.cardListService.getCards().subscribe(data => {
      this.cards = data.cards;
      this.cards = this.cards.sort((a, b) => (a.name > b.name) ? 1 : -1);
      this.cardsCopy = this.cards;
    });
  }

  private buildForm(): void {
    this.form = this.fb.group({
      search: [null]
    });
  }

  public submitForm(): void {
    this.searchPokemon();
  }

  public searchPokemon(): void {
    this.cards = this.cardsCopy;
    if (this.form.value.search) {
      this.cards = this.cards.filter((card: any) => card.name.toLowerCase().includes(this.form.value.search));
      this.page = 1;
    }
  }

}
