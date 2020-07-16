
import _Controller from '../../controller.js';
import { handleErr } from '../../../helpers/index';
const Controller = _Controller('data/product-categories');

export async function locations() {
    try{
        const categories = await Controller.find({});
        return categories ;
    }
    catch(err){
        return [];
    }
}
export async function findAll(req, res) {
    try{
        const categories = await Controller.find({});
        return res.send({ state: true, categories });
    }
    catch(err){
        return res.send({ state: false, err });
    }
}

export async function findOne (req, res) {
    const id = req.params.id;
    try {
        const category = await Controller.findOne({ _id: id });
        return res.send({ state: true, category });
    }
    catch (err) {
        handleErr(res, err);
    }
}

export async function search(req, res) {
	
    const query = req.params.query ;

    try{
        let categories ;
        if (query == 'all') {
            categories = await Controller.find({});
        }
        else{
            let searchQuery =  { 
                $or: [{ name: new RegExp(query, 'i') } ]
            };
            categories = await Controller.search(searchQuery );
        }
        //  console.log('locations', locations);
        return res.send({ state: true, categories });
    }
    catch(err){
        return res.send({ state: false, err });
    }
}

export async function create(req, res) {
    try{
        const category = await Controller.create(req.body );
        return res.send({state: true, category });
    }
    catch(err){
        return res.send({ state: false, err });
    }
}

export async function remove(req, res) {
    try{
        const category = await Controller.remove(req.params.id);
        return res.send({ state: true, category });
    }
    catch(err){
        return res.send({ state: false, err });
    }
}

export async function update(req, res) {
    try{
        const category = await Controller.update(req.body, req.params.id );
        return res.send({ state: true, category });
    }
    catch(err){
        return res.send({ state: false, err });
    }
}