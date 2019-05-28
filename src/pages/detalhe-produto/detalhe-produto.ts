import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoProvider } from '../../providers/produto/produto';
import { EditarProdutoPage } from '../editar-produto/editar-produto';
import { HomePage } from '../home/home';
import { IProduto } from '../../../interfaces/IProduto';
import { BaixaEstoquePage } from '../baixa-estoque/baixa-estoque';

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

deletarProduto() {
  this.detalheProdutoId = this.navParams.get("id");
  this.produtoProvider.delete(this.detalheProdutoId).then((data) => {
    console.log(data);
    this.navCtrl.setRoot(HomePage);
  }).catch((e) => {
    console.log(e);
  })
}

openEditarProdutoPage(produto: IProduto) {
  this.navCtrl.push(EditarProdutoPage, { id: produto.id_produto});
}

openBaixaEstoquePage(produto: IProduto) {
  this.navCtrl.push(BaixaEstoquePage, { id: produto.id_produto});
}

}
