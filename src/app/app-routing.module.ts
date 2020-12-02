import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EquilibriumComponent} from './equilibrium/equilibrium.component';
import {AppComponent} from './app.component';
import {AssetsTableComponent} from './assets-table/assets-table.component';
import { RatioAnalysisComponent } from './ratio-analysis/ratio-analysis.component';

const routes: Routes = [
  {path: 'equilibrium', component: EquilibriumComponent},
  {path: 'assets-calculation', component: AssetsTableComponent},
  {path: 'ratio-analysis', component: RatioAnalysisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
