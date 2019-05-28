import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoProvider } from '../../providers/produto/produto';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-editar-produto',
  templateUrl: 'editar-produto.html',
})
export class EditarProdutoPage {
  public produtoId;
  public produto;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public produtoProvider: ProdutoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarProdutoPage');
    this.buscarProduto();
  }


  buscarProduto() {
    this.produtoId = this.navParams.get("id");
    console.log(this.produtoId);
    this.produtoProvider.buscarProdutoPorId(this.produtoId).then((data) => {
      console.log(data);
      this.produto = data;
    }).catch((e) => {
      console.log(e);
    })
  }

  editarProduto() {
    this.produto.valorEstoque = this.produto.preco * this.produto.qtdProduto;
    this.produtoProvider.update(this.produto).then((data) => {
      console.log(data);
      this.navCtrl.setRoot(HomePage);
    }).catch((e) => {
      console.log(e);
    })
  }

}