/**
 * Created by githop on 8/1/15.
 */
import Base from './base.model';
import _ from 'lodash';

para.$inject = ['Crud'];
export default function para(Crud) {
  class Para extends Base {
    constructor(data) {
      super(data);
      _.extend(this, data);
    }

    edit() {
      var self = this;
      Crud.update(self).then(function(p) {
        if (p !== undefined) {
          self.attributes.body = p.body;
        }
      });
    }
  }

  return Para;
};