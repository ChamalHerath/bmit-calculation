import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EquilibriumComponent } from './equilibrium/equilibrium.component';
import {FormsModule} from '@angular/forms';
import { AssetsTableComponent } from './assets-table/assets-table.component';
import { RatioAnalysisComponent } from './ratio-analysis/ratio-analysis.component';
import { RatioAnalysisCalComponent } from './ratio-analysis/ratio-analysis-cal/ratio-analysis-cal.component';

@NgModule({
  declarations: [	
    AppComponent,
    EquilibriumComponent,
    AssetsTableComponent,
    RatioAnalysisComponent,
    RatioAnalysisCalComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
