// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BardFillsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BardFillsvgIcon(props: BardFillsvgIconProps) {
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
          "M10.614 17.796l.878-2.01a7.742 7.742 0 013.94-3.992l2.416-1.072c.768-.341.768-1.458 0-1.8l-2.34-1.038a7.747 7.747 0 01-3.997-4.125l-.89-2.142a.946.946 0 00-1.758 0l-.889 2.142a7.747 7.747 0 01-3.997 4.125l-2.34 1.039c-.768.34-.768 1.458 0 1.799l2.415 1.072a7.742 7.742 0 013.94 3.991l.878 2.01a.946.946 0 001.744 0zm8.787 4.894l.247-.566a4.365 4.365 0 012.221-2.25l.76-.339a.53.53 0 000-.963l-.717-.319a4.368 4.368 0 01-2.253-2.326l-.254-.611a.507.507 0 00-.942 0l-.254.61a4.368 4.368 0 01-2.253 2.327l-.718.32a.53.53 0 000 .962l.76.338a4.365 4.365 0 012.222 2.251l.247.566c.18.414.754.414.934 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BardFillsvgIcon;
/* prettier-ignore-end */