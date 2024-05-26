"use client";

import React, { useRef, useState } from "react";
import { Controller, Control } from "react-hook-form";
import { CountryDropdown } from "./country-select";
import { CountryOption } from "./_types";
import { countryRegexes } from "./_lib/country-regexes";

interface FormFieldProps {
    control: Control<any>;
    errors: { [key: string]: any };
}

const PhoneNumberInput: React.FC<FormFieldProps> = ({ control, errors }) => {
    const [countryCode, setCountryCode] = useState("");
    const [regex, setRegex] = useState(/.*/);
    const phoneNumberInputRef = useRef<null | HTMLInputElement>(null);

    const handleCountryChange = (value: CountryOption) => {
        setCountryCode(value.dialCode);
        setRegex(countryRegexes[value.dialCode] || /.*/);
    };

    const focusOnInput = () => {
        setTimeout(() => {
            if (phoneNumberInputRef && phoneNumberInputRef.current) {
                phoneNumberInputRef.current.focus();
            }
        }, 0);
    };

    return (
        <div className="flex items-center">
            <Controller
                name="country"
                control={control}
                render={({ field }) => (
                    <CountryDropdown
                        value={field.value}
                        focusOnInput={focusOnInput}
                        onChange={(value) => {
                            field.onChange(value);
                            handleCountryChange(value);
                        }}
                    />
                )}
            />

            <Controller
                name="phone"
                control={control}
                rules={{
                    validate: (value) =>
                        regex.test(value) || "Invalid phone number",
                }}
                render={({ field }) => (
                    <div className="relative flex items-center">
                        <span className="absolute left-2">{countryCode}</span>
                        <input
                            {...field}
                            disabled={!countryCode.length}
                            ref={phoneNumberInputRef}
                            type="tel"
                            placeholder="Enter phone number"
                            className={`input input-bordered ${
                                errors.phone ? "input-error" : ""
                            }`}
                            style={{
                                paddingLeft: countryCode
                                    ? `${countryCode.length + 1}ch`
                                    : "1rem",
                            }}
                        />
                    </div>
                )}
            />
        </div>
    );
};

export default PhoneNumberInput;
