import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@glimmer/object';

export default class ItemController extends Controller {
    @tracked color = this.model.colors[0].color;

    @action
    onChangeColor(newColor){
        this.color= newColor;
    }
      
    get productImage() {
        return this.model.colors.find(({ color }) => color === this.color).image;
      }
      }
}
