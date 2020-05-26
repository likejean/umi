import { get, patch, post, del } from '@/../httpMethods';
import { IBase, IBaseQueryParams } from '@/pages/types';

export default async function queryBaseSearch(payload: IBaseQueryParams): Promise<any> {
  return post({ url: '/base/search', data: payload });
}
