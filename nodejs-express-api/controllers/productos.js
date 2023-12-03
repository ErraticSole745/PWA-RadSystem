import { Router } from 'express';
import { body } from 'express-validator';
import uploader from '../helpers/uploader.js';
import validateFormData from '../helpers/validate_form.js';
import DB from '../models/db.js';


const router = Router();




/**
 * Route to list productos records
 * @GET /productos/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req, res) => {  
	try{
		const query = {};
		let queryFilters = [];
		let where = {};
		let replacements = {};
		let fieldName = req.params.fieldname;
		let fieldValue = req.params.fieldvalue;
		
		if (fieldName){
			queryFilters.push(DB.filterBy(fieldName, fieldValue));
		}
		let search = req.query.search;
		if(search){
			let searchFields = DB.Productos.searchFields();
			where[DB.op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		if(queryFilters.length){
			where[DB.op.and] = queryFilters;
		}
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = DB.getOrderBy(req, 'id', 'desc');
		query.attributes = DB.Productos.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 10;
		let result = await DB.Productos.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Productos record
 * @GET /productos/view/{recid}
 */
router.get('/view/:recid', async (req, res) => {
	try{
		const recid = req.params.recid || null;
		const query = {}
		const where = {}
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = DB.Productos.viewFields();
		let record = await DB.Productos.findOne(query);
		if(!record){
			return res.notFound();
		}
		return res.ok(record);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to insert Productos record
 * @POST /productos/add
 */
router.post('/add/', 
	[
		body('nombre').not().isEmpty(),
		body('precio').not().isEmpty().isNumeric(),
		body('material').optional({nullable: true, checkFalsy: true}),
		body('tipo_id').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('tallas_id').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('proveedor_id').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('image').optional({nullable: true, checkFalsy: true}),
	], validateFormData
, async function (req, res) {
	try{
		let modeldata = req.getValidFormData();
		
        // move uploaded file from temp directory to destination directory
		if(modeldata.image !== undefined) {
			const fileInfo = uploader.moveUploadedFiles(modeldata.image, 'image');
			modeldata.image = fileInfo.filepath;
		}
		
		//save Productos record
		let record = await DB.Productos.create(modeldata);
		//await record.reload(); //reload the record from database
		const recid =  record['id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Productos record for edit
 * @GET /productos/edit/{recid}
 */
router.get('/edit/:recid', async (req, res) => {
	try{
		const recid = req.params.recid;
		const query = {};
		const where = {};
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = DB.Productos.editFields();
		let record = await DB.Productos.findOne(query);
		if(!record){
			return res.notFound();
		}
		return res.ok(record);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to update  Productos record
 * @POST /productos/edit/{recid}
 */
router.post('/edit/:recid', 
	[
		body('nombre').optional({nullable: true}).not().isEmpty(),
		body('precio').optional({nullable: true}).not().isEmpty().isNumeric(),
		body('material').optional({nullable: true, checkFalsy: true}),
		body('tipo_id').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('tallas_id').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('proveedor_id').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('image').optional({nullable: true, checkFalsy: true}),
	], validateFormData
, async (req, res) => {
	try{
		const recid = req.params.recid;
		let modeldata = req.getValidFormData({ includeOptionals: true });
		
        // move uploaded file from temp directory to destination directory
		if(modeldata.image !== undefined) {
			const fileInfo = uploader.moveUploadedFiles(modeldata.image, 'image');
			modeldata.image = fileInfo.filepath;
		}
		const query = {};
		const where = {};
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = DB.Productos.editFields();
		let record = await DB.Productos.findOne(query);
		if(!record){
			return res.notFound();
		}
		await DB.Productos.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Productos record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @GET /productos/delete/{recid}
 */
router.get('/delete/:recid', async (req, res) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = {};
		const where = {};
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		let records = await DB.Productos.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await DB.Productos.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
export default router;
