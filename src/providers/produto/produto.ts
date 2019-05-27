import { Injectable } from '@angular/core';
import { DatabaseProvider } from '../database/database';
import { SQLiteObject } from '@ionic-native/sqlite';
import { IProduto } from '../../../interfaces/IProduto';

@Injectable()
export class ProdutoProvider {

  constructor(private db: DatabaseProvider) {
    
  }

  public insert(produto: IProduto) {
    return this.db.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'INSERT INTO produto (titulo, preco, qtdProduto, valorEstoque, fornecedor) VALUES (?, ?, ?, ?, ?)';
        let data = [produto.titulo, produto.preco, produto.qtdProduto, produto.valorEstoque, produto.fornecedor];

        return db.executeSql(sql, data)
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  }

  public buscarProdutos() {
    return this.db.getDB()
    .then((db: SQLiteObject) => {
      let sql = 'SELECT * FROM produto';

      return db.executeSql(sql, []).then((data: any) => {
        if(data.rows.length > 0) {
          let produtos: any[] = [];
          for(var i = 0; i < data.rows.length; i++) {
            let produto = data.rows.item(i);
            produtos.push(produto);
          }        
          return produtos;
        }
        return null;
      })
        .catch((e) => console.log(e));
    })
    .catch((e) => console.log(e));
  }

 public buscarProdutoPorId(idProduto: any) {
  return this.db.getDB()
  .then((db: SQLiteObject) => {
    let sql = 'SELECT * FROM produto WHERE id_produto = ?';
    let data = [idProduto];
    return db.executeSql(sql, data).then((data: any) => {
      if(data.rows.length > 0) {
        let item = data.rows.item(0);
        return item;
      }
      return null;
    })
      .catch((e) => console.log(e));
  })
  .catch((e) => console.log(e));
 }

 update() {

 }

 delete() {

 }

}
