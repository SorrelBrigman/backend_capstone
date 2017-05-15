process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../app');
const { knex } = require('../db/database');
chai.use(chaiHttp);


describe('Restaurant routes', () => {

  // beforeEach( () => {
  //   return knex.migrate.rollback()
  //   .then( () => {
  //     return knex.migrate.latest()
  //   })
  //   .then( () => {
  //     return knex.seed.run()
  //   });
  // });

  describe('Get all the restaurants', () => {
    it('should get all restaurants', () => {
      return chai.request(server)
      .get('/api/v1/restaurants')
      .then( (res) => {
        res.should.have.status(200);
        res.should.be.json
        res.body.should.be.a('array');
        res.body[0].should.have.property('name');
        res.body[0].name.should.equal('The Catbird Seat');
      });
    });
  });

  describe('GET /api/v1/restaurants/:id', () => {
    it('should return a restaurant', () => {
     return chai.request(server)
     .get('/api/v1/restaurants/the-catbird-seat-nashville')
     .then( (res) => {
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.should.have.property('name');
      res.body.name.should.equal('The Catbird Seat');
     });

    });
  });





});

// describe('User routes', () => {

//   describe('GET /api/v1/users/', () => {
//     it('should return users by restaurant', () => {
//      return chai.request(server)
//      .get('/api/v1/restaurants/the-catbird-seat-nashville')
//      .then( (res) => {
//       res.should.have.status(200);
//       res.should.be.json;
//       res.body.should.be.a('object');
//       res.body.should.have.property('name');
//       res.body.name.should.equal('The Catbird Seat');
//      });

//     });
//   });

// })
