
import { BaseModel, sequelize, Sequelize } from "./basemodel.js";

class Tallas extends BaseModel {
	static init() {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
				color: { type:Sequelize.STRING , allowNull: false ,defaultValue: Sequelize.literal('DEFAULT') },
				disponibilidad: { type:Sequelize.INTEGER , allowNull: false ,defaultValue: Sequelize.literal('DEFAULT') }
			}, 
			{ 
				sequelize,
				
				tableName: "tallas",
				modelName: "tallas",
			}
		);
	}
	
	static listFields() {
		return [
			'id', 
			'color', 
			'disponibilidad'
		];
	}

	static viewFields() {
		return [
			'id', 
			'color', 
			'disponibilidad'
		];
	}

	static editFields() {
		return [
			'id', 
			'color', 
			'disponibilidad'
		];
	}

	
	static searchFields(){
		return [
			Sequelize.literal("id LIKE :search"), 
			Sequelize.literal("color LIKE :search"),
		];
	}

	
	
}
Tallas.init();
export default Tallas;
