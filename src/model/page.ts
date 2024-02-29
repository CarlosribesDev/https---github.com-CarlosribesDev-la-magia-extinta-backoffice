export type Page = {
    content: any[]
    numberOfElements: number;
    first: boolean;
    last: boolean;
    pageable: Pageable;
    size: number;


}

export type Pageable = {
    offset: number;
    pageNumber: number;
    pageSize: number
    paged: boolean;
}