import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { CartPageModule } from './cart/cart.module';

@NgModule({
 declarations: [AppComponent],
 entryComponents: [],
 imports: [
CartPageModule,
 BrowserModule,
 IonicModule.forRoot(),
 AppRoutingModule,
 AngularFireModule.initializeApp(environment.firebaseConfig),
 AngularFireAuthModule,
 ],
 providers: [
 StatusBar,
 SplashScreen,
 { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
],
bootstrap: [AppComponent]
})
export class AppModule {}