import { Model, DataTypes } from 'sequelize';

export default class Rol extends Model {
  static init(sequelize) {
    return super.init(
      {
        nombre: DataTypes.STRING,
        direccion: DataTypes.STRING,
        telefono: DataTypes.STRING,
        mail: DataTypes.STRING,
        dni: DataTypes.STRING,
        pass: DataTypes.STRING,
        idRol: DataTypes.INTEGER,
        IdUsuario: DataTypes.INTEGER
      },
      {
        sequelize,
        modelName: 'Usuario',
      }
    );
  }
}