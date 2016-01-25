import React from 'react';
import 'react-toolbox/lib/commons';
import { WorkSpace } from '../../MainLayout';
import MailDrawer from './MailDrawer';

class Mail extends React.Component {

  render() {
    return (
      <div>
        <MailDrawer />
        <WorkSpace >
          {this.props.children}
        </WorkSpace>
      </div>
    );
  }
}

module.exports = Mail;
