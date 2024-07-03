"use client";

import React from "react";
import { CheckboxInput } from "../inputs/checkbox-input";
import { getStringValue } from "@/lib/get-string-value";
import { Button } from "../button";
import { IconFillStar, IconOutlineStart } from "../icons";
import { PencilAltIcon } from "@heroicons/react/solid";
import { TrashIcon } from "@heroicons/react/solid";

export const TableRow = <T,>({
    row,
    columns,
    selectedRows,
    pinnedRows,
    pinColumn,
    handleSelectRow,
    handlePinRow,
    handleDeleteRow,
}: {
    row: T;
    columns: Array<{ accessor: keyof T; Header: string }>;
    selectedRows: Set<T>;
    pinnedRows: Set<T>;
    pinColumn: keyof T | null;
    handleSelectRow: (row: T) => void;
    handlePinRow: (row: T) => void;
    handleDeleteRow: (row: T) => void;
}) => {
    return (
        <tr
            className={`${selectedRows.has(row) ? "selected" : ""} ${
                pinnedRows.has(row) ? "bg-base-200" : ""
            }`}
        >
            <td aria-label="td">
                <CheckboxInput
                    type="checkbox"
                    checked={selectedRows.has(row)}
                    onChange={() => handleSelectRow(row)}
                />
            </td>
            {columns.map((column) => (
                <td
                    key={column.accessor as string}
                    className={
                        column.accessor === pinColumn
                            ? "sticky left-0 bg-base-200"
                            : ""
                    }
                >
                    {getStringValue(row[column.accessor])}
                </td>
            ))}
            <td aria-label="table data" className="flex gap-x-2">
                <Button
                    variant="primary"
                    shape="square"
                    size="sm"
                    aria-label="pin this row"
                    onClick={() => handlePinRow(row)}
                >
                    {pinnedRows.has(row) ? (
                        <IconOutlineStart
                            fill="white"
                            className="text-white"
                            width={19}
                        />
                    ) : (
                        <IconFillStar className="text-white" width={19} />
                    )}
                </Button>
                <Button
                    variant="secondary"
                    shape="square"
                    size="sm"
                    aria-label="edit this row"
                >
                    <PencilAltIcon className="h-5 w-5 text-white" />
                </Button>
                <Button
                    variant="error"
                    shape="square"
                    size="sm"
                    aria-label="delete this row"
                    onClick={() => handleDeleteRow(row)}
                >
                    <TrashIcon className="h-5 w-5 text-white" />
                </Button>
            </td>
        </tr>
    );
};
