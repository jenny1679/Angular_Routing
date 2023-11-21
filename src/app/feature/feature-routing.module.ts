import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeatureComponent } from './feature.component';

const routes: Routes = [
  // { 一般設定
  //   path:'feature',
  //   component: FeatureComponent
  // },
  {  //延遲載入
    path:'',
    component: FeatureComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
