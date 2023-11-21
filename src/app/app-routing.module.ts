import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { PreloadAllModules } from '@angular/router';
import { LayoutGuard } from './layout/layout.guard';
import { EnsureLoginGuard } from './login/ensure-login.guard';

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    canActivate: [LayoutGuard], //路由守門員
    children:[
      {
        path:'home',
        component: HomeComponent
      },
      {
        path:'about',
        component: AboutComponent
      },
      {// 預設路由
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path:'login',
    component: LoginComponent,
    //canDeactivate: [EnsureLoginGuard] //在使用者想要離開路由時，透過 Guard 來提醒使用者
  },
  {// 延遲載入
    path:'feature',
    loadChildren: () => import('./feature/feature.module').then(
      module => module.FeatureModule
    )
  },
  {// 轉向路由，一定要放在最後
    path:'**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {
    // enableTracing: true,
    useHash: true,
    preloadingStrategy: PreloadAllModules //延遲載入
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
