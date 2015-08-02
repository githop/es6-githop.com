/**
 * Created by githop on 8/1/15.
 */
import Base from './base.model';
import _ from 'lodash';

let header = function() {

  class Header extends Base {
    constructor(data) {
      super(data);
      if (data) {
        data.paragraphs = [];
        _.extend(this, data);
      }
    }

    getParaIds() {
      return this._pluckIds('paragraphs', this.relationships);
    }

    setPara(para) {
      if (para) {
        var p = _.find(this.paragraphs, {id: para.id});
        if (!p) {
          this.paragraphs.push(para);
        }
      }
    }
  }
  return Header;
};

export default header;