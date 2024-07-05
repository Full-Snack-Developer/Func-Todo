import { call, put, take, takeEvery } from "redux-saga/effects";
import { getData, postData, deleteData, editData, editStatus } from "../API/todoData";
import { apiType } from "../action/apiTodoAction";
import { type } from "../reducer/todoReducer";

function* fetchTodos() {
  try {
    const response = yield call(getData);
    yield put({
      type: apiType.FETCH_TODO_DATA_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: apiType.FETCH_TODO_DATA_FAILURE,
      payload: error.message,
    });
  }
}

function* createTodo(action) {
  try {
    yield call(postData, action.payload)
  } catch (error) {
    yield put(console.log(error));
  }
}

function* removeTodo(action) {
  try {
    yield call(deleteData, action.payload);
  } catch (error) {
    yield put(console.log(error));
  }
}

function* updateTodo(action) {
  try {
     yield call(
      editData,
      action.payload.id,
      action.payload.data
    );
  } catch (error) {
    yield put(console.log(error));
  }
}

function* editStatusS(action){
  try{
    yield call(
      editStatus,
      action.payload,
    );
  }catch(error) {
    yield put(console.log(error));
  }
}


function* rootSaga() {
  yield takeEvery(apiType.FETCH_TODO_DATA, fetchTodos);
  yield takeEvery(type.ADD_TODO, createTodo);
  yield takeEvery(type.DELETE_TODO, removeTodo);
  yield takeEvery(type.EDIT_TODO, updateTodo);
  yield takeEvery(type.STATUS_TODO, editStatusS)
}

export default rootSaga;
