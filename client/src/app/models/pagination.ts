export interface MetaData {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalCount: number;
}

export class PaginatedResponse<T> {
  constructor(public items: T, public metaData: MetaData) {}
}
