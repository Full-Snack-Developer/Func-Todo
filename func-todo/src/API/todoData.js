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

export { getData, postData, deleteData };
