import chai from 'chai';
import chaiHttp from 'chai-http';

import server from '../index';

chai.use(chaiHttp);

const { expect } = chai;

describe('OTP Test', () => {
  let request;
  before(() => {
    request = chai.request(server).keepOpen();
  });

  after(async () => {
    request.close();
  });

  describe('Generate OTP', () => {
    it('should successfully generate otp', async () => {
      const response = await request.get('/api/totp');

      expect(response.body.status).to.equal('success');
      expect(response.body.code).to.equal(200);
      expect(response.body.data).to.have.key('totp');
    });
  });
});
