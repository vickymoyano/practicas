import { Model, DataTypes } from 'sequelize';

export default class Curso extends Model {
  static init(sequelize) {
    return super.init(
      {
        horario: DataTypes.STRING,
        idProfesor: DataTypes.INTEGER,
        IdMateria: DataTypes.INTEGER
      },
      {
        sequelize,
        modelName: 'Curso',
      }
    );
  }
}