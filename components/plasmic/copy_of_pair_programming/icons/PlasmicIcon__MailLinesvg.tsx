// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MailLinesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MailLinesvgIcon(props: MailLinesvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.003 2h12c.368 0 .666.298.666.667v10.666a.667.667 0 01-.666.667h-12a.667.667 0 01-.667-.667V2.667c0-.369.298-.667.667-.667zm11.333 2.825L8.05 9.56 2.67 4.81v7.856h10.666V4.825zM3.01 3.333l5.034 4.442 4.96-4.442H3.01z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MailLinesvgIcon;
/* prettier-ignore-end */
