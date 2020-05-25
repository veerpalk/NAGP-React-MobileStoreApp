import React from 'react'
import {mount} from 'enzyme'
import OrderPopUp  from '../components/order/OrderPopUp'

describe('testing order popup component', ()=>{
    let orderPopUp = mount(<OrderPopUp/>)
        it('renders the Lets Shop More! button', () => {
            expect(orderPopUp.find('.btn').at(2).text()).toEqual('Lets Shop More!');
          });
})

