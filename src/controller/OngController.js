const db = require('../database/connection')
const crypto = require('crypto');


module.exports = {
    async create(request, response) {
        const payload = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        payload.id = id;

        await db('ongs').insert(payload)
        return response.json({"success": true, 'id': id})
    },

    async index(request, response) {
        // page and pageSize from querystring
        const {page = 0, pageSize = 5} = request.query;
        const [count] = await db('ongs').count();

        const ongs = await db('ongs')
            .limit(pageSize)
            .offset(page * pageSize)
            .select('*');
        
        response.header('X-Total-Count', count['count(*)']);

        return response.json(ongs)
    },

    async incidentsByOng(request, response) {
        const ong_id = request.params.id;

        const incidents = await db('incidents')
            .where('ong_id', ong_id)
            .select('*');

            return response.json(incidents)
    }
    // delete(){} return status 204 no content
};