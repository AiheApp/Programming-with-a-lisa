// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ThumbDownFillsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ThumbDownFillsvgIcon(props: ThumbDownFillsvgIconProps) {
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
          "M22 15h-3V3h3a1 1 0 011 1v10a1 1 0 01-1 1zm-5.293 1.293l-6.4 6.4a.5.5 0 01-.654.047L8.8 22.1a1.5 1.5 0 01-.553-1.57L9.4 16H3a2 2 0 01-2-2v-2.104a2 2 0 01.15-.762L4.246 3.62A1 1 0 015.17 3H16a1 1 0 011 1v11.586a1 1 0 01-.293.707z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ThumbDownFillsvgIcon;
/* prettier-ignore-end */
