import React, {useEffect} from 'react';
import { connect, history } from 'umi';
import BaseFilterForm from '../form/BaseFilterForm';
import { get, omitBy } from 'lodash';
import { IBaseQueryParams } from '@/pages/types';

//начальное значение квери параметров
const initialSearchForm = {
  baseSearchParam1: '',
  baseSearchParam2: '',
};

const initialSearchQuery = {
  limit: 5,
  page: 1,
  ...initialSearchForm,
};

const mapStateToProps = (state: any) => ({
  Counter: state.Counter,
});

const mapDispatchToProps = (dispatch: any) => ({
  baseSearch: (payload: IBaseQueryParams) => dispatch({ type: 'Counter/baseSearch', payload })

});

export default connect(mapStateToProps, mapDispatchToProps)((props: any) => {

  const queryParams = get(props, 'location.query', {});

  const getSearchQuery = (mixin = {}) => {
    const query = { ...initialSearchQuery, ...queryParams, ...mixin };
    return omitBy(query, (a) => !a); // удалить пустые ключи
  };

  // поиск в зависимости от изменения параметров
  useEffect(() => {
    console.log(queryParams)
    search(getSearchQuery());
  }, [queryParams]);

  const search = (params: any) => {
    console.log('Params',params)
    props.baseSearch(params);
  };

  return (
    <div>
      <h1>Info</h1>
      <h2>FORM</h2>
      <p>motion, interaction and distraction though it is, today’s World Wide Web is still primarily a conduit for textual information. In HTML5, the focus on writing and authorship is more pronounced than ever.</p>
      {/*<BaseFilterForm filters={getSearchQuery()} onChange={onFiltersChange} />*/}
    </div>
  );
});
