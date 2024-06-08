// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AiheDolphinLogosvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AiheDolphinLogosvgIcon(props: AiheDolphinLogosvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 1710 1550"}
      version={"1.1"}
      xmlSpace={"preserve"}
      fillRule={"evenodd"}
      clipRule={"evenodd"}
      strokeLinejoin={"round"}
      strokeMiterlimit={"2"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M103.456 1164.918c-6.813 10.504-13.269 19.2-18.218 28.663-23.875 45.633-24.41 91.737-.93 137.691 18.759 36.715 46.26 66.468 78.421 91.44 26.671 20.71 55.322 38.845 83.116 58.094 6.086 4.236 12.964 7.58 18.248 12.61 11.272 10.751 12.719 27.969 4.474 40.9-8.307 13.056-24.028 18.482-38.895 13.304-3.096-1.065-6.101-2.552-8.943-4.211-55.19-32.107-107.589-68.029-149.895-116.486-15.112-17.316-29.252-36.045-40.572-55.988-41.391-72.909-40.442-146.387 1.821-218.8 32.927-56.385 81.18-97.237 136.488-130.26 58.552-34.955 122.213-57.549 187.613-75.683 8.658-2.403 17.294-4.88 27.256-7.68 4.003-32.998 7.714-65.65 11.963-98.252 20.512-157.386 49.683-312.89 104.024-462.646 30.536-84.18 68.662-164.522 125.22-234.854C678.951 75.193 745.493 26.255 831.78 7.333c99.417-21.8 182.705 4.813 249.074 82.345 38.72 45.254 63.321 98.294 82.199 154.158 24.179 71.522 37.259 145.322 44.32 220.312.544 5.648 1.288 11.272 2.279 19.77 21.8 3.715 43.527 7.332 65.204 11.147 36.54 6.466 73.255 12.015 109.425 20.092 18.307 4.087 36.367 11.296 53.114 19.868 60.002 30.72 88.367 91.613 76.972 160.013-3.048 18.382-15.087 36.54-26.731 52-24.303 32.304-57.772 54.105-94.164 70.654-30.645 13.922-62.306 25.566-94.982 38.82-2.973 24.897 4.632 49.572 10.305 74.147 1.066 4.682 11 8.423 17.515 10.554 42.314 13.774 85.47 25.22 127.114 40.777 64.708 24.179 123.818 58.366 173.613 107.195 23.758 23.287 44.27 49.002 59.184 78.854 32.18 64.362 31.586 128.625-1.065 192.615-17.094 33.519-40.902 61.91-68.029 87.6-39.836 37.705-85.023 67.978-132.662 94.758-2.874 1.61-5.822 3.196-8.894 4.336-15.954 5.821-32.007.024-40.455-14.518-7.829-13.402-5.648-29.654 6.466-40.48 5.45-4.88 12.188-8.398 18.555-12.164 42.115-24.748 83.289-51.083 116.956-86.781 17.936-19.026 34.609-40.134 47.739-62.678 25.591-43.973 24.501-89.58.718-134.693-16.078-30.497-38.845-55.246-65.055-77.096-58.218-48.556-126.865-76.179-198.189-98.376-9.438-2.923-19.026-5.425-28.588-7.927-1.388-.372-3.023.297-7.06.793 20.14 114.701 25.244 230.567 24.426 348.737 6.937-.99 12.758-.545 17.416-2.675 25.393-11.669 51.702-22 75.386-36.591 30.248-18.605 37.11-46.45 24.08-79.548-1.214-3.072-2.973-5.92-4.187-8.993-8.076-20.785-2.378-37.78 15.335-46.079 16.623-7.778 33.122-1.759 43.998 16.054 31.487 51.578 20.215 123.1-25.913 162.44-26.087 22.247-56.212 37.755-88.194 49.25-63.099 22.618-127.906 38.102-194.795 44.766-141.531 14.046-283.41 18.233-425.461 14.096-139.525-4.038-278.554-14.716-415.547-43.602-42.883-9.042-85.427-19.992-124.099-41.025-20.051-10.925-39.736-24.203-55.938-40.108-32.444-31.884-40.262-71.645-24.338-114.107 19.014-50.712 56.677-86.534 100.425-116.114 15.458-10.454 33.546-5.45 43.804 8.943 10.133 14.196 8.185 31.884-5.792 44.568-14.034 12.758-30.095 23.535-42.69 37.507-12.525 13.898-23.29 29.902-32.173 46.426-9.169 17.02-4.521 33.667 9.139 47.466 1.742 1.759 3.36 3.667 5.272 5.227 32.884 26.681 71.85 38.697 113.864 49.448 4.799-117.005 9.48-231.236 14.32-349.158-103.428 29.678-200.76 66.418-271.539 154.562m451.107-700.671c-25.69 82.868-45.088 167.246-59.605 252.69-35.585 209.634-51.358 420.903-51.14 633.46.007 8.102 0 16.203 0 23.536 124.816 41.099 694.906 47.54 823.431 9.562.917-6.614 2.552-13.848 2.775-21.107 2.477-83.462.347-166.924-10.653-249.618-8.25-62.009-22.915-123.15-33.444-184.91-4.385-25.889-7.829-52.372-7.482-78.508.52-37.383 20.983-61.092 56.583-72.165 6.293-1.957 12.709-3.617 18.952-5.698 35.327-11.743 69.96-25.145 100.531-46.897 9.612-6.862 18.11-15.285 30.967-26.284-10.43-1.685-14.963-3.171-19.447-2.998-39.588 1.462-79.226 2.502-118.74 5.03-83.19 5.3-166.305 11.444-249.445 17.192-5.772.396-11.619.892-17.317.347-13.328-1.264-23.485-11.148-24.848-23.46-1.362-12.04 6.69-24.254 19.67-27.92 7.036-1.983 14.642-2.18 22.024-2.726 32.924-2.452 65.824-5.153 98.772-6.986 92.307-5.153 184.613-9.885 276.895-14.814 5.4-.298 10.776-.917 17.762-1.512-6.119-18.877-18.48-29.406-33.84-35.97-14.32-6.145-29.233-11.942-44.444-14.79-41.322-7.73-83.115-12.982-124.388-20.86-21.702-4.162-43.453-9.959-63.867-18.258-22.271-9.067-33.716-27.87-35.302-52.446-1.313-20.587-2.824-41.198-5.4-61.637-9.737-77.268-26.062-152.877-59.284-223.928-15.508-33.122-34.683-63.817-61.587-89.086-34.386-32.31-75.311-47.141-122.233-42.754-60.497 5.653-112.447 30.672-156.544 72.359-28.366 26.854-51.975 57.474-72.611 90.522-42.289 67.682-71.2 141.26-96.741 220.634z"
        }
        fill={"#fbfcfe"}
        fillRule={"nonzero"}
      ></path>

      <path
        d={
          "M917.124 392.651c12.238-10.132 24.427-13.7 38.102-9.983 20.562 5.623 33.494 27.3 28.836 47.763-4.93 21.603-26.854 35.005-49.026 29.951-20.463-4.657-34.015-25.74-29.085-47.02 1.586-6.838 6.442-12.932 11.173-20.71z"
        }
        fill={"#f7fafe"}
        fillRule={"nonzero"}
      ></path>
    </svg>
  );
}

export default AiheDolphinLogosvgIcon;
/* prettier-ignore-end */
