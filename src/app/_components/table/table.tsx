"React.use client";

import React from "react";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    PencilAltIcon,
    TrashIcon,
} from "@heroicons/react/solid";
import TextInput from "../inputs/text-input/text-input";
import { Button } from "../button";
import { SelectInput } from "../inputs/select-input/select-input";
import { Label } from "../Typography/Label";
import { CheckboxInput } from "../inputs/checkbox-input/checkbox-input";
import { IconFillStar, IconOutlineStart } from "../icons";
import { TableProps } from "./table.types";

export const Table = <T,>({
    columns,
    data,
    pageSize = 10,
    loading,
}: TableProps<T>) => {
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

    const accessors = columns.map((item) => item.accessor);

    const getStringValue = (value: unknown): string => {
        if (value === null || value === undefined) return "";
        if (typeof value === "string") return value;
        if (typeof value === "number" || typeof value === "boolean")
            return value.toString();
        return "";
    };

    const filteredData = React.useMemo(() => {
        const filtered = duplicatedData.filter((row) => {
            return columns.some((column) => {
                return getStringValue(row[column.accessor])
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
            });
        });
        const pinned = Array.from(pinnedRows);
        const unpinned = filtered.filter((row) => !pinnedRows.has(row));
        return [...pinned, ...unpinned];
    }, [duplicatedData, columns, searchTerm, pinnedRows]);

    const handleSelectRow = (row: T) => {
        setSelectedRows((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(row)) {
                newSet.delete(row);
            } else {
                newSet.add(row);
            }
            return newSet;
        });
    };

    const handlePinRow = (row: T) => {
        setPinnedRows((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(row)) {
                newSet.delete(row);
            } else {
                newSet.add(row);
            }
            return newSet;
        });
    };

    const handleSelectAll = () => {
        setSelectedRows((prev) => {
            if (prev.size === filteredData.length) {
                return new Set();
            } else {
                return new Set(filteredData);
            }
        });
    };

    const handleChangePage = (newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleDeleteRow = (row: T) => {
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
    };

    const renderSkeletonRows = () => {
        return Array.from({ length: rowsPerPage }).map((_, index) => (
            <tr key={index} className="animate-pulse">
                <td aria-label="td" className="p-2">
                    <div className="h-4 bg-base-300 rounded"></div>
                </td>
                {columns.map((column, colIndex) => (
                    <td aria-label="td" key={colIndex} className="p-2">
                        <div className="h-4 bg-base-300 rounded"></div>
                    </td>
                ))}
                <td aria-label="td" className="p-2">
                    <div className="h-4 bg-base-300 rounded"></div>
                </td>
            </tr>
        ));
    };

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
                        {loading
                            ? renderSkeletonRows()
                            : filteredData
                                  .slice(
                                      page * rowsPerPage,
                                      page * rowsPerPage + rowsPerPage,
                                  )
                                  .map((row, rowIndex) => (
                                      <tr
                                          key={rowIndex}
                                          className={`${
                                              selectedRows.has(row)
                                                  ? "selected"
                                                  : ""
                                          } ${
                                              pinnedRows.has(row)
                                                  ? "bg-base-200"
                                                  : ""
                                          }`}
                                      >
                                          <td aria-label="td">
                                              <CheckboxInput
                                                  type="checkbox"
                                                  checked={selectedRows.has(
                                                      row,
                                                  )}
                                                  onChange={() =>
                                                      handleSelectRow(row)
                                                  }
                                              />
                                          </td>
                                          {columns.map((column) => (
                                              <td
                                                  key={
                                                      column.accessor as string
                                                  }
                                                  className={
                                                      column.accessor ===
                                                      pinColumn
                                                          ? "sticky left-0 bg-base-200"
                                                          : ""
                                                  }
                                              >
                                                  {getStringValue(
                                                      row[column.accessor],
                                                  )}
                                              </td>
                                          ))}
                                          <td
                                              aria-label="table data"
                                              className="flex space-x-2"
                                          >
                                              <Button
                                                  variant="primary"
                                                  shape="square"
                                                  size="sm"
                                                  aria-label="pin this row"
                                                  onClick={() =>
                                                      handlePinRow(row)
                                                  }
                                              >
                                                  {pinnedRows.has(row) ? (
                                                      <IconOutlineStart
                                                          fill="white"
                                                          className="text-white"
                                                          width={19}
                                                      />
                                                  ) : (
                                                      <IconFillStar
                                                          className="text-white"
                                                          width={19}
                                                      />
                                                  )}
                                              </Button>
                                              <Button
                                                  variant="secondary"
                                                  shape="square"
                                                  size="sm"
                                                  aria-label="edit this row"
                                                  onClick={() => {
                                                      /* handle edit */
                                                  }}
                                              >
                                                  <PencilAltIcon className="h-5 w-5 text-white" />
                                              </Button>
                                              <Button
                                                  variant="error"
                                                  shape="square"
                                                  size="sm"
                                                  aria-label="delete this row"
                                                  onClick={() =>
                                                      handleDeleteRow(row)
                                                  }
                                                  className="text-white"
                                              >
                                                  <TrashIcon className="h-5 w-5 text-white" />
                                              </Button>
                                          </td>
                                      </tr>
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
