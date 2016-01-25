import React from 'react';
import classNames from 'classnames';
import { Button, IconButton } from 'react-toolbox';
import { MainLayoutActions } from '../../actions';
import style from './Action.scss';

const propTypes = {
  to: React.PropTypes.string,
  selectedItems: React.PropTypes.array,
  multiItemAction: React.PropTypes.bool,
  singleItemAction: React.PropTypes.bool,
};

const defaultProps = {
  collectionAction: React.PropTypes.bool,
  memberAction: React.PropTypes.bool
};

class Action extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const buttonClass = classNames(style.button, {});
    const spanClass = classNames(style.span, {});

    return (
      <Button className={buttonClass} raised>
        <span className={spanClass}>
          {this.props.children}
        </span>
      </Button>
    );
  }
}

Action.propTypes = propTypes;
Action.defaultProps = defaultProps;

module.exports = Action;
