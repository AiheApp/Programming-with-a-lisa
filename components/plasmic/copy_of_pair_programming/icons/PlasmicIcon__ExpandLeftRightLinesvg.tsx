// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ExpandLeftRightLinesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ExpandLeftRightLinesvgIcon(
  props: ExpandLeftRightLinesvgIconProps
) {
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
          "M14.207 6L8 12.207l6.207 6.207L15.621 17l-4.793-4.793 4.793-4.793L14.207 6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ExpandLeftRightLinesvgIcon;
/* prettier-ignore-end */
