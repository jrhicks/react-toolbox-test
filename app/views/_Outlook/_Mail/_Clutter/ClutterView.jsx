import React from 'react';
import Table from 'react-toolbox/lib/table';
// import { Container } from 'flux/utils';
import { View, ViewHeader, Action } from '../../../MainLayout';
// import { InboxViewStore } from '../../../../stores';

const UserModel = {
  name: { type: String },
  twitter: { type: String },
  birthdate: { type: Date },
  cats: { type: Number },
  dogs: { type: Number },
  active: { type: Boolean }
};

const users = [
  { name: 'Javi Jimenez', twitter: '@soyjavi', birthdate: new Date(1980, 3, 11), cats: 1 },
  { name: 'Javi Velasco', twitter: '@javivelasco', birthdate: new Date(1987, 1, 1), dogs: 1 }
];

const propTypes = {
  noDrawerButton: React.PropTypes.bool
};

const defaultProps = {
  noDrawerButton: false
};

class ClutterView extends React.Component {

  constructor(props) {
    super(props);
    this.state = { selected: [], source: users };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(row, key, value) {
    const source = this.state.source;
    source[row][key] = value;
    this.setState({ source });
  }

  handleSelect(selected) {
    this.setState({ selected });
  }

  render() {
    return (
      <View>
        <ViewHeader noDrawerButton={ this.props.noDrawerButton } title="Clutter">
          <Action>New</Action>
        </ViewHeader>

        <Table
          model={UserModel}
          onSelect={this.handleSelect}
          selectable
          selected={this.state.selected}
          source={this.state.source}
        />

      </View>
    );
  }
}

ClutterView.propTypes = propTypes;
ClutterView.defaultProps = defaultProps;
module.exports = ClutterView;
