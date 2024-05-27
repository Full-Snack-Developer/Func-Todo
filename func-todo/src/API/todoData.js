import instance from "./config";

const getData = () => {
  return instance.get("/listTodo");
};

const postData = (data) => {
  return instance.post("/listTodo", data);
};

export { getData, postData };
