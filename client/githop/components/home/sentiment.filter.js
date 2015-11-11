/**
 * Created by githop on 8/2/15.
 */

let sentiment = function() {
  return function(input) {
    var out = '';
    switch (input) {
      case 1:
        out = 'positive';
        break;
      case -1:
        out = 'negative';
        break;
      case 0:
        out = 'neutral';
        break;
    }
    return out;
  };
};

export default sentiment;