import React from "react";
import { Column } from "../table.types";
import { getStringValue } from "@/lib/get-string-value";
import useConfirm from "@/hooks/use-confirm";

export const useTable = <T>(
    data: T[] | undefined,
    pageSize: number,
    columns: Column<T>[] | undefined,
) => {
    const [duplicatedData, setDuplicatedData] = React.useState<T[]>(data || []);
    const [searchTerm, setSearchTerm] = React.useState<string>("");
    const [selectedRows, setSelectedRows] = React.useState<Set<T>>(new Set());
    const [pinnedRows, setPinnedRows] = React.useState<Set<T>>(new Set());
    const [pinColumn, setPinColumn] = React.useState<keyof T | null>(null);
    const [page, setPage] = React.useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = React.useState<number>(pageSize);

    React.useEffect(() => {
        if (data) setDuplicatedData(data);
    }, [data]);

    const accessors = React.useMemo(
        () => columns?.map((item) => item.accessor),
        [columns],
    );

    const filteredData = React.useMemo(() => {
        const filtered = duplicatedData.filter((row) => {
            return columns?.some((column) => {
                return getStringValue(row[column.accessor])
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
            });
        });
        const pinned = Array.from(pinnedRows);
        const unpinned = filtered.filter((row) => !pinnedRows.has(row));
        return [...pinned, ...unpinned];
    }, [duplicatedData, columns, searchTerm, pinnedRows, getStringValue]);

    const handleSelectRow = React.useCallback((row: T) => {
        setSelectedRows((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(row)) {
                newSet.delete(row);
            } else {
                newSet.add(row);
            }
            return newSet;
        });
    }, []);

    const handlePinRow = React.useCallback((row: T) => {
        setPinnedRows((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(row)) {
                newSet.delete(row);
            } else {
                newSet.add(row);
            }
            return newSet;
        });
    }, []);

    const handleSelectAll = React.useCallback(() => {
        setSelectedRows((prev) => {
            if (prev.size === filteredData.length) {
                return new Set();
            } else {
                return new Set(filteredData);
            }
        });
    }, [filteredData]);

    const handleChangePage = React.useCallback((newPage: number) => {
        setPage(newPage);
    }, []);

    const handleChangeRowsPerPage = React.useCallback(
        (event: React.ChangeEvent<HTMLSelectElement>) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
        },
        [],
    );

    const handleDeleteRow = React.useCallback((row: T) => {
        setDuplicatedData((prev) => prev.filter((r) => r !== row));
        setSelectedRows((prev) => {
            const newSet = new Set(prev);
            newSet.delete(row);
            return newSet;
        });
        setPinnedRows((prev) => {
            const newSet = new Set(prev);
            newSet.delete(row);
            return newSet;
        });
    }, []);

    const withConfirmDeleteRow = useConfirm(
        handleDeleteRow,
        "Are you sure you want to delete this row?",
    );

    return {
        duplicatedData,
        searchTerm,
        setSearchTerm,
        selectedRows,
        handleSelectRow,
        pinnedRows,
        handlePinRow,
        handleSelectAll,
        page,
        setPage,
        rowsPerPage,
        handleChangeRowsPerPage,
        handleChangePage,
        handleDeleteRow: withConfirmDeleteRow,
        filteredData,
        pinColumn,
        setPinColumn,
        accessors,
    };
};
