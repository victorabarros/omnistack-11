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

    async delete(request, response) {
        // page and pageSize from query param
        const {page = 0, pageSize = 5} = request.query;
        const id = request.params.id;
        const ong_id = request.headers['ong-id'];

        const result = await db('incidents')
            .limit(pageSize)
            .offset(page * pageSize)
            .where('id', id)
            .where('ong_id', ong_id)
            .delete();
        if (result == 0){
            return response.status(401).json({"message": "No row found."})
        };
        return response.status(204).send();
    }
};
