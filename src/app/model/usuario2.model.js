module.exports = (sequelize, DataTypes) => {

    const Usuario2 = sequelize.define('Usuario2', {
        'email': {
            type: DataTypes.STRING,
            primaryKey: true
        },
        'contraseña': DataTypes.STRING,
        'estado': DataTypes.STRING,
        'es_admin': DataTypes.BOOLEAN
    },
    {
        timestamps: false
    });

    return Usuario2;

}