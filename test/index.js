const getUsuario = require('./../dist/index.js').getUsuario;

const expect = require('chai').expect;
const nock = require('nock');
const user = require('./resp/gaetano');

describe('TEst usuario git', () => {

    beforeEach(()=> {
        nock('https://api.github.com')
            .get('/users/gaetano1979')
            .reply(200,user)
    });

    it('should get info usuario', () => {
        getUsuario('gaetano1979').then(response => {
            expect(typeof response).to.equal('object');
            expect(response.login).to.equal('Gaetano1979');
            expect(response.id).to.be.a('number');
            expect(response.type).to.equal('User');
        })
    });
})
