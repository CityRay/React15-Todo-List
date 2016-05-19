/*
* @Author: RayLin
* @Date:   2016-05-17 18:25:23
* @Last Modified by:   RayLin
* @Last Modified time: 2016-05-19 16:00:55
*/

import React from 'react'
import App from '../../components/TodoItem'
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

describe('(Container) App', () => {

    it('Check TodoItem Content!', () => {
        const props = {
            actions:{

            },
            todo:{
                text: "test"
            }
        }

        const wrapper = mount(<App {...props} />);
        expect(wrapper.find('.todo__item')).to.have.length(1);
        expect(wrapper.find('button')).to.have.length(2);
    });

});
