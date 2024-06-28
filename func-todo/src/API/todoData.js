import instance from "./config";

const getData = () => {
  return instance.get("/listTodo");
};

const postData = (data) => {
  return instance.post("/listTodo", data);
};

const deleteData = (id) => {
  return instance.delete(`/listTodo/${id}`);
};

const editData = (id, data) => {
  return instance.put(`/listTodo/${id}`, data);
};

const editStatus = (id, data) => {
  return instance.put(`/listTodo/${id}`, data);
};

export { getData, postData, deleteData, editData, editStatus };
