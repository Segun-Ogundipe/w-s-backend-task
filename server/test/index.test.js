import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

chai.use(chaiHttp);

const { expect } = chai;

describe('Wildcard Route Test', () => {
  it('should return 404', async () => {
    const response = await chai.request(server).get('/');
    expect(response.body.status).to.equal('fail');
    expect(response.body.code).to.equal(404);
    expect(response.body.error.message).to.equal('You typed in the wrong URL');
  });
});
