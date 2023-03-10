import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/@shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

const routes: Routes = [
    {path:'', component:HomeComponent}
]


@NgModule({
  declarations: [
    HomeComponent

  ],
  imports: [
    HomeRoutingModule,
    // CurrencyConverterRoutingModule,
    SharedModule,

    ]
})
export class HomeModule {
}
