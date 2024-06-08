// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CalendarScheduleLinesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CalendarScheduleLinesvgIcon(
  props: CalendarScheduleLinesvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.833 2.855V1.188h1.666v1.667h5V1.188h1.667v1.667h3.333c.46 0 .834.373.834.833v4.167h-1.667V4.52h-2.5v1.667h-1.667V4.521h-5v1.667H5.833V4.521h-2.5v11.667h5v1.667H2.499a.833.833 0 01-.833-.834V3.688c0-.46.373-.833.833-.833h3.334zm8.333 7.5a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm-5 3.333a5 5 0 1110 0 5 5 0 01-10 0zm4.167-2.5v2.845l1.91 1.91 1.179-1.178-1.423-1.422v-2.155h-1.666z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CalendarScheduleLinesvgIcon;
/* prettier-ignore-end */
