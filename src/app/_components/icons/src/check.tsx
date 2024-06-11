import React from 'react';
import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIcon } from "@/app/_components/icons/icon.types";

export default function SvgIconComponent(props:SvgIcon) {
  return (
    <BaseIcon {...props}>
      <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
    </BaseIcon>
  );
}