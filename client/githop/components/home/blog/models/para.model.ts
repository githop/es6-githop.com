/**
 * Created by githop on 8/1/15.
 */
import Base from './base.model';
import _ from 'lodash';

para.$inject = ['Crud'];
export default function para(Crud) {
  class Para extends Base {
    public attributes;
    constructor(data) {
      super(data);
      _.extend(this, data);
    }

    edit() {
      Crud.update(this).then((p) => {
        if (p !== undefined) {
          this.attributes.body = p.body;
        }
      });
    }
  }

  return Para;
};