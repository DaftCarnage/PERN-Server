const usuarioService = require('../service/usuario.service');

class UsuarioController {

    async getUsuarios() {
        
        return await usuarioService.getUsuarios();
    }

    async createUsuario(usuario) {
        
        return await usuarioService.createUsuario(usuario);
    }

    async updateUsuario(usuario) {

        return await usuarioService.updateUsuario(usuario);
    }

    async deleteUsuario(usuario) {

        return await usuarioService.deleteUsuario(usuario);
    }

}
module.exports = new UsuarioController();