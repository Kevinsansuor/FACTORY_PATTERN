class UsuarioPlatino {
    constructor({ usuarioId, nivel }) {
        this.usuarioId = usuarioId;
        this.nivel = nivel || 0;
    }
}

module.exports = UsuarioPlatino;
