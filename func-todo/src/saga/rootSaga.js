import { call, put, takeEvery } from "redux-saga/effects";
import { getData, postData, deleteData, editData } from "../API/todoData";
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
    const response = yield call(postData, action.payload);
    yield put({ type: type.ADD_TODO, payload: response.data });
  } catch (error) {
    yield put(console.log(error));
  }
}

function* removeTodo(action) {
  try {
    yield call(deleteData, action.payload.id);
    yield put({ type: type.DELETE_TODO, payload: action.payload.id });
  } catch (error) {
    yield put(console.log(error));
  }
}

function* updateTodo(action) {
  try {
    const response = yield call(
      editData,
      action.payload.id,
      action.payload.data
    );
    yield put({ type: type.EDIT_TODO, payload: response.data });
  } catch (error) {
    yield put(console.log(error));
  }
}

function* rootSaga() {
  yield takeEvery("FETCH_DATA_REQUEST", fetchTodos);
  yield takeEvery("ADD_DATA_SUCCESS", createTodo);
  yield takeEvery("DELETE_DATA_SUCCESS", removeTodo);
  yield takeEvery("EDIT_DATA_SUCCESS", updateTodo);
}

export default rootSaga;
