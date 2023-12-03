<?php 
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class Productos extends Model 
{
	

	/**
     * The table associated with the model.
     *
     * @var string
     */
	protected $table = 'productos';
	

	/**
     * The table primary key field
     *
     * @var string
     */
	protected $primaryKey = 'id';
	

	/**
     * Table fillable fields
     *
     * @var array
     */
	protected $fillable = ["nombre","precio","material","tipo_id","tallas_id","proveedor_id","image"];
	

	/**
     * Set search query for the model
	 * @param \Illuminate\Database\Eloquent\Builder $query
	 * @param string $text
     */
	public static function search($query, $text){
		//search table record 
		$search_condition = '(
				id LIKE ?  OR 
				nombre LIKE ?  OR 
				material LIKE ? 
		)';
		$search_params = [
			"%$text%","%$text%","%$text%"
		];
		//setting search conditions
		$query->whereRaw($search_condition, $search_params);
	}
	

	/**
     * return list page fields of the model.
     * 
     * @return array
     */
	public static function listFields(){
		return [ 
			"id", 
			"nombre", 
			"precio", 
			"material", 
			"tipo_id", 
			"tallas_id", 
			"proveedor_id", 
			"image" 
		];
	}
	

	/**
     * return exportList page fields of the model.
     * 
     * @return array
     */
	public static function exportListFields(){
		return [ 
			"id", 
			"nombre", 
			"precio", 
			"material", 
			"tipo_id", 
			"tallas_id", 
			"proveedor_id", 
			"image" 
		];
	}
	

	/**
     * return view page fields of the model.
     * 
     * @return array
     */
	public static function viewFields(){
		return [ 
			"id", 
			"nombre", 
			"precio", 
			"material", 
			"tipo_id", 
			"tallas_id", 
			"proveedor_id", 
			"image" 
		];
	}
	

	/**
     * return exportView page fields of the model.
     * 
     * @return array
     */
	public static function exportViewFields(){
		return [ 
			"id", 
			"nombre", 
			"precio", 
			"material", 
			"tipo_id", 
			"tallas_id", 
			"proveedor_id", 
			"image" 
		];
	}
	

	/**
     * return edit page fields of the model.
     * 
     * @return array
     */
	public static function editFields(){
		return [ 
			"id", 
			"nombre", 
			"precio", 
			"material", 
			"tipo_id", 
			"tallas_id", 
			"proveedor_id", 
			"image" 
		];
	}
	

	/**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
	public $timestamps = false;
}
