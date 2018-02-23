import React from 'react';
import {shallow, mount} from 'enzyme';
import Header from './header';
import { Link, Router } from 'react-router';

describe('<Header />', () => {
  it('Should render without crashing', () => {
    shallow(<Header />);
  });
});
