export interface CountryOption {
    value: string;
    label: string;
    dialCode: string;
    flag: string;
}

export interface CountryDropdownProps {
    value: CountryOption | null;
    onChange: (value: CountryOption) => void;
    focusOnInput: () => void;
}
