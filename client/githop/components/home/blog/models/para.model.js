/**
 * Created by githop on 8/1/15.
 */
import Base from './base.model';
import _ from 'lodash';

let para = function() {

  class Para extends Base {
    constructor(data) {
      super(data);
      _.extend(this, data);
    }
  }
  return Para;
};

export default para;
