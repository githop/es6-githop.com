/**
 * Created by githop on 8/1/15.
 */
import _ from 'lodash';

class Base {
  constructor(data) {
    _.extend(this, data);
  }

  _pluckIds(type) {
    for (var r in this.relationships) {
      if (r === type) {
        return _.pluck(this.relationships[r].data, 'id');
      }
    }
  }

  _getParaIds() {
    return this.constructor._pluckIds('paragraphs', this.relationships);
  }

}

export default Base;
