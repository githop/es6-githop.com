/**
 * Created by githop on 8/1/15.
 */
import Base from './base.model.ts';
import _ from 'lodash';

header.$inject = ['Crud'];
export default function header(Crud) {
  class Header extends Base {
    public paragraphs;
    public attributes;
    constructor(data) {
      super(data);
      if (data) {
        data.paragraphs = [];
        _.extend(this, data);
      }
    }

    getParaIds() {
      return this._getParaIds();
    }

    setPara(para) {
      if (para) {
        var p = _.find(this.paragraphs, {id: para.id});
        if (!p) {
          this.paragraphs.push(para);
        }
      }
    }

    edit() {
      Crud.update(self).then((h) => {
        if (h !== undefined) {
          this.attributes.text = h.text;
        }
      });
    }
  }
  return Header;
};

