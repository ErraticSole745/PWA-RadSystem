
import { BaseModel, sequelize, Sequelize } from "./basemodel.js";

class Proveedores extends BaseModel {
	static init() {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
				nombre: { type:Sequelize.STRING , allowNull: false ,defaultValue: Sequelize.literal('DEFAULT') },
				direccion: { type:Sequelize.STRING   },
				numero: { type:Sequelize.STRING   }
			}, 
			{ 
				sequelize,
				
				tableName: "proveedores",
				modelName: "proveedores",
			}
		);
	}
	
	static listFields() {
		return [
			'id', 
			'nombre', 
			'direccion', 
			'numero'
		];
	}

	static viewFields() {
		return [
			'id', 
			'nombre', 
			'direccion', 
			'numero'
		];
	}

	static editFields() {
		return [
			'id', 
			'nombre', 
			'direccion', 
			'numero'
		];
	}

	
	static searchFields(){
		return [
			Sequelize.literal("id LIKE :search"), 
			Sequelize.literal("nombre LIKE :search"), 
			Sequelize.literal("direccion LIKE :search"), 
			Sequelize.literal("numero LIKE :search"),
		];
	}

	
	
}
Proveedores.init();
export default Proveedores;
