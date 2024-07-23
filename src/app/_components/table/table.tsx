"use client";

import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import TextInput from "../inputs/text-input/text-input";
import { Button } from "../button";
import { SelectInput } from "../inputs/select-input/select-input";
import { Label } from "../Typography/Label";
import { CheckboxInput } from "../inputs/checkbox-input/checkbox-input";
import { TableProps } from "./table.types";
import { useTable } from "./hooks/use-table";
import { TableRow } from "./table-row";

export const Table = <T,>({
    columns,
    data,
    pageSize = 10,
}: // loading,
TableProps<T>) => {
    const {
        searchTerm,
        setSearchTerm,
        selectedRows,
        handleSelectRow,
        pinnedRows,
        handlePinRow,
        handleSelectAll,
        page,
        rowsPerPage,
        handleChangeRowsPerPage,
        handleChangePage,
        handleDeleteRow,
        filteredData,
        pinColumn,
        setPinColumn,
        accessors,
    } = useTable(data, pageSize, columns);

    // const renderSkeletonRows = React.useCallback(() => {
    //     return Array.from({ length: rowsPerPage }).map((_, index) => (
    //         <tr key={index} className="animate-pulse">
    //             <td aria-label="td" className="p-2">
    //                 <div className="h-8 bg-base-300 rounded"></div>
    //             </td>
    //             {columns.map((_, colIndex) => (
    //                 <td aria-label="td" key={colIndex} className="p-2">
    //                     <div className="h-8 bg-base-300 rounded"></div>
    //                 </td>
    //             ))}
    //             <td aria-label="td" className="p-2">
    //                 <div className="h-8 bg-base-300 rounded"></div>
    //             </td>
    //         </tr>
    //     ));
    // }, [rowsPerPage, columns]);

    return (
        <div className="p-4">
            <div className="mb-4 flex justify-between items-center flex-wrap">
                <TextInput
                    name="search"
                    aria-label="search"
                    type="text"
                    placeholder="Search..."
                    className="w-full md:w-1/2 lg:w-1/3 mb-2 md:mb-0"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="flex space-x-2 w-full md:w-auto">
                    <Label>Pinned Column:</Label>
                    <SelectInput
                        variant="bordered"
                        onChange={({ target: { value } }) =>
                            setPinColumn(value as keyof T)
                        }
                        items={accessors as string[]}
                        text="select..."
                    />
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full bg-base-100">
                    <thead>
                        <tr>
                            <th aria-label="th">
                                <CheckboxInput
                                    aria-label="checkbox"
                                    checked={
                                        selectedRows.size ===
                                        filteredData.length
                                    }
                                    onChange={handleSelectAll}
                                />
                            </th>
                            {columns?.map((column) => (
                                <th
                                    key={column.accessor as string}
                                    className={
                                        column.accessor === pinColumn
                                            ? "sticky left-0 bg-base-200"
                                            : ""
                                    }
                                >
                                    {column.Header}
                                </th>
                            ))}
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage,
                            )
                            .map((row, rowIndex) => (
                                <TableRow
                                    key={rowIndex}
                                    row={row}
                                    columns={columns}
                                    selectedRows={selectedRows}
                                    pinnedRows={pinnedRows}
                                    pinColumn={pinColumn}
                                    handleSelectRow={handleSelectRow}
                                    handlePinRow={handlePinRow}
                                    handleDeleteRow={handleDeleteRow}
                                />
                            ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between items-center mt-4 flex-wrap">
                <div className="flex space-x-2 mb-2 md:mb-0">
                    <Button
                        variant="primary"
                        aria-label="previous page"
                        onClick={() => handleChangePage(page - 1)}
                        disabled={page === 0}
                    >
                        <ChevronLeftIcon className="h-5 w-5" />
                    </Button>
                    <Button
                        variant="primary"
                        aria-label="next page"
                        onClick={() => handleChangePage(page + 1)}
                        disabled={
                            page >=
                            Math.ceil(filteredData.length / rowsPerPage) - 1
                        }
                    >
                        <ChevronRightIcon className="h-5 w-5" />
                    </Button>
                </div>
                <div className="flex space-x-2">
                    <Label>Rows per page:</Label>
                    <SelectInput
                        variant="bordered"
                        value={rowsPerPage}
                        onChange={handleChangeRowsPerPage}
                        items={["10", "20", "30", "40", "50"]}
                        text="select..."
                    />
                </div>
            </div>
        </div>
    );
};
