import React from 'react';
import { EventForm } from '../src/pages/EventPageForm';
// import ReduxPersonalDetailForm from '../../../src/pages/User/PersonalDetailForm';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { ShallowWrapper, shallow, render, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';


const mockfn = jest.fn();

describe('<EventForm />', () => {
  let wrapper;
  let store;
  
  const props = {
    handleSubmit: mockfn,
  };
  
  beforeEach(() => {
    wrapper = shallow(<EventForm {...props} />);
  });

  it('should match the snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});