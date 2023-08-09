import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default class CartController extends Controller {
  @service shoppingCart

  get subTotal() {
    return this.model.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  }

  get tax() {
    return 0.09 * this.subTotal;
  }

  get total() {
    return this.subTotal + this.tax;
  }
}
