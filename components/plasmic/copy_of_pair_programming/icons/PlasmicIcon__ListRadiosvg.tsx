// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ListRadiosvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ListRadiosvgIcon(props: ListRadiosvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.5 7a2 2 0 10-4 0 2 2 0 004 0zm2 0a4 4 0 11-8 0 4 4 0 018 0zM21 4h-8v2h8V4zm0 7h-8v2h8v-2zm0 7h-8v2h8v-2zM6.5 19a2 2 0 110-4 2 2 0 010 4zm0 2a4 4 0 100-8 4 4 0 000 8zm0-13a1 1 0 100-2 1 1 0 000 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ListRadiosvgIcon;
/* prettier-ignore-end */
