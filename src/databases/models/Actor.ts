import { CreationOptional, DataTypes, InferAttributes, Model } from 'sequelize';
import sequelize from 'databases';
import Nationality from './Nationality';

export interface ActorModel extends Model<InferAttributes<ActorModel>, InferAttributes<ActorModel>> {
	id: CreationOptional<number>;
	fullName: string;
	birthday: string;
}

const Actor = sequelize.define(
	'Actor',
	{
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		fullName: {
			allowNull: false,
			type: DataTypes.STRING
		},
		birthDay: {
			type: DataTypes.DATE
		}
	},
	{
		tableName: 'actor',
		timestamps: false,
		underscored: true
	}
);

Actor.belongsTo(Nationality);
Nationality.hasOne(Actor);

export default Actor;
