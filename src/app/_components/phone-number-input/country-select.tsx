"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useClickOutside, useKeyPress } from "use-termite";
import { CountryDropdownProps, CountryOption } from "./_types";
import { getOptions } from "./_lib/getOptions";

export const CountryDropdown: React.FC<CountryDropdownProps> = ({
    value,
    onChange,
    focusOnInput,
}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [open, setOpen] = useState(false);
    const searchInputRef = useRef<null | HTMLInputElement>(null);

    const options: CountryOption[] = getOptions();

    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    const handleSelect = (option: CountryOption) => {
        onChange(option);
        setOpen(false);
        focusOnInput();
    };

    useEffect(() => {
        if (searchInputRef && searchInputRef.current) {
            if (open) {
                searchInputRef.current.focus();
            } else {
                searchInputRef.current?.blur();
            }
        }
    }, [open]);

    useClickOutside(searchInputRef, () => {
        setOpen(false);
    });

    useKeyPress("Escape", () => {
        setOpen(false);
    });

    useKeyPress("Enter", () => {
        handleSelect(filteredOptions[0]);
    });

    return (
        <div className="dropdown origin-top">
            <button
                type="button"
                onClick={() => setOpen((pre) => !pre)}
                tabIndex={0}
                role="button"
                className="btn m-2"
            >
                <div className="flex items-center">
                    <Image
                        src={value ? value.flag : "/images/emty-flag.png"}
                        alt={value ? value.label : "chose a country"}
                        width={20}
                        height={20}
                        className="m-auto object-contain"
                    />
                </div>
            </button>
            <AnimatePresence>
                {open && (
                    <motion.ul
                        initial={{ opacity: 0, scale: 0.9 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        tabIndex={0}
                        className="p-0 origin-top absolute top-16 left-0 scrollbar-thin z-[1] menu shadow bg-base-100 flex-nowrap rounded-box w-64 max-h-60 overflow-y-auto"
                    >
                        <li className="sticky top-0 rounded-lg p-2 bg-base-100 z-30">
                            <input
                                ref={searchInputRef}
                                aria-label="search countries..."
                                type="text"
                                placeholder="Search countries..."
                                className="input input-bordered w-full"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </li>
                        {filteredOptions.map((option) => (
                            <li
                                key={option.value}
                                role="button"
                                onKeyDown={() => false}
                                onClick={() => handleSelect(option)}
                            >
                                <a className="flex items-center">
                                    <Image
                                        src={option.flag}
                                        alt={option.label}
                                        width={20}
                                        height={14}
                                    />
                                    <span className="line-clamp-1 text-xs font-light">
                                        {option.label}
                                    </span>
                                    <span className="ms-auto text-xs font-light text-gray-500">
                                        ({option.dialCode})
                                    </span>
                                </a>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};
