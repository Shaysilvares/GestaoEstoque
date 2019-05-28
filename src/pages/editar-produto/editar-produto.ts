import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoProvider } from '../../providers/produto/produto';

/**
 * Generated class for the EditarProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

}