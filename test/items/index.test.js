// var config = require('../test_helper');
//
// describe('GET /api/v1/items', () => {
//   it('should return all the users', done => {
//     config.chai.request(config.app)
//       .get('/api/v1/users')
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.should.be.json;
//         res.body.should.be.a('array');
//         res.body.length.should.equal(20);
//         res.body[0].should.have.property('id');
//         res.body[0].id.should.equal('1');
//         res.body[0].should.have.property('collection_id');
//         res.body[0].collection_id.should.equal('1');
//         res.body[0].should.have.property('image');
//         res.body[0].avatar.should.equal(
//           'http://shec-labs.com/wp-content/themes/creativemag/images/default.png'
//         );
//         res.body[0].should.have.property('location');
//         res.body[0].location.should.equal('Denver, CO');
//         res.body[0].should.have.property('bio');
//         res.body[0].bio.should.equal('I\'m pretty cool.');
//         done();
//       });
//   });
// });
