import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListSidebarComponent } from './product-list-sidebar/product-list-sidebar.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: '', component: SidebarComponent, outlet: 'sidebar' },
  { path: 'products', component: ProductListSidebarComponent, outlet: 'sidebar' },
  { path: '**', redirectTo: ''}
];

@NgModule({
  
  imports: [  
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})



export class RoutingModule {}

  //ModuleWithProviders = RouterModule.forRoot(routes);
  
  
  //export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
  
 
