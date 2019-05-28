import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BaixaEstoquePage } from './baixa-estoque';

@NgModule({
  declarations: [
    BaixaEstoquePage,
  ],
  imports: [
    IonicPageModule.forChild(BaixaEstoquePage),
  ],
})
export class BaixaEstoquePageModule {}
