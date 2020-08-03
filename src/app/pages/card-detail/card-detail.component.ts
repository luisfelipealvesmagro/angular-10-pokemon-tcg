import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardDetailService } from './card-detail.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  idCard = this.activatedRoute.snapshot.paramMap.get('id');
  card: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cardDetailService: CardDetailService
  ) { }

  ngOnInit(): void {
    this.getCard();
  }

  private getCard(): void {
    this.cardDetailService.getCard(this.idCard).subscribe(data => this.card = data.card);
  }

}
