import AppDispatcher from '../dispatcher/AppDispatcher';

class InboxViewActions {
  updateInboxView(inboxView) {
    const action = {
      type: 'InboxView/update',
      data: inboxView
    };

    AppDispatcher.dispatch(action);
  }
}

module.exports = new InboxViewActions();
