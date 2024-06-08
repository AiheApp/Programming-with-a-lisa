// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AlertFillsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AlertFillsvgIcon(props: AlertFillsvgIconProps) {
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
          "M12.865 3l9.526 16.5a1 1 0 01-.866 1.5H2.473a1 1 0 01-.866-1.5L11.133 3a1 1 0 011.732 0zm-1.866 13v2h2v-2h-2zm0-7v5h2V9h-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AlertFillsvgIcon;
/* prettier-ignore-end */
