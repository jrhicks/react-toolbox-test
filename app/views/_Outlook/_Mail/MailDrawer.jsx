import React from 'react';
import { ListItem } from 'react-toolbox';
import { NestedList, Drawer } from '../../MainLayout';

class MailDrawer extends React.Component {

  render() {
    return (
      <Drawer>
        <NestedList open caption="Folders">
          <ListItem
            key={1}
            caption="Inbox"
            selectable
            to="#/"
          />
          <ListItem
            key={2}
            caption="Clutter"
            selectable
            to="#/clutter"
          />
          <ListItem
            key={3}
            caption="Sent Items"
            selectable
            to="#/sent_items"
          />
          <ListItem
            key={4}
            caption="Drafts"
            selectable
            to="#/drafts"
          />
          <ListItem
            key={5}
            caption="Deleted Items"
            selectable
            to="#/deleted_items"
          />
        </NestedList>
      </Drawer>
    );
  }
}

module.exports = MailDrawer;
