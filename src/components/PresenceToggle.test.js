import React from 'react';
import ReactDOM from 'react-dom';
import PresenceToggle from '../../src/components/PresenceToggle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const cbFun = () => {
    return 'hier stehen die Scopes...';
  }
  ReactDOM.render(<PresenceToggle
    myStyle={'presenceToggle'}
    person={
      {
        firstName: 'Heinz',
        lastName: 'Schmitt',
        presence: 'present'
      }
    }
    scopeDescriptions={ cbFun()
    }
  />, div)
    // .then((result) => {
    // })
    // .catch((result) => {
    // })
    ;
  ReactDOM.unmountComponentAtNode(div);
});
