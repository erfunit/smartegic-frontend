import React from "react";
import { IconHide, IconShow } from "../../icons/icons";

export const PasswordToggle: React.FC<{
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setShow }) => (
    <label className="swap">
        <input
            aria-label="switch"
            type="checkbox"
            onClick={() => setShow((prev) => !prev)}
        />
        <div className="swap-off">
            <IconShow />
        </div>
        <div className="swap-on">
            <IconHide />
        </div>
    </label>
);
