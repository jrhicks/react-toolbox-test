import React from 'react';
import classNames from 'classnames';
import { IconButton } from 'react-toolbox';
import { MainLayoutActions } from '../../actions';
import style from './ViewHeader.scss';

const propTypes = {
  title: React.PropTypes.string,
  noDrawerButton: React.PropTypes.bool
};

const defaultProps = {
  noDrawerButton: false
};

class ViewHeader extends React.Component {

  constructor(props) {
    super(props);
    this.renderDrawerButton = this.renderDrawerButton.bind(this);
  }

  renderDrawerButton() {
    if (!this.props.noDrawerButton) {
      return (<IconButton
        className={style.iconButton}
        icon="menu"
        onClick={MainLayoutActions.toggleDrawer}
        ripple
      />);
    }
  }

  render() {
    const headerClass = classNames(style.header, {
      [style.noDrawerButton]: this.props.noDrawerButton
    });

    return (
        <header className={headerClass} data-react-toolbox="app-bar">
          {this.renderDrawerButton()}
          <h2>{ this.props.title }</h2>
          <span className={style.Actions}>
          {this.props.children}
          </span>
        </header>
    );
  }
}

ViewHeader.propTypes = propTypes;
ViewHeader.defaultProps = defaultProps;

module.exports = ViewHeader;
