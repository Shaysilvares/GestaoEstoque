import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProdutoProvider } from '../../providers/produto/produto';
import { DetalheProdutoPage } from '../detalhe-produto/detalhe-produto';
import { IProduto } from '../../../interfaces/IProduto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  produtos: any;
  constructor(public navCtrl: NavController, public produtoProvider: ProdutoProvider) {

  }

  ionViewDidLoad() {
    this.buscarTodosProdutos();
  }

  buscarTodosProdutos() {
    this.produtoProvider.buscarProdutos()
    .then((data) => {
      this.produtos = data;
      console.log(this.produtos)
    }).catch((e) => console.log(e));
  }

  goToDetalheProdutoPage(produto: IProduto) {
    this.navCtrl.push(DetalheProdutoPage, { id: produto.id_produto});
  }

}
