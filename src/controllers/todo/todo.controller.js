const Joi = require("joi");
const todo = require("./model");

const create =async (req, res) => {
    try{
        const {title, name ,status} = req.body;
        
        const schema = Joi.object({
            title: Joi.string().min(3).max(35).required(),
            name: Joi.string().min(3).max(65).required(),
            status: Joi.boolean().required()
        });

        const {error} = schema.validate({title, name ,status});
        if (error) return res.status(400).json({message: error.message});

        await todo.create(title, name ,status);

        return res.status(200).json({message:"Success!"})
    } catch(error){
        console.log(error);
    }
};

const find = async(req, res) => {
    try{
        const todos = await todo.find();

        res.status(200).json({message: "Success!", todos})
    } catch(error) {
        console.log(error)
    }
}

const deleteT = async(req, res) => {
    const {id} = req.params;

    await todo.deleteTodo(id);

    res.status(200).json({message: "Deleted", todo})
}

const updateT = async (req, res) => {
    try{
        const {id} = req.params;
        const {title, name} = req.body;
        
        const schema = Joi.object({
            title: Joi.string().min(3).max(35).required(),
            name: Joi.string().min(3).max(65).required()
        });

        const {error} = schema.validate({title, name});
        if (error) return res.status(400).json({message: error.message});

        await todo.update(title, name, id);

        return res.status(200).json({message:"Success!", todo})
    } catch(error){
        console.log(error);
    }
};

const getLimit = async (req, res) => {
    const {offset, limit} = req.params;

    const postLimit = await todo.getLimit(offset, limit);

    if(postLimit) 
    res.status(200).json({message: "Port in limit ", data: postLimit});
};



module.exports = {
    create,
    find,
    deleteT,
    updateT,
    getLimit
}