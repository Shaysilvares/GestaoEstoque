import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoProvider } from '../../providers/produto/produto';
import { IProduto } from '../../../interfaces/IProduto';
import { HomePage } from '../home/home';

/**
 * Generated class for the CadastroProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-produto',
  templateUrl: 'cadastro-produto.html',
})
export class CadastroProdutoPage {
  produto: IProduto = {
    titulo: '',
    fornecedor: '',
    qtdProduto: 0,
    preco: 0,
    valorEstoque: 0
  }

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public produtoProvider: ProdutoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroProdutoPage');
  }

  cadastrarProduto() {
    this.produto.valorEstoque = this.produto.preco * this.produto.qtdProduto;
    this.produtoProvider.insert(this.produto)
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
    this.navCtrl.setRoot(HomePage);
  }

}
