// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type ScreenValue = "mobileOnly" | "tabletOnly";
export const ScreenContext = React.createContext<ScreenValue[] | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export const useScreenVariants = createUseScreenVariants(true, {
  mobileOnly: "(min-width:0px) and (max-width:768px)",
  tabletOnly: "(max-width:1024px)",
});

export default ScreenContext;
/* prettier-ignore-end */