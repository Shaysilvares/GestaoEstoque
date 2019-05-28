import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class DatabaseProvider {

  constructor(private sqlite: SQLite) {
    
  }

  public getDB() {
    return this.sqlite.create({
      name: 'data.db',
      location: 'default'
    });
  }

  public createDatabase() {
    return this.getDB()
      .then((db: SQLiteObject) => {
        this.createTable(db);
        //this.alterTable(db);
      })
      .catch(e => console.error(e));

  }

  private createTable(db: SQLiteObject) {
    db.executeSql('CREATE TABLE IF NOT EXISTS produto (id_produto INTEGER primary key AUTOINCREMENT NOT NULL, titulo TEXT NOT NULL, preco REAL, qtdProduto INTEGER, valorEstoque REAL, fornecedor TEXT)', [])
    .then(() => console.log('tabela criada com sucesso'))
    .catch(e => console.log(e));
  }

}
