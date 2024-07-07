const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
chai.use(chaiHttp);
const { expect } = chai;

describe('GET /tokens', () => {
    it('should return tokens', (done) => {
        chai.request(app)
            .get('/tokens')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                done();
            });
    });
});
