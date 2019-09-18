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
      const response = await request.get('/api/otp');

      expect(response.body.status).to.equal('success');
      expect(response.body.code).to.equal(201);
      expect(response.body.data).to.have.key('otp');
    });
  });
});
