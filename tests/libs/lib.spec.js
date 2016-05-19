import { getToday } from "../../libs/lib.js"
import { expect } from 'chai'

describe('Mocha Test Start', () => {
    it('Mocha Works!', () => {
        expect(true).to.be.true;
    })

    it('Test Lib Func', () => {
        let _today = new Date();
        _today = _today.toISOString().slice(0, 10).replace(/-/g, "/");
        expect(getToday()).to.equal(_today);
    })

})
