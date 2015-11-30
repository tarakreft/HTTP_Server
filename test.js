/*jshint expr: true*/
var chaiHTTP = require('chai-http'),
    expect = require('chai').expect,
    server = require('./server.js').server,
    chai = require('chai');

    var name = 'tara';
    var time = new Date();

chai.use(chaiHTTP);

describe('server', function (req, res){

  it('should return 200 and the current date/time', function (done) {

    chai.request('localhost:3000')
      .get('/time')
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res.status).to.eql(200);
        expect(res.text).to.eql('<h1>the date and time are </h1><h1>' + time + '</h1>');
        done();
      });
  });

  it('should respond to a GET to /greet', function (done) {

    chai.request('localhost:3000')
  	  .get('/greet/tara')
  	  .end(function (err, res) {
  	    expect(err).to.be.null;
        expect(res.status).to.eql(200);
        expect(res.text).to.eql('<h1>why hello there</h1><h1>' + name + '</h1>');  	
        done();
  	});
  });

  it('should have a POST that takes name in JSON format', function (done){

    chai.request('localhost:3000')
      .post('/greet/tara')
      .send({'name': 'tara'})
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res.status).to.eql(200);
        expect(res.text).to.eql('<h1>we meet again</h1><h1>' + name + '</h1>');  	
        done();	
      }); 
  });

});

