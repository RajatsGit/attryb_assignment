const oemSpecs = require('../models/OEMSpecs');
const inventoryModel = require('../models/InventoryModel');


const inventoryController = async(req,res)=>{
    try {
        const newInventory = new inventoryModel(req.body);
        await newInventory.save();
        res.status(201).send({
            successs:true,
            message:'Added Successfully'
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Something Went Wrong`,
          });
    }
}

const fetchOEMDetailsController = async(req,res)=>{
    try {
        const oem = await oemSpecs.find();
        res.status(200).send({
            success:true,
            data:oem
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Something Went Wrong`,
          });
    }
}


const fetchCarDetails = async(req,res)=>{
    try {
        const carDetails = await inventoryModel.find({ userId : req.body.userId });
        console.log(carDetails);
        res.status(200).send({
            success:true,
            data:carDetails

        })

       
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Something Went Wrong`,
          });
    }
}

const editCardetail = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

const deleteCarDetail = async(req,res)=>{
    try {
        const deleted = await inventoryModel.deleteOne({userId:req.body.userId});
        if(deleted){
            res.status(200).send({
                success:true,
                message:'Deleted Successfully'

            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Something Went Wrong`,
          });
        
    }
}

const deleteManyCarDetails = async(req,res)=>{
    try {
        const 
    } catch (error) {
        
    }
}

    module.exports = {
        inventoryController,
        fetchOEMDetailsController,
        
        fetchCarDetails,
        deleteCarDetail
    };