export type Column<T> = {
    Header: string;
    accessor: keyof T;
};

export type TableProps<T> = {
    columns: Column<T>[];
    data?: T[];
    pageSize?: number;
    loading?: boolean;
};
