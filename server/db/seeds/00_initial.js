const tableNames = require('../../src/constants/tableNames');
const countries = require('../../src/constants/countries');
const usStates = require('../../src/constants/us_states');

const bcrypt = require('bcrypt');
const crypto = require('crypto');
const Knex = require('knex');

/**
 * @param {Knex} knex 
 */
exports.seed = async (knex) => {
  await Promise.all(Object
    .keys(tableNames)
    .map((name) => knex(name).del()));

  const password = crypto.randomBytes(15).toString('hex');
  const user = {
    name: "MV88",
    email: "teo.rubber@gmail.com",
    password: await bcrypt.hash(password, 12),
  };
  
  const [createdUser] = await knex(tableNames.user).insert([
    user,
  ]).returning("*");

  console.log("user created: ", {
    password,
  },
    createdUser,
  );


  const insertedCountries = await knex(tableNames.country)
    .insert(countries, '*');

  const usa = insertedCountries.find(country => country.code === 'US');

  usStates.forEach(state => {
    state.country_id = usa.id;
  });

  await knex(tableNames.state).insert(usStates);


};
