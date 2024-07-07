const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const axios = require('axios');
const app = require('../app');
const { expect } = chai;

chai.use(chaiHttp);

describe('GET /coins/:id', () => {
    let axiosStub;

    beforeEach(() => {
        axiosStub = sinon.stub(axios, 'get');
    });

    afterEach(() => {
        axiosStub.restore();
    });

    it('should return coin data for a valid coin id', (done) => {
        const coinId = 'bitcoin';
        const mockResponse = {
            data: {
                id: 'bitcoin',
                symbol: 'btc',
                name: 'Bitcoin'
            }
        };

        axiosStub.withArgs(`https://api.coingecko.com/api/v3/coins/${coinId}`).resolves(mockResponse);

        chai.request(app)
            .get(`/coins/${coinId}`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.deep.equal(mockResponse.data);
                done();
            });
    });

    it('should return an error message for an invalid coin id', (done) => {
        const coinId = 'invalid-coin-id';
        const mockError = new Error('Request failed with status code 404');
        axiosStub.withArgs(`https://api.coingecko.com/api/v3/coins/${coinId}`).rejects(mockError);

        chai.request(app)
            .get(`/coins/${coinId}`)
            .end((err, res) => {
                expect(res).to.have.status(500);
                expect(res.text).to.equal(mockError.message);
                done();
            });
    });
});
