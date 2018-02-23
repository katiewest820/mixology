import React from 'react';
import {shallow} from 'enzyme';
import LeftSlideshowArrow from './leftSlideshowArrow';

describe('<LeftSlideshowArrow />', () => {
  it('Renders without crashing', () => {
    shallow(<LeftSlideshowArrow />);
  });
});