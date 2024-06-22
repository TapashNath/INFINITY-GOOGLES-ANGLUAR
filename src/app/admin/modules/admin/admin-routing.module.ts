import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from 'src/app/addproduct/addproduct.component';
import { CmsComponent } from 'src/app/cms/cms.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { EditproductComponent } from 'src/app/editproduct/editproduct.component';
import { ExtraComponent } from 'src/app/main/extra/extra.component';
import { LayoutComponent } from 'src/app/main/layout/layout.component';
import { NotfoundComponent } from 'src/app/main/notfound/notfound.component';
import { OdermanagementComponent } from 'src/app/odermanagement/odermanagement.component';
import { ProductmanagementComponent } from 'src/app/productmanagement/productmanagement.component';
import { UsermanagementComponent } from 'src/app/usermanagement/usermanagement.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'usermanagement', component: UsermanagementComponent },
      { path: 'productmanagement', component: ProductmanagementComponent },
      { path: 'addproduct', component: AddproductComponent },
      { path: 'editproduct', component: EditproductComponent },
      { path: 'order', component: OdermanagementComponent },
      { path: 'cms', component: CmsComponent },
      { path: 'extra', component: ExtraComponent },
      { path: '**', component: NotfoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
