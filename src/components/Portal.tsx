import React from 'react';
import ReactDOM from 'react-dom';

const portalRoot = typeof document !== `undefined`
  && document.getElementById('portal');

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.el = typeof document !== `undefined` && document.createElement('div');
  }

  componentDidMount = (): void => {
    portalRoot.appendChild(this.el);
    this.el.classList.add('overlay');
    portalRoot.setAttribute('aria-hidden', 'false');
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
