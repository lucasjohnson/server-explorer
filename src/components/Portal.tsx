import React from 'react';
import ReactDOM from 'react-dom';
import { Aria, Cookie } from '../utils/index';

const portalRoot = typeof document !== `undefined`
  && document.getElementById('portal');

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.el = typeof document !== `undefined` && document.createElement('div');
  }

  componentDidMount = (): void => {
    if (Cookie.getToken().length === 0) {
      portalRoot.appendChild(this.el);
      this.el.classList.add('overlay');
      this.el.setAttribute(Aria.HIDDEN, Aria.FALSE);
    };
  }

  componentWillUnmount = (): void => {
    portalRoot.removeChild(this.el);
  }

  render() {
    const { children } = this.props;

    if (this.el) {
      return ReactDOM.createPortal(
        children,
        this.el
      )
    } else {
      return null;
    }
  }
}
