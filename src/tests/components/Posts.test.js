import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import {createStore, Provider} from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';


import Posts from '../../components/Posts';

const mockStore = configureMockStore([thunk]);

Enzyme.configure({adapter: new Adapter()})


describe('Test for post component isolated', ()=>{
    let wrapper;

    const store = mockStore({
        posts:{
            items: [
                {
                    userId: 1,
                    id: 1,
                    title: "test title",
                    body: "test body"
                }
            ]
        }
      });

    beforeEach(()=>{
        wrapper = mount(<Provider store={store}><Posts /></Provider>)
    })

    it('renders', ()=>{
        console.log(wrapper.debug())
        expect(2+2).not.toBe(5)
      })

})