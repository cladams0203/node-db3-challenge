const knex = require('knex');
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes')
        .where({id : id})        
}

function findSteps(id) {
    const query = db('schemes')
        .join('steps', 'schemes.id', 'steps.scheme_id')
        .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
        return query.where('steps.scheme_id', id)    
    
}   

function add (input) {
    return db('schemes').insert(input)
    
    
}

function remove(id) {
    return db('schemes').where({id : id}).del()
}

function update(changes, id) {
    return db('schemes').where({id : id}).update(changes)
        
}