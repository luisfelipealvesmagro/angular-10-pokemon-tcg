import { NgModule } from '@angular/core';

import { CardListRoutingModule } from './card-list-routing.module';

import { CoreModule } from '../../../app/core/core.module';

import { CardListComponent } from './card-list.component';

@NgModule({
  declarations: [
    CardListComponent
  ],
  imports: [
    CoreModule,
    CardListRoutingModule,
  ]
})

export class CardListModule { }
