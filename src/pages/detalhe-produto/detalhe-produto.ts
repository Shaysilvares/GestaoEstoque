import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IProduto } from '../../../interfaces/IProduto';
import { ProdutoProvider } from '../../providers/produto/produto';

@IonicPage()
@Component({
  selector: 'page-detalhe-produto',
  templateUrl: 'detalhe-produto.html',
})
export class DetalheProdutoPage {
  public detalheProdutoId;
  public detalheProduto;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public produtoProvider: ProdutoProvider) {
  }

  ionViewDidLoad() {
    this.buscarProduto();
  }

buscarProduto() {
  this.detalheProdutoId = this.navParams.get("id");
  this.produtoProvider.buscarProdutoPorId(this.detalheProdutoId).then((data) => {
    console.log(data);
    this.detalheProduto = data;
  }).catch((e) => {
    console.log(e);
  })
}

}
