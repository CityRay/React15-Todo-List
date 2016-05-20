/*
* @Author: RayLin
* @Date:   2016-05-20 10:27:08
* @Last Modified by:   RayLin
* @Last Modified time: 2016-05-20 10:52:01
*/

import {expect} from 'chai'
import reducer from '../../redux/reducers/todoReducer'

describe('Todo Reducer Test', () => {

    it('Test ADD_TODO Action', () => {
        const newState = reducer([], {type: 'ADD_TODO'});
        expect(newState).to.have.length(1);

    });

    it('Test COMPLETE_TODO Action', () => {
        const newState = reducer([{
            text: 'action.text',
            completed: false,
            id: 2
        }], {
            type: 'COMPLETE_TODO',
            id: 2
        });

        expect(newState[0].completed).to.equal(true);

    })
});
