import { Component, OnInit } from '@angular/core';
import { CardListService } from './card-list.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

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
      search: ['']
    });
    this.handleSearch();
  }

  private handleSearch(): void {
    this.form.get('search').valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe((text: string) => {
      this.searchPokemon(text);
    });
  }

  public searchPokemon(text: string): void {
    this.cards = this.cardsCopy;
    if (text) {
      this.cards = this.cards.filter((card: any) => card.name.toLowerCase().includes(text.toLowerCase()));
      this.page = 1;
    }
  }

}
