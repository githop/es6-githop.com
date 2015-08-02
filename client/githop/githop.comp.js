/**
 *
 * Created by githop on 7/30/15.
 */
import template from './githop.tmpl.html!text';
import './githop.css!';

let GithopComponent = ()=> {
  return {
    template,
    restrict: 'E'
  };
};

export default GithopComponent;

