const conn = require('../database/connection')
const crypto = require('crypto');


module.exports = {
    async create(request, response) {
        const payload = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        payload.id = id;
        // Retornar id único da linha
        // const [id] = await conn('ongs').insert(payload)
        await conn('ongs').insert(payload)
        return response.json({"success": true})
    },
    async index(request, response) {
        // page/pageSize from querystring
        const {page = 0, pageSize = 5} = request.query;
        const [count] = await conn('ongs').count();

        const ongs = await conn('ongs')
            .limit(pageSize)
            .offset(page * pageSize)
            .select('*');
        
        response.header('X-Total-Count', count['count(*)']);

        return response.json(ongs)
    }
    // delete(){} return status 204 no content
};