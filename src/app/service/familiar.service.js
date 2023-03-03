const { connect } = require('../../config/db');

class FamiliarService {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
        /*
        this.db.sequelize.sync({ force: true }).then(() => {
            console.log("Drop and re-sync db.");
        });
        */
    }

    async getFamiliares() {
        
        try {
            const familiares = await this.db.familiares.findAll();
            console.log('Familiares:::', familiares);
            return familiares;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async getFamiliar(familiar){

        try{
            const familia = await this.db.familiares.findOne({
                where: {
                    id: familiar.id
                }
            });

        } catch(err){
            console.log(err);
            return [];
        }

    }

    async createFamiliar(familiar) {
        let data = {};
        try {
            data = await this.db.familiares.create(familiar);
        } catch(err) {
            console.log(err);
        }
        return data;
    }

    async updateFamiliar(familiar) {
        let data = {};
        try {
            data = await this.db.familiares.update({...familiar}, {
                where: {
                    id: familiar.id
                }
            });
        } catch(err) {
            console.log(err);
        }
        return data;
    }

    async deleteFamiliar(familiar) {
        let data = {};
        try {
            data = await this.db.familiares.destroy({
                where: {
                    id: familiar
                }
            });
        } catch(err) {
            console.log(err);
        }
        return data;
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new FamiliarService();