const collectionAssertions = (res, status, id, uid, category, title, desc) => {
  res.should.have.status(status);
  res.should.be.json;
  res.body.should.be.a('object');
  res.body.should.have.property('id');
  res.body.should.have.property('uid');
  res.body.should.have.property('category');
  res.body.should.have.property('title');
  res.body.should.have.property('description');
  res.body.id.should.equal(id);
  res.body.uid.should.equal(uid);
  res.body.category.should.equal(category);
  res.body.title.should.equal(title);
  res.body.description ? res.body.description.should.equal(desc) : null;
};

module.exports = { collectionAssertions }
