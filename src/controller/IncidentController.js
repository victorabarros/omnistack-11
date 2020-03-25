const db = require('../database/connection')

// Incident db schema:
// table.string('title').notNullable();
// table.string('description').notNullable();
// table.string('value').notNullable();
// table.string('ong_id').notNullable(); => table.foreign('ong_id').references('id').inTable('ongs');

module.exports = {
    async create(request, response) {
        const payload = request.body;
        payload.ong_id = request.headers['ong-id'];

        const [id] = await db('incidents').insert(payload);
        return response.json({'success': true, "id": id})
    },

    async index(request, response) {
        // page and pageSize from query param
        const {page = 0, pageSize = 5} = request.query;
        const [count] = await db('incidents').count();

        const incidents = await db('incidents')
            .limit(pageSize)
            .offset(page * pageSize)
            .select('*');
        
        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents)
    },

    async indexByOngId(request, response) {
        return response.json({'message': 'not implemented yet.'})
    },

    async delete(request, response) {
        // incident id from route param
        const id = request.params.id;
        const ong_id = request.headers['ong-id'];

        const incident = await db('incidents')
            .where('id', id)
            .first();
        
        if (ong_id != incident.ong_id) {
            return response.status(401)
                           .json({'error': 'Ong Id doesn\'t match'})
        }
        // Seria mais eficiente tentar fazer o delete com duas condicionais:
        // id e ong_id? Não não necessita fazer duas queries
        await db('incidents').where('id', id).delete();
        return response.json({'success': true})
    }
};