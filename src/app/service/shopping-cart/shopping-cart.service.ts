import {Injectable} from '@angular/core';
import {Constant} from '../auth/constant';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() {
  }

  clearCart(): void {
    localStorage.removeItem(Constant.CART);
  }

  savedToItemMap(itemId: number, qty: number): void {
    let itemMap = this.getItemMap();
    if (itemMap) {
      itemMap.set(itemId, qty);
    } else {
      itemMap = new Map<number, number>();
      itemMap.set(itemId, qty);
    }
    this.setItemMap(itemMap);
  }

  deleteFromItemMap(itemId: number): void {
    let itemMap = this.getItemMap();
    if (itemMap) {
      itemMap.delete(itemId);
      this.setItemMap(itemMap);
    } else {
      console.log('Item Map Not Found');
    }
  }

  getItemCount(): number {
    return this.getItemMap().size;
  }

  getItemMap(): Map<number, number> {
    return new Map(JSON.parse(localStorage.getItem(Constant.CART)));
  }

  private setItemMap(itemMap: Map<number, number>): void {
    localStorage.setItem(Constant.CART, JSON.stringify(Array.from(itemMap.entries())));
  }
}
