const knex = require('knex');
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)

module.exports = {
    find,
    findById,
    findSteps,
    // add,
    // update,
    // remove
}

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes')
        .where({id : id})        
}

function findSteps(id) {
   return db('steps')
        .where('step_number', id)
        
       
}
