import { NgModule } from '@angular/core';

import { CardDetailRoutingModule } from './card-detail-routing.module';

import { CoreModule } from '../../../app/core/core.module';

import { CardDetailComponent } from './card-detail.component';

@NgModule({
  declarations: [
    CardDetailComponent
  ],
  imports: [
    CoreModule,
    CardDetailRoutingModule,
  ]
})

export class CardDetailModule { }
