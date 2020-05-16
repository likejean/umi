import { Effect, Reducer } from 'umi';

const Model = {
  namespace: 'Counter',
  state: {
    count: 100
  },
  effects: {
    *plus({}, { put }){
      yield put({ type: 'increase' });
    },
    *minus({}, { put }){
      yield put({ type: 'decrease' });
    }
  },
  reducers: {
    increase(state) {
      return {
        count: state.count + 1
      }
    },
    decrease(state) {
      return {
        count: state.count - 1
      }
    }
  }
}

export default Model;
