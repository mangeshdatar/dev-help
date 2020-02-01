import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http'
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

import { environment } from '../environments/environment';
import { HomePageComponent } from './home-page/home-page.component';
import { CardArticleComponent } from './components/card-article/card-article.component';
import { ArticleService } from './service/article.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CardArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    AngularFireModule.initializeApp(environment.fireBaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [ArticleService ,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
