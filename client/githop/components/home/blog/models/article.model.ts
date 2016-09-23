/**
 *
 * Created by githop on 8/1/15.
 */
import Base from './base.model';
import _ from 'lodash';

let article = function() {
  class Article extends Base {
    public relationships;
    public author:string;
    public headers;
    public imgs;
    constructor(data) {
      super(data);
      data.author = {};
      data.headers = [];
      data.imgs = [];
      _.extend(this, data);
    }

    getHeaderIds() {
      return this._pluckIds('headers');
    }

    getImgIds() {
      return this._pluckIds('imgs');
    }

    getAuthorId() {
      return this.relationships.user.data.id;
    }

    setAuthor(author) {
      this.author = author;
    }

    setHeader(header) {
      if (header) {
        var h = _.find(this.headers, {id: header.id});
        if (!h) {
          this.headers.push(header);
        }
      }
    }

    setImg(img) {
      if (img) {
        var i = _.find(this.imgs, {id: img.id});
        if (!i) {
          this.imgs.push(img);
        }
      }
    }

    sortImgs() {
      this.imgs = _.sortBy(this.imgs, function(i) {
        return _.parseInt(i.id);
      });
    }

  }

  return Article;
};

export default article;