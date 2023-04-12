const {fetchOne, fetch} = require("../../utils/pg");

const addTodo = `insert into todos(title, name, status)values($1, $2, $3)`;
const getTodo = "select * from todos";
const deletetodo = "delete from todos where id=$1";
const updateTodo = "update todos set status = $2 where id = $1";
const getlimit = "select * from todos offset 0 limit $1"
const updateUser = "update todos set title = $2 where id = $1"

const create  = (title, name ,status)=> fetchOne(addTodo, title, name ,status);
const find = () => fetch(getTodo);
const deleteTodo = (id) => fetchOne(deletetodo, id);
const updatetodo = (id, status) => fetchOne(updateTodo, title, id, status = null);
const getLimit = (id) => fetchOne(getlimit, id);
const update = (id) =>fetchOne(updateUser, id);

module.exports = {
    create,
    find,
    update,
    deleteTodo,
    updatetodo,
    getLimit,
};