// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Menu3LinesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Menu3LinesvgIcon(props: Menu3LinesvgIconProps) {
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
        d={"M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Menu3LinesvgIcon;
/* prettier-ignore-end */
