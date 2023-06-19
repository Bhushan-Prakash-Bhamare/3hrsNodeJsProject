const mainModel=require('../models/Main');

exports.getAllItems=async(req, res, next)=>{
    try{
        const data=await mainModel.findAll();
        res.status(201).json({itemsData:data});
    }
    catch(err){
        res.status(500).json({error:err});
    }   
};

exports.postAddItem=async(req, res, next)=>{
    try{
        const name=req.body.name;
        const description=req.body.description;
        const price=req.body.price;
        const quantity=req.body.quantity;
        const data= await mainModel.create({name:name,description:description,price:price,quantity:quantity});
        res.status(201).json({newItemData:data});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:err});
    }
    
}

exports.getItem=async(req, res, next)=>{
    try{
        const uId=req.params.id;
        const recItem=await mainModel.findAll({where:{id:uId}});
        res.status(201).json({recItemData:recItem[0]});   
    }
    catch(err){
        res.status(500).json({error:err});
    }

};

exports.putItem=async(req, res, next)=>{
    try{
        let updatedData={
                    name:req.body.name,
                    description:req.body.description,
                    price:req.body.price,
                    quantity:req.body.quantity
        }
        const uId=req.params.id;
        await mainModel.update(updatedData,{where:{id:uId}});
        res.sendStatus(200);   
    }
    catch(err){
        res.status(500).json({error:err});
    }
};
 
