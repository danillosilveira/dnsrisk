import { BrowserModule } from '@angular/platform-browser'
import { NgModule, APP_INITIALIZER } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { HttpClientModule } from '@angular/common/http'

// Providers
import { RegisterService } from './services/register.service'
import { RiskService } from './services/risk.service'
import { HomeService } from './services/home.service'

// Providers
import { riskProviderFactory } from './providers/riskProviderFactory'

// Components
import { HeaderComponent } from './header/header.component'
import { HomeComponent } from './home/home.component'
import { RegisterComponent } from './home/register/register.component'
import { ItemComponent } from './home/item/item.component'
import { InputComponent } from './shared/input/input.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    ItemComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    RiskService,
    RegisterService,
    HomeService,
    {
      provide: APP_INITIALIZER,
      useFactory: riskProviderFactory,
      deps: [RiskService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
