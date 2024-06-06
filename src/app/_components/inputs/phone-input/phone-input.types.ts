import { ComponentBase } from "@/types/component-base.type";
import { DefaultInputComponentProps } from "react-phone-number-input";
import { Props as BasePhoneInputProps } from "react-phone-number-input";

export type PhoneInputProps = ComponentBase &
    BasePhoneInputProps<DefaultInputComponentProps> & {
        isDisabled?: boolean;
    };
