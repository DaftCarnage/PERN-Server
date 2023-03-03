module.exports = (sequelize, DataTypes, Model) => {

    class Usuario extends Model {}

    Usuario.init({

        email: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
          },
        contraseña: {
            type: DataTypes.STRING,
            allowNull: false
          },
        estado: {
            type: DataTypes.STRING,
            allowNull: false
            // allowNull defaults to true
          },
        es_admin: {
              type: DataTypes.BOOLEAN
              // allowNull defaults to true
          },

    },{
        sequelize,
        timestamps: false, // 
        modelName: 'usuario' // We need to choose the model name
    });

    return Usuario;
}
