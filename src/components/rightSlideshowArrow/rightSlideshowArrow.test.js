import React from 'react';
import {shallow} from 'enzyme';
import RightSlideshowArrow from './rightSlideshowArrow';

describe('<RightSlideshowArrow />', () => {
  it('Renders without crashing', () => {
    shallow(<RightSlideshowArrow />);
  });
});