import React from 'react';
import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIcon } from "@/app/_components/icons/icon.types";

export default function SvgIconComponent(props:SvgIcon) {
  return (
    <BaseIcon {...props}>
      <path d="M6 18 18 6M6 6l12 12"/>
    </BaseIcon>
  );
}