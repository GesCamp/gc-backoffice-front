import { PaginationMeta } from './pagination-meta.dto';

export interface StandardizedPagination<T> {
  data: T[];
  pagination: PaginationMeta;
}
