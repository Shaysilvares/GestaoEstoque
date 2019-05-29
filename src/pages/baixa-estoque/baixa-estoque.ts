import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IProduto } from '../../../interfaces/IProduto';
import { ProdutoProvider } from '../../providers/produto/produto';
import { HomePage } from '../home/home';

/**
 * Generated class for the BaixaEstoquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-baixa-estoque',
  templateUrl: 'baixa-estoque.html',
})
export class BaixaEstoquePage {
  produto: IProduto;
  produtoId: IProduto
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public produtoProvider: ProdutoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BaixaEstoquePage');
    this.buscarProduto();
  }

  buscarProduto() {
    this.produtoId = this.navParams.get("id");
    this.produtoProvider.buscarProdutoPorId(this.produtoId).then((data) => {
      console.log(data);
      this.produto = data;
    }).catch((e) => {
      console.log(e);
    })
  }

  darBaixa() {
    this.produto.valorEstoque = this.produto.preco * this.produto.qtdProduto;
    this.produtoProvider.darBaixa(this.produto).then((data) => {
      console.log(data);
      this.navCtrl.setRoot(HomePage);
    }).catch((e) => {
      console.log(e);
    })
  }
}
