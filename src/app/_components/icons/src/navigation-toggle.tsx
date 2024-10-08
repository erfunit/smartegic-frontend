import React from 'react';
import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIcon } from "@/app/_components/icons/icon.types";

export default function SvgIconComponent(props:SvgIcon) {
  return (
    <BaseIcon {...props}>
      <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
    </BaseIcon>
  );
}