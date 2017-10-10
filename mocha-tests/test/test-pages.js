var expect = require('chai').expect;
var request = require('request');

describe('Main page', function () {
    it('content', function () {
        request('https://localhost:8080', function (err, res, body) {
            expect(body).to.equal('Hello World')
        })
    });

    it('status', function () {
        request('https://localhost:8080', function (err, res, body) {
            expect(res.statusCode).to.equal(200)
        })
    });
});

describe('About page', function () {
    it('status', function () {
        request('https://localhost:8080/about', function (err, res, body) {
            expect(res.statusCode).to.equal(404)
        })
    });
});