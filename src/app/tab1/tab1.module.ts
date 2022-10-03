import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Componente1Component } from '../components/componente1.component';
import { Componente2Component } from '../components/componente2.component';
import { Componente3Component } from '../components/componente3.component';

import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [
    Tab1Page, 
    Componente1Component,
    Componente2Component,
    Componente3Component,
  ]
})
export class Tab1PageModule {}
