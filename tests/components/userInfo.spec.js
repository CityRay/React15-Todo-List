/*
* @Author: RayLin
* @Date:   2016-05-19 15:50:29
* @Last Modified by:   RayLin
* @Last Modified time: 2016-05-20 10:54:23
*/

import React from 'react'
import UserInfo from '../../components/UserInfo'
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

describe('(Container) UserInfo', () => {

    it('Check props data!', () => {
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
