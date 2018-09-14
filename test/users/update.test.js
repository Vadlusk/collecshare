// var config = require('../test_helper');
//
// describe('PUT /api/v1/users/:uid', () => {
//   context('should edit a user with', () => {
//     it('one valid parameter', done => {
//       config.chai.request(config.app)
//         .put('/api/v1/users/1')
//         .set('Content-Type', 'multipart/form-data')
//         .send('uid = 56')
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.should.be.json;
//           res.body.should.have.property('uid');
//           res.body.uid.should.equal('56');
//           res.body.should.have.property('username');
//           res.body.should.have.property('avatar');
//           res.body.should.have.property('location');
//           res.body.should.have.property('bio');
//           done();
//         });
//     });
//     it('all valid parameters', done => {
//       config.chai.request(config.app)
//         .put('/api/v1/users/1')
//         .send({
//           uid: '6689',
//           username: 'Jim',
//           location: 'New Dehli',
//           bio: 'Awesome'
//         })
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.should.be.json;
//           res.body.should.have.property('uid');
//           res.body.uid.should.equal('6689');
//           res.body.should.have.property('username');
//           res.body.username.should.equal('Jim');
//           res.body.should.have.property('avatar');
//           res.body.avatar.should.equal('Url');
//           res.body.should.have.property('location');
//           res.body.location.should.equal('New Dehli');
//           res.body.should.have.property('bio');
//           res.body.bio.should.equal('Awesome');
//           done();
//         });
//     });
//   });
//   it('should 404 if uid does not exist', done => {
//     config.chai.request(config.app)
//       .put('/api/v1/users/999999')
//       .send({uid: '45'})
//       .end((err, res) => {
//         res.should.have.status(404);
//         done();
//       });
//   });
// });
