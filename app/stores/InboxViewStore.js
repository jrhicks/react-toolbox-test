import AppDispatcher from '../dispatcher/AppDispatcher';
import { Store } from 'flux/utils';

class InboxViewStore extends Store {

  getState() {
    
  }

  __onDispatch(action) {
    switch (action.type) {
      case 'InboxView/new':
        // TODO Modify data
        this.__emitChange();
        break;
      default:
        console.log(`Action identifier: ${action.type} not handled.`);
        break;
    }
  }
}

module.exports = new InboxViewStore(AppDispatcher);
