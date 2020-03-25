const conn = require('../database/connection')
const crypto = require('crypto');


module.exports = {
    create(req, resp) {
        // TODO: Debugar e descobrir pq não consigo acessar o body
        const payload = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        // TODO: Descobrir como adicionar atributo à uma classe:
        // payload.id = id
        console.log(payload);
        // TODO: Testar inserção no banco:
        conn('ongs').insert(payload)
        return response.json({"success": true})
    }
};