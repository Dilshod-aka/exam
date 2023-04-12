const {Router} = require("express");
const todoController = require("../controllers/todo/todo.controller");

const router = Router();

router.get("/todos", todoController.find);
router.post("/todo/add", todoController.create);
router.delete("/todo/:id", todoController.deleteT);
router.put("/todo/:id", todoController.updateT);
router.get("/todo/:offset/:limit", todoController.getLimit);


module.exports = router;