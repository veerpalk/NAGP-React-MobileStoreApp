import React from 'react'
import {mount} from 'enzyme'
import SignIn  from '../components/auth/SignIn'


let signIn = mount(<SignIn/>)

describe('when rendering the form', () => {
    it('creates a Form component', () => {
      expect(signIn.find('Form').exists()).toBe(true);
    });
})

