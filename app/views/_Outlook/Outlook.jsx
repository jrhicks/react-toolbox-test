import React from 'react';
import 'react-toolbox/lib/commons';
import { MainLayout, AppBar, TabBar } from '../MainLayout';
import { Link } from 'react-router';

class Outlook extends React.Component {

  render() {
    return (
      <MainLayout>
        <AppBar title="Outook" />
        <TabBar flat>
          <ul>
            <li><Link to="/">Mail</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
            <li><Link to="/calendar">People</Link></li>
            <li><Link to="/calendar">Tasks</Link></li>
            <li><Link to="/calendar">One Drive</Link></li>
          </ul>
        </TabBar>
        { this.props.children }
      </MainLayout>
    );
  }
}

module.exports = Outlook;
