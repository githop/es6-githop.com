/**
 *
 * Created by githop on 7/30/15.
 */
import * as template from './githop.tmpl.html';
import './githop.scss'
import '../assets/materialdesignicons.css';


let GithopComponent = ()=> {
  return {
    template,
    restrict: 'E'
  };
};

export default GithopComponent;

