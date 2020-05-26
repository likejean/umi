import { Effect, Reducer } from 'umi';
import { get } from 'lodash';
import queryBaseSearch from '@/pages/queries';

const Model = {
  namespace: 'Counter',
  state: {
    count: 100
  },
  effects: {
    *baseSearch({ payload }, { call, put }) {
      console.log('payload', payload);
      const data = yield call(queryBaseSearch, payload);
      console.log(data);
      yield put({
        type: 'save',
        payload: {
          baseList: get(data, 'payload.items'),
          basePager: get(data, 'payload.pager'),
        },
      });
    },
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
    },
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    }
  }
}

export default Model;
