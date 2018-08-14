import React from 'react';
import { shallow } from 'enzyme';

import App from '../../src/app/App';

describe('App component test suite', () => {
  it('should render', () => {
    const element = shallow(<App />);

    expect(element.find(<h1>App Component</h1>)).toBeDefined();
  });
});
