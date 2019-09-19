import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';
import Totp from '../utils/Totp';

chai.use(chaiHttp);

const { expect } = chai;

describe('TOTP Test', () => {
  let request;
  let token;
  before(() => {
    request = chai.request(server).keepOpen();
  });

  after(async () => {
    request.close();
  });

  describe('TOTP route test', () => {
    it('should successfully generate totp', async () => {
      const response = await request.get('/api/totp');
      token = response.body.data.token;

      expect(response.body.status).to.equal('success');
      expect(response.body.code).to.equal(200);
      expect(response.body.data).to.have.keys(['token', 'countDown']);
    });

    it('should successfully validate totp', async () => {
      const body = { token };
      const response = await request.post('/api/totp').send(body);

      expect(response.body.status).to.equal('success');
      expect(response.body.code).to.equal(200);
      expect(response.body.data.status).to.equal('The code you supplied is true');
    });

    it('should fail validation', async () => {
      const body = { token: 123456 };
      const response = await request.post('/api/totp').send(body);

      expect(response.body.status).to.equal('fail');
      expect(response.body.code).to.equal(401);
      expect(response.body.message).to.equal('The code you supplied is not correct');
    });

    it('should fail validation if token is not provided', async () => {
      const body = {};
      const response = await request.post('/api/totp').send(body);

      expect(response.body.status).to.equal('fail');
      expect(response.body.code).to.equal(400);
      expect(response.body.message).to.equal('Please provide a valid token');
    });

    it('should fail validation if a string token is provided', async () => {
      const body = { token: 'tyruoe' };
      const response = await request.post('/api/totp').send(body);

      expect(response.body.status).to.equal('fail');
      expect(response.body.code).to.equal(400);
      expect(response.body.message).to.equal('token must be of type number');
    });

    it('should fail validation if token is not six digits', async () => {
      const body = { token: 12345 };
      const response = await request.post('/api/totp').send(body);

      expect(response.body.status).to.equal('fail');
      expect(response.body.code).to.equal(400);
      expect(response.body.message).to.equal('token must be six digits');
    });
  });

  describe('Method Test', () => {
    it('should convert decimal to hexadecimal', () => {
      const totp = new Totp(process.env.TOTP_SECRET);

      expect(totp.dec2hex(15)).to.equal('0f');
    });

    it('should add 0 to a string', () => {
      const totp = new Totp(process.env.TOTP_SECRET);

      expect(totp.leftpad('wertyuyio', 5, '0')).to.equal('wertyuyio');
    });
  });
});
