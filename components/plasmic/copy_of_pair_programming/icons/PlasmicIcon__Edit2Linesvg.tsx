// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Edit2LinesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Edit2LinesvgIcon(props: Edit2LinesvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.167 15.739h1.178l7.762-7.762L11.928 6.8l-7.761 7.76v1.178zM17.5 17.404h-15V13.87L13.696 2.674a.833.833 0 011.178 0l2.357 2.357a.833.833 0 010 1.178l-9.529 9.53H17.5v1.666zM13.107 5.62l1.178 1.179 1.179-1.179-1.179-1.178-1.178 1.178z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Edit2LinesvgIcon;
/* prettier-ignore-end */
