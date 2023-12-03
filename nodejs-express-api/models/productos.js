
import { BaseModel, sequelize, Sequelize } from "./basemodel.js";

class Productos extends BaseModel {
	static init() {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
				nombre: { type:Sequelize.STRING , allowNull: false ,defaultValue: Sequelize.literal('DEFAULT') },
				precio: { type:Sequelize.NUMBER , allowNull: false ,defaultValue: Sequelize.literal('DEFAULT') },
				material: { type:Sequelize.STRING   },
				tipo_id: { type:Sequelize.INTEGER   },
				tallas_id: { type:Sequelize.INTEGER   },
				proveedor_id: { type:Sequelize.INTEGER   },
				image: { type:Sequelize.STRING   }
			}, 
			{ 
				sequelize,
				
				tableName: "productos",
				modelName: "productos",
			}
		);
	}
	
	static listFields() {
		return [
			'id', 
			'nombre', 
			'precio', 
			'material', 
			'tipo_id', 
			'tallas_id', 
			'proveedor_id', 
			'image'
		];
	}

	static viewFields() {
		return [
			'id', 
			'nombre', 
			'precio', 
			'material', 
			'tipo_id', 
			'tallas_id', 
			'proveedor_id', 
			'image'
		];
	}

	static editFields() {
		return [
			'id', 
			'nombre', 
			'precio', 
			'material', 
			'tipo_id', 
			'tallas_id', 
			'proveedor_id', 
			'image'
		];
	}

	
	static searchFields(){
		return [
			Sequelize.literal("id LIKE :search"), 
			Sequelize.literal("nombre LIKE :search"), 
			Sequelize.literal("material LIKE :search"),
		];
	}

	
	
}
Productos.init();
export default Productos;
