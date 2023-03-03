module.exports = (sequelize, DataTypes, Model) => {

    class Familiar extends Model {}

    Familiar.init({
        // Model attributes are defined here
        nombres: {
          type: DataTypes.STRING,
          allowNull: false
        },
        apellidos: {
          type: DataTypes.STRING,
          allowNull: false
        },
        relacion: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        telefono: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        ci: {
            type: DataTypes.STRING,
            allowNull: false
        },
        direccion: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        email: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'familiares' // We need to choose the model name
      });
      
      return Familiar;
}