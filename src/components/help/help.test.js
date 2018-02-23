import React from 'react';
import {shallow} from 'enzyme';
import Help from './help';

describe('<Help />', () => {
  it('Renders without crashing', () => {
    shallow(<Help />);
  });
  it('Renders all elements', () => {
    const wrapper = shallow(<Help />);
    expect(wrapper.hasClass('classicsInfoDiv')).toEqual(true);
    expect(wrapper.find('.classicsInfoDiv').children('.helpInfoDiv')).toEqual({length: 1})
  })
});