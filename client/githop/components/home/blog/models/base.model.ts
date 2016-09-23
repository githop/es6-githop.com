/**
 * Created by githop on 8/1/15.
 */
import _ from 'lodash';

class Base {
  public relationships;
  constructor(data) {
    _.extend(this, data);
  }

  _pluckIds(type) {
    for (var r in this.relationships) {
      if (r === type) {
        return _.map(this.relationships[r].data, 'id');
      }
    }
  }

  _getParaIds() {
    return this._pluckIds('paragraphs');
  }

}

export default Base;
