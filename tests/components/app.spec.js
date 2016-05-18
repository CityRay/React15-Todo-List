/*
* @Author: RayLin
* @Date:   2016-05-17 18:25:23
* @Last Modified by:   RayLin
* @Last Modified time: 2016-05-18 10:31:38
*/

import React from 'react'
import UserInfo from '../../components/UserInfo'
import { mount, shallow } from 'enzyme';

describe('(Container) UserInfo', () => {

    it('renders as a <div>', () => {
        const props = {
            user: {
                username: 'ray',
                memberId: 69
            }
        }

        const wrapper = mount(<UserInfo {...props} />);
        expect(wrapper.props().user.username).to.equal("ray");
        expect(wrapper.props().user.memberId).to.equal(69);
    });

});
