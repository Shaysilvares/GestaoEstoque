import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SQLite } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../providers/database/database';
import { ProdutoProvider } from '../providers/produto/produto';
import { CadastroProdutoPage } from '../pages/cadastro-produto/cadastro-produto';
import localePtBr from '@angular/common/locales/pt';

import { registerLocaleData } from '@angular/common';
import { DetalheProdutoPage } from '../pages/detalhe-produto/detalhe-produto';
import { EditarProdutoPage } from '../pages/editar-produto/editar-produto';
import { BaixaEstoquePage } from '../pages/baixa-estoque/baixa-estoque';

registerLocaleData(localePtBr);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroProdutoPage,
    DetalheProdutoPage,
    EditarProdutoPage,
    BaixaEstoquePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroProdutoPage,
    DetalheProdutoPage,
    EditarProdutoPage,
    BaixaEstoquePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    ProdutoProvider
  ]
})
export class AppModule {}
