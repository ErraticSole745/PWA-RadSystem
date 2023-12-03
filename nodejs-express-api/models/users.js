
import { BaseModel, sequelize, Sequelize } from "./basemodel.js";

class Users extends BaseModel {
	static init() {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
				name: { type:Sequelize.STRING , allowNull: false ,defaultValue: Sequelize.literal('DEFAULT') },
				email: { type:Sequelize.STRING , allowNull: false ,defaultValue: Sequelize.literal('DEFAULT') },
				password: { type:Sequelize.STRING , allowNull: false ,defaultValue: Sequelize.literal('DEFAULT') },
				phone: { type:Sequelize.STRING   },
				photo: { type:Sequelize.STRING , allowNull: false ,defaultValue: Sequelize.literal('DEFAULT') },
				user_role_id: { type:Sequelize.INTEGER   }
			}, 
			{ 
				sequelize,
				
				tableName: "users",
				modelName: "users",
			}
		);
	}
	
	static listFields() {
		return [
			'id', 
			'name', 
			'email', 
			'phone', 
			'photo', 
			'user_role_id'
		];
	}

	static viewFields() {
		return [
			'id', 
			'name', 
			'email', 
			'phone', 
			'user_role_id'
		];
	}

	static accounteditFields() {
		return [
			'id', 
			'name', 
			'phone', 
			'photo', 
			'user_role_id'
		];
	}

	static accountviewFields() {
		return [
			'id', 
			'name', 
			'email', 
			'phone', 
			'user_role_id'
		];
	}

	static editFields() {
		return [
			'id', 
			'name', 
			'phone', 
			'photo', 
			'user_role_id'
		];
	}

	
	static searchFields(){
		return [
			Sequelize.literal("id LIKE :search"), 
			Sequelize.literal("name LIKE :search"), 
			Sequelize.literal("email LIKE :search"), 
			Sequelize.literal("phone LIKE :search"),
		];
	}

	
	
}
Users.init();
export default Users;
