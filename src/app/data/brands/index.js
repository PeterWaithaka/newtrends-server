import _Controller from '../../controller.js';
const Controller = _Controller('data/brands');
import { handleErr } from '../../../helpers/index';

//  const Industry = require('../controller.js')('industries');

export async function brands() {
    try{
        const brands = await Controller.find({});
        return brands ;
    }
    catch(err){
        return [];
    }
}
export async function findAll(req, res) {
    try{
        const brands = await Controller.find({});
        return res.send({state :true, brands});
    }
    catch(err){
        return res.send({state :false, err });
    }
}

export async function findOne (req, res) {
    const id = req.params.id;
    try {
        const brand = await Controller.findOne({ _id: id });
        return res.send({ state: true, brand });
    }
    catch (err) {
        handleErr(res, err);
    }
}

export async function search(req, res) {
	
    const query = req.params.query ;

    try{
        let brands ;
        if (query == 'all') {
            brands = await Controller.find({});
        }
        else{
            const searchQuery = {
                $or: [ { name: new RegExp(query, 'i') } ]
            };
            brands = await Controller.search(searchQuery);
        }
        //  console.log('ind', industries);
        return res.send({ state :true, brands });
    }
    catch(err){
        return res.send({state :false, err });
    }
}

export async function create(req, res) {
    try{
        const brand = await Controller.create(req.body );
        return res.send({ state :true, brand });
    }
    catch(err){
        return res.send({state :false, err });
    }
}

export async function remove(req, res) {
    try{
        const brand = await Controller.remove(req.params.id);
        return res.send({ state :true, brand });
    }
    catch(err){
        return res.send({state :false, err });
    }
}

export async function update(req, res) {
    try{
        const brand = await Controller.update(req.body, req.params.id );
        return res.send({ state :true, brand });
    }
    catch(err){
        return res.send({state :false, err });
    }
}



