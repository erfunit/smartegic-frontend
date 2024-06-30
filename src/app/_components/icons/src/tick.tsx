import React from 'react';
import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIcon } from "@/app/_components/icons/icon.types";

export default function SvgIconComponent(props:SvgIcon) {
  return (
    <BaseIcon {...props}>
      <path d="m4.5 12.75 6 6 9-13.5"/>
    </BaseIcon>
  );
}