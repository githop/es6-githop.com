/**
 * Created by githop on 8/1/15.
 */
import Base from './base.model';
import _ from 'lodash';

let img = function() {

  class Img extends Base {
    constructor(data) {
      super(data);
      _.extend(this, data);
    }
  }
  return Img;
};

export default img;