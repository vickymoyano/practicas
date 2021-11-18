import { Model, DataTypes } from 'sequelize';

export default class Materia extends Model {
  static init(sequelize) {
    return super.init(
      {
        nombre: DataTypes.STRING,
        IdCarrera: DataTypes.INTEGER
      },
      {
        sequelize,
        modelName: 'Materia',
      }
    );
  }
}
