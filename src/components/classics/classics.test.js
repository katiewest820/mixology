import React from 'react';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';
import Classics from './classics';

describe('<Classics />', () => {

  it('Should render without crashing', () => {
    shallow(<Classics />);
  });
   it('calls componentDidMount lifecycle method', () => {
    sinon.spy(Classics.prototype, 'componentDidMount');
    const wrapper = mount(<Classics />);
    expect(Classics.prototype.componentDidMount.calledOnce).toEqual(true);
    expect(wrapper.props()).toEqual({})
  });
   it('Checks for element rendering', () => {
      const wrapper = shallow(<Classics />);
      expect(wrapper.hasClass('backToHome')).toEqual(false);
      expect(wrapper.hasClass('classicsInfoDiv')).toEqual(true);
   });
});