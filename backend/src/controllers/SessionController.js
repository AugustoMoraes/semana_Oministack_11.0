const connection = require('../database/connection');

module.exports = {
    async create(requeste, response){
        const {id} = requeste.body;

        const ong = await connection('ongs')
        .where('id', id)
        .select('nome')
        .first()

        if(!ong){
            return response.status(400).json({error:  'No ONG found with this ID'});
        }
        return response.json(ong);
    }
}