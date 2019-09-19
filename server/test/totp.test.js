import chai from 'chai';
import chaiHttp from 'chai-http';

import server from '../index';

chai.use(chaiHttp);

const { expect } = chai;

describe('TOTP Test', () => {
  let request;
  let totp;
  before(() => {
    request = chai.request(server).keepOpen();
  });

  after(async () => {
    request.close();
  });

  describe('TOTP route test', () => {
    it('should successfully generate totp', async () => {
      const response = await request.get('/api/totp');
      totp = response.body.data.totp;

      expect(response.body.status).to.equal('success');
      expect(response.body.code).to.equal(200);
      expect(response.body.data).to.have.keys(['totp', 'countDown']);
    });

    it('should successfully validate totp', async () => {
      const body = { totp };
      const response = await request.post('/api/totp').send(body);

      expect(response.body.status).to.equal('success');
      expect(response.body.code).to.equal(200);
      expect(response.body.data).to.have.key('status');
    });
  });
});
