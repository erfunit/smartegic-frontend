import clsx from "clsx";
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FileInputProps } from "./file-input.types";

const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
    (
        {
            placeholder,
            variant,
            size,
            className,
            acceptFormat,
            isDisabled,
            ...rest
        },
        ref: React.ForwardedRef<HTMLInputElement>,
    ) => {
        const [files, setFiles] = useState<File[]>([]);

        const onDrop = useCallback((acceptedFiles: File[]) => {
            setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
        }, []);

        const { getRootProps, getInputProps, isDragActive } = useDropzone({
            onDrop,
            disabled: isDisabled,
            multiple: true,
        });

        const handleRemoveFile = (fileToRemove: File) => {
            setFiles((prevFiles) =>
                prevFiles.filter((file) => file !== fileToRemove),
            );
        };

        const classes = clsx(
            "flex flex-col gap-2 items-center fileinput",
            "w-full p-4 border border-dashed",
            {
                [`fileinput-${variant}`]: !!variant,
                [`fileinput-${size}`]: !!size,
                [`file-input-disabled`]: !!isDisabled,
                "border-blue-500": isDragActive,
            },
            className,
        );

        return (
            <div
                {...getRootProps({
                    className: classes,
                    style: { height: "fit-content" },
                })}
            >
                <input
                    className="hidden"
                    type="file"
                    aria-label={placeholder}
                    ref={ref}
                    accept={acceptFormat}
                    {...rest}
                    {...getInputProps()}
                />
                <p className="text-gray-600">
                    {isDragActive ? "Drop files here..." : placeholder}
                </p>
                <div className="w-full mt-2">
                    {files.map((file, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center bg-gray-100 p-2 rounded-md mb-2"
                        >
                            <span className="text-sm text-gray-800">
                                {file.name}
                            </span>
                            <button
                                type="button"
                                className="text-red-500 hover:text-red-700"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveFile(file);
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        );
    },
);

FileInput.displayName = "FileInput";

export default FileInput;
