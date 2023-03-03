const { connect } = require('../../config/db');


class UsuarioService {

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

    async getUsuarios() {
        
        try {
            const usuario = await this.db.usuario.findAll();
            console.log('Usuarios:::', usuario);
            return usuario;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createUsuario(usuario) {
        let data = {};
        try {
            data = await this.db.usuario.create(usuario);
        } catch(err) {
            console.log(err);
        }
        return data;
    }

    async updateUsuario(usuario) {
        let data = {};
        try {
            data = await this.db.usuario.update({...usuario}, {
                where: {
                    id: usuario.id
                }
            });
        } catch(err) {
            console.log(err);
        }
        return data;
    }

    async deleteUsuario(usuario) {
        let data = {};
        try {
            data = await this.db.usuario.destroy({
                where: {
                    id: usuario
                }
            });
        } catch(err) {
            console.log(err);
        }
        return data;
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new UsuarioService();