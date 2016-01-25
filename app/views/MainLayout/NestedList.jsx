import React from 'react';
import classNames from 'classnames';
import ListItem from './ListItem';
import style from './NestedList.scss';

const propTypes = {
  open: React.PropTypes.bool
};

const defaultProps = {
  open: true
};

class NestedList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: props.open };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    let icon;

    if (this.state.open) {
      icon = 'keyboard_arrow_up';
    } else {
      icon = 'keyboard_arrow_down';
    }

    const subItemsClassName = classNames(style.subItems, {
      [style.subItemsOpen]: this.state.open,
      [style.subItemsClosed]: !this.state.open
    });

    return (
      <div className={style.root}>
        <ListItem
          key="folder"
          caption="Folder"
          selectable
          onClick={this.handleClick}
          leftIcon={icon}
        />
        <div className={subItemsClassName}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

NestedList.propTypes = propTypes;
NestedList.defaultProps = defaultProps;
module.exports = NestedList;
