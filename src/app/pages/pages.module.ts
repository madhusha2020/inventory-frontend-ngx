import { NgModule } from '@angular/core';
import {NbBadgeModule, NbButtonModule, NbCardModule, NbMenuModule} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ShopComponent } from './shop/shop-main/shop.component';
import { ShopItemComponent } from './shop/shop-item/shop-item.component';
import { ShoppingCartComponent } from './shop/shopping-cart/shopping-cart.component';
import {FormInputModule} from './shared/form-inputs/form-input.module';
import { CartItemComponent } from './shop/cart-item/cart-item.component';

@NgModule({
    imports: [
        PagesRoutingModule,
        ThemeModule,
        NbMenuModule,
        DashboardModule,
        ECommerceModule,
        MiscellaneousModule,
        NbCardModule,
        FormInputModule,
        NbButtonModule,
        NbBadgeModule,
    ],
  declarations: [
    PagesComponent,
    ShopComponent,
    ShopItemComponent,
    ShoppingCartComponent,
    CartItemComponent,
  ],
})
export class PagesModule {
}
