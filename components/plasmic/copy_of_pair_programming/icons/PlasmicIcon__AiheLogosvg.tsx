// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AiheLogosvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AiheLogosvgIcon(props: AiheLogosvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 3334 3334"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"#FFF"}
        opacity={"1"}
        d={
          "M2192 3336H2V2.001h3333.998l.001 3333.997C2955 3336 2574 3336 2192 3336M652.145 2702.9c-50.206-32.99-97.795-69.218-139.446-112.784-31.276-32.716-57.984-68.595-76.042-110.403-14.087-32.613-20.744-66.765-18.136-102.167 2.784-37.776 15.474-72.656 34.706-105.181 22.233-37.602 50.894-69.715 83.472-98.634 48.994-43.49 104.264-77.097 163.472-104.46 57.184-26.427 116.574-46.954 177.021-64.49 7.22-2.095 14.58-3.706 23.143-5.86-1.415 16.157-2.89 30.96-3.974 45.792a9981.337 9981.337 0 00-6.013 87.427 5056.264 5056.264 0 00-4.01 69.618c-1.472 29.2-2.77 58.408-4.009 87.619-.802 18.93-1.656 37.867-1.97 56.81-.837 50.266-1.423 100.538-2.039 150.808-.146 11.976.007 23.955-.043 35.932-.012 2.923-.282 5.845-.452 9.13-2.657-.318-4.702-.252-6.544-.83-27.591-8.657-55.419-16.657-82.653-26.327-27.65-9.818-54.064-22.555-77.982-39.907-11.647-8.45-22.433-17.8-30.613-29.804-7.49-10.991-12.166-23.129-11.206-36.457 1.14-15.81 7.004-30.32 14.862-44.047 17.252-30.137 40.583-55.14 66.499-77.774 13.762-12.02 28.839-22.523 42.84-34.285 24.017-20.173 24.25-57.911.463-79.039-17.75-15.764-46.172-18.314-68.9-1.309-33.954 25.405-65.856 52.942-93.486 85.225-22.438 26.218-41.45 54.587-54.125 86.877-10.874 27.7-15.833 56.446-12.34 86.051 4.654 39.46 22.76 72.67 50.204 100.914 23.927 24.625 52.348 43.11 82.742 58.625 47.974 24.49 98.934 40.845 150.954 53.995 62.218 15.726 125.328 27.084 188.816 36.169 49.266 7.049 98.622 13.573 148.055 19.322 36.575 4.254 73.32 7.116 110.025 10.168 28.446 2.365 56.935 4.249 85.426 6.006 25.858 1.596 51.74 2.809 77.617 4.045 16.93.81 33.869 1.47 50.81 2 24.6.77 49.201 1.56 73.809 1.977 25.984.442 51.976.64 77.964.617 38.656-.036 77.312-.239 115.965-.606 24.617-.235 49.23-.895 73.845-1.364 10.988-.21 21.985-.21 32.963-.672 23.224-.978 46.436-2.236 69.657-3.305 20.588-.947 41.199-1.515 61.769-2.76 24.173-1.464 48.314-3.469 72.468-5.259 21.194-1.57 42.421-2.794 63.568-4.847 28.392-2.757 56.803-5.573 85.057-9.447 32.217-4.418 64.376-9.46 96.351-15.363 15.28-2.821 29.898-9.108 45.13-12.346 44.657-9.494 88.394-21.973 130.977-38.417 44.583-17.217 86.859-38.642 125.05-67.79 52.179-39.824 76.307-93.338 77.627-157.894.248-12.176-1.644-24.51-3.623-36.594-4.18-25.52-12.835-49.615-26.225-71.765-20.92-34.607-68.878-35.067-90.258-.795-10.056 16.117-10.158 33.201-2.44 50.57 5.109 11.495 11.082 22.894 14.08 34.977 7.152 28.817 3.15 56.3-15.309 80.395-10.675 13.934-25.187 23.623-39.89 32.865-36.039 22.653-75.248 38.246-115.448 51.582-5.566 1.846-11.327 3.107-16.95 4.627 1.843-184.694-4.534-367.916-38.575-550.082 3.909.847 7.136 1.296 10.206 2.25 35.552 11.054 71.283 21.579 106.565 33.438 51.179 17.203 100.632 38.572 147.87 64.855 60.71 33.778 115.606 74.927 160.616 128.296 23.326 27.658 42.43 57.953 54.71 92.28 12.104 33.837 16.321 68.44 10.271 103.966-6.013 35.312-20.337 67.295-39.777 97.221-28.599 44.028-65.189 80.592-105.493 113.693-45.154 37.082-93.972 68.779-144.648 97.713-6.639 3.79-13.555 7.351-19.47 12.105-15.887 12.77-22.138 29.955-18.573 49.746 7.153 39.715 49.513 53.585 79.65 35.649 33.743-20.082 67.515-40.224 100.189-61.97 51.105-34.014 98.497-72.675 140.373-117.868 34.16-36.868 63.357-77.022 84.627-122.745 26.805-57.623 36.393-117.969 27.58-180.848-7.084-50.537-26.34-96.674-53.876-139.47-36.502-56.73-83.905-103.055-137.436-143.417-47.793-36.036-99.611-65.327-154.095-89.902-71.12-32.08-144.88-56.694-220.228-76.668-17.922-4.751-35.961-9.06-54.367-13.678-1.913-8.662-3.96-17.034-5.591-25.487-5.219-27.054-11.201-53.96-12.725-81.645-.407-7.388-1.219-14.419 1.451-21.521 1.263-.557 2.437-1.204 3.69-1.609 20.878-6.756 41.95-12.962 62.615-20.315 54.123-19.258 105.983-43.236 153.34-76.154 37.787-26.265 71.384-56.814 95.461-96.558 13.189-21.77 23.764-44.647 24.387-70.88.657-27.66.273-55.182-6.378-82.313-14.53-59.272-46.775-105.937-98.258-138.994-28.257-18.145-59.229-30.13-91.329-39.387-55.405-15.975-112.348-23.84-169.237-32.046-30.55-4.406-61.04-9.253-91.503-14.233-7.725-1.263-15.242-3.798-22.581-5.678-.936-8.796-1.699-16.378-2.554-23.948-3.99-35.274-7.57-70.602-12.114-105.804-6.174-47.818-15.953-94.996-27.338-141.824-10.062-41.384-22.2-82.166-36.731-122.223-24.4-67.26-54.794-131.457-97.231-189.426-36.39-49.707-79.809-91.826-133.653-122.568-48.251-27.547-100.37-42.143-155.565-45.57-35.958-2.233-71.707.79-107.116 7.682-48.597 9.459-95.25 24.695-139.408 47.148-49.925 25.385-94.437 58.443-134.858 97.047-30.154 28.8-57.226 60.375-82.223 93.714-38.458 51.292-71.112 106.183-99.952 163.347-26.097 51.73-48.782 104.975-69.241 159.179-21.976 58.222-41.558 117.268-58.128 177.214-14.608 52.845-27.848 106.095-40.477 159.453-9.714 41.047-18.074 82.439-26.051 123.867-7.66 39.776-14.313 79.754-20.919 119.724-5.52 33.403-10.593 66.885-15.373 100.402-3.841 26.94-7.08 53.968-10.345 80.986-4.1 33.926-7.941 67.884-11.92 101.825-1.146 9.785-2.38 19.559-3.523 28.922-3.414 1.083-5.586 1.916-7.828 2.462-48.179 11.732-95.614 25.939-142.377 42.435-61.628 21.74-121.504 47.336-178.072 80.282-65.487 38.141-124.541 84.198-173.622 142.29-38.007 44.984-67.26 94.849-83.363 151.977-12.481 44.279-14.704 89.218-8.131 134.422 6.235 42.882 21.642 82.85 42.951 120.537 30.84 54.54 72.082 100.437 118.52 141.918 39.565 35.34 82.367 66.425 127.16 94.758 18.56 11.74 37.223 23.414 56.505 33.89 19.784 10.75 40.036 9.815 58.29-3.836 29.827-22.303 25.458-68.423-3.735-85.954-21.115-12.68-42.084-25.606-64.32-39.233m1915.69-545.867c-25.746-16.672-57.37-10.12-74.288 15.39-14.906 22.478-8.582 55.38 13.846 71.084 24.397 17.083 57.044 10.75 73.57-11.991 15.6-21.467 12.462-57.322-13.127-74.483M775.18 2848.234c-14.195 15.034-16.862 33.19-11.634 52.035 7.066 25.474 31.526 39.55 57.846 36.212 20.307-2.575 39.116-18.834 43.905-40.808 4.702-21.574-4.6-43.357-23.055-55.475-17.826-11.705-46.546-12.543-67.062 8.036z"
        }
      ></path>

      <path
        fill={"#3E6FE0"}
        opacity={"1"}
        d={
          "M652.746 2703.305c21.635 13.222 42.604 26.147 63.72 38.828 29.192 17.53 33.56 63.651 3.735 85.954-18.255 13.651-38.507 14.586-58.29 3.837-19.283-10.477-37.945-22.151-56.506-33.891-44.793-28.333-87.595-59.418-127.16-94.758-46.438-41.48-87.68-87.377-118.52-141.918-21.31-37.686-36.716-77.655-42.951-120.537-6.573-45.204-4.35-90.143 8.13-134.422 16.104-57.128 45.357-106.993 83.364-151.978 49.08-58.091 108.135-104.148 173.622-142.289 56.568-32.946 116.444-58.542 178.072-80.282 46.763-16.496 94.198-30.703 142.377-42.435 2.242-.546 4.414-1.379 7.828-2.462 1.143-9.363 2.377-19.137 3.523-28.922 3.979-33.941 7.82-67.899 11.92-101.825 3.265-27.018 6.504-54.046 10.345-80.986 4.78-33.517 9.853-67 15.373-100.402 6.606-39.97 13.26-79.948 20.919-119.724 7.977-41.428 16.337-82.82 26.051-123.867 12.629-53.358 25.87-106.608 40.477-159.453 16.57-59.946 36.152-118.992 58.128-177.214 20.46-54.204 43.144-107.45 69.241-159.179 28.84-57.164 61.494-112.055 99.952-163.347 24.997-33.339 52.069-64.915 82.223-93.714 40.421-38.604 84.933-71.662 134.858-97.047 44.157-22.453 90.81-37.69 139.408-47.148 35.409-6.892 71.158-9.915 107.116-7.682 55.196 3.427 107.314 18.023 155.565 45.57 53.844 30.742 97.264 72.86 133.653 122.568 42.437 57.97 72.831 122.166 97.23 189.426 14.532 40.057 26.67 80.84 36.732 122.223 11.385 46.828 21.164 94.006 27.338 141.824 4.544 35.202 8.125 70.53 12.114 105.804.855 7.57 1.618 15.152 2.554 23.948 7.34 1.88 14.856 4.415 22.58 5.678 30.464 4.98 60.953 9.827 91.504 14.233 56.889 8.206 113.832 16.071 169.237 32.046 32.1 9.256 63.072 21.242 91.33 39.387 51.482 33.057 83.726 79.722 98.257 138.994 6.65 27.131 7.035 54.653 6.378 82.313-.623 26.233-11.198 49.11-24.387 70.88-24.077 39.744-57.674 70.293-95.46 96.558-47.358 32.918-99.218 56.896-153.341 76.154-20.665 7.353-41.737 13.56-62.616 20.315-1.252.405-2.426 1.052-3.689 1.609-2.67 7.102-1.858 14.133-1.451 21.52 1.524 27.686 7.506 54.592 12.725 81.646 1.63 8.453 3.678 16.825 5.59 25.487 18.407 4.618 36.446 8.927 54.368 13.678 75.348 19.974 149.107 44.588 220.228 76.668 54.484 24.575 106.302 53.866 154.095 89.902 53.531 40.362 100.934 86.687 137.436 143.417 27.535 42.796 46.792 88.933 53.875 139.47 8.814 62.88-.774 123.225-27.58 180.848-21.269 45.723-50.465 85.877-84.626 122.745-41.876 45.193-89.268 83.854-140.373 117.867-32.674 21.747-66.446 41.889-100.19 61.97-30.136 17.937-72.496 4.067-79.65-35.648-3.564-19.79 2.687-36.976 18.574-49.746 5.915-4.754 12.831-8.314 19.47-12.105 50.676-28.934 99.494-60.63 144.648-97.713 40.304-33.1 76.894-69.665 105.493-113.693 19.44-29.926 33.764-61.909 39.777-97.221 6.05-35.525 1.833-70.13-10.272-103.967-12.279-34.326-31.383-64.62-54.71-92.28-45.01-53.368-99.905-94.517-160.615-128.295-47.238-26.283-96.691-47.652-147.87-64.855-35.282-11.86-71.013-22.384-106.565-33.438-3.07-.954-6.297-1.403-10.206-2.25 34.041 182.166 40.418 365.388 38.575 550.082 5.623-1.52 11.384-2.781 16.95-4.627 40.2-13.336 79.41-28.93 115.448-51.582 14.703-9.242 29.215-18.931 39.89-32.865 18.46-24.096 22.461-51.578 15.31-80.395-3-12.083-8.972-23.482-14.08-34.977-7.72-17.369-7.617-34.453 2.439-50.57 21.38-34.272 69.339-33.812 90.258.795 13.39 22.15 22.044 46.244 26.225 71.765 1.98 12.085 3.871 24.418 3.623 36.594-1.32 64.556-25.448 118.07-77.627 157.894-38.191 29.148-80.467 50.573-125.05 67.79-42.583 16.444-86.32 28.923-130.977 38.417-15.232 3.238-29.85 9.525-45.13 12.346-31.975 5.903-64.134 10.945-96.351 15.363-28.254 3.874-56.665 6.69-85.057 9.447-21.147 2.053-42.374 3.276-63.568 4.847-24.154 1.79-48.295 3.795-72.468 5.259-20.57 1.245-41.18 1.813-61.77 2.76-23.22 1.07-46.432 2.327-69.656 3.305-10.978.462-21.975.462-32.963.672-24.615.47-49.228 1.13-73.845 1.364-38.653.367-77.31.57-115.965.606-25.988.023-51.98-.175-77.964-.617-24.608-.418-49.21-1.207-73.81-1.977-16.94-.53-33.879-1.19-50.809-2-25.878-1.236-51.76-2.449-77.617-4.045-28.49-1.757-56.98-3.641-85.426-6.006-36.705-3.052-73.45-5.914-110.025-10.168-49.433-5.75-98.789-12.273-148.055-19.322-63.488-9.085-126.598-20.443-188.816-36.17-52.02-13.149-102.98-29.504-150.954-53.994-30.394-15.516-58.815-34-82.742-58.625-27.444-28.244-45.55-61.455-50.205-100.914-3.492-29.605 1.467-58.351 12.34-86.051 12.676-32.29 31.688-60.659 54.126-86.877 27.63-32.283 59.532-59.82 93.486-85.225 22.728-17.005 51.15-14.455 68.9 1.31 23.787 21.127 23.554 58.865-.463 79.038-14.001 11.762-29.078 22.265-42.84 34.285-25.916 22.635-49.247 47.637-66.499 77.774-7.858 13.728-13.723 28.237-14.862 44.047-.96 13.328 3.715 25.466 11.206 36.457 8.18 12.003 18.966 21.355 30.613 29.804 23.918 17.352 50.333 30.089 77.982 39.907 27.234 9.67 55.062 17.67 82.653 26.327 1.842.578 3.887.512 6.544.83.17-3.285.44-6.207.452-9.13.05-11.977-.103-23.956.043-35.932.616-50.27 1.202-100.542 2.038-150.809.315-18.942 1.17-37.878 1.971-56.81 1.238-29.21 2.537-58.418 4.01-87.618a5056.264 5056.264 0 014.009-69.618 9981.337 9981.337 0 016.013-87.427c1.084-14.832 2.559-29.635 3.974-45.792-8.562 2.154-15.923 3.765-23.143 5.86-60.447 17.536-119.837 38.063-177.021 64.49-59.208 27.363-114.478 60.97-163.472 104.46-32.578 28.919-61.239 61.032-83.472 98.634-19.232 32.525-31.922 67.405-34.706 105.181-2.608 35.402 4.05 69.554 18.136 102.167 18.058 41.808 44.766 77.687 76.042 110.403 41.65 43.566 89.24 79.794 140.047 113.19M1324.83 809.831c-24.614 40.008-46.498 81.45-66.127 124.132-23.933 52.037-44.781 105.268-63.32 159.436-18.095 52.876-34.863 106.18-48.311 160.419-14.313 57.726-28.075 115.608-40.818 173.698-8.962 40.86-16.251 82.107-23.486 123.322-6.715 38.253-12.699 76.643-18.385 115.064-4.762 32.174-8.812 64.457-12.843 96.734-4.154 33.25-7.99 66.543-11.791 99.837-1.656 14.506-2.865 29.062-4.299 43.594-2.376 24.093-4.96 48.167-7.098 72.28-1.848 20.834-3.165 41.715-4.773 62.571-2.398 31.093-4.995 62.171-7.221 93.276-1.588 22.188-2.85 44.4-3.996 66.617-1.489 28.864-2.771 57.739-4.039 86.614-.773 17.598-1.456 35.201-1.99 52.808-.768 25.266-1.712 50.534-1.955 75.807-.46 47.984-.485 95.973-.653 143.96-.009 2.598.327 5.197.551 8.514 10.749 1.788 21.131 3.81 31.597 5.21 55.254 7.391 110.463 15.179 165.819 21.723 36.892 4.362 73.981 7.137 111.022 10.134 29.775 2.41 59.598 4.294 89.422 6.029 27.856 1.62 55.737 2.831 83.615 4.042 19.261.836 38.532 1.568 57.807 1.99 37.265.815 74.535 1.825 111.805 1.921 37.945.098 75.895-.69 113.84-1.307 29.605-.481 59.207-1.215 88.806-1.985 20.273-.527 40.54-1.281 60.808-1.985 18.937-.658 37.87-1.387 56.806-2.076 5.988-.218 11.989-.235 17.963-.643 24.826-1.696 49.645-3.504 74.466-5.276 21.86-1.56 43.767-2.647 65.568-4.805 34.99-3.464 69.93-7.475 104.851-11.59 15.76-1.857 31.425-4.523 47.89-6.932 1.14-16.126 3.16-31.644 3.164-47.163.012-46.946-.388-93.9-1.35-140.836-.68-33.218-2.196-66.43-3.967-99.612-1.486-27.835-3.459-55.66-5.982-83.419-2.853-31.385-6.355-62.715-9.946-94.027-5.115-44.602-14.29-88.498-23.562-132.374-11.606-54.916-25.665-109.33-33.498-165.02-4.237-30.125-6.235-60.372-.849-90.39 8.556-47.683 35.37-79.721 82.733-94.048 30.212-9.139 60.24-19.083 89.79-30.161 39.405-14.774 76.635-34.023 110.337-59.558 13.717-10.393 26.924-21.354 38.11-36.137-13.209-.696-25.081-1.647-37.394-.885-37.81 2.34-75.728 2.857-113.59 4.427-28.542 1.182-57.064 2.842-85.59 4.388-20.553 1.114-41.097 2.396-61.645 3.595-15.257.89-30.524 1.635-45.77 2.681-24.162 1.659-48.306 3.573-72.466 5.265-14.582 1.022-29.189 1.688-43.766 2.764-22.164 1.637-44.305 3.58-66.468 5.222-14.577 1.08-29.186 1.74-43.764 2.802-18.862 1.375-37.692 3.274-56.572 4.264-5.466.287-11.385-.918-16.527-2.91-19.175-7.43-29.653-28.957-24.456-49.026 4.505-17.397 17.354-29.103 34.847-31.06 13.177-1.476 26.415-2.445 39.64-3.442 13.58-1.023 27.187-1.707 40.768-2.716 22.827-1.696 45.638-3.607 68.467-5.283 14.246-1.045 28.519-1.723 42.768-2.744 23.493-1.682 46.969-3.622 70.467-5.233 15.91-1.09 31.856-1.647 47.768-2.717 24.497-1.648 48.97-3.646 73.466-5.281 22.195-1.482 44.402-2.826 66.618-3.964 29.197-1.495 58.4-2.955 87.616-3.99 18.306-.648 36.64-.473 54.961-.707 2.32-.03 4.636-.427 6.955-.437 7.253-.031 14.507.054 21.76.071 6.826.017 13.652.004 21.572.004-1.212-3.616-1.81-6.13-2.865-8.434-9.676-21.125-25.591-36.175-45.885-46.957-21.027-11.171-43.608-18.05-66.533-23.841-54.867-13.86-111.088-19.79-166.875-28.292-26.572-4.05-53.1-8.594-79.424-13.999-24.193-4.967-47.562-12.627-68.265-26.882-25.149-17.318-39.322-40.597-41.068-71.513-1.346-23.844-3.121-47.707-5.94-71.415-4.272-35.916-8.587-71.882-14.725-107.51-11.698-67.9-28.076-134.715-51.659-199.574-18.708-51.455-41.53-100.923-72.557-146.298-26.588-38.883-58.046-72.76-98.997-97.01-30.601-18.12-63.749-28.235-99.028-31.166-27.665-2.298-55.123.198-82.31 5.71-38.356 7.779-75.17 19.96-109.825 38.345-52.801 28.01-96.72 66.846-135.847 111.497-27.49 31.372-51.602 65.231-74.373 101.863z"
        }
      ></path>

      <path
        fill={"#3F6FE0"}
        opacity={"1"}
        d={
          "M2568.433 2157.446c24.992 16.748 28.13 52.603 12.53 74.07-16.526 22.74-49.173 29.074-73.57 11.99-22.428-15.703-28.752-48.605-13.846-71.082 16.918-25.511 48.542-32.063 74.886-14.978zM775.69 2847.724c20.007-20.069 48.727-19.231 66.553-7.526 18.455 12.118 27.757 33.901 23.055 55.475-4.789 21.974-23.598 38.233-43.905 40.808-26.32 3.339-50.78-10.738-57.846-36.212-5.228-18.846-2.56-37 12.143-52.545z"
        }
      ></path>

      <path
        fill={"#FFF"}
        opacity={"1"}
        d={
          "M1325.214 809.213c22.387-36.013 46.499-69.872 73.99-101.244 39.127-44.651 83.045-83.488 135.846-111.497 34.656-18.384 71.469-30.566 109.825-38.344 27.187-5.513 54.645-8.009 82.31-5.71 35.28 2.93 68.427 13.044 99.028 31.165 40.95 24.25 72.41 58.127 98.997 97.01 31.027 45.375 53.85 94.843 72.557 146.298 23.583 64.86 39.961 131.673 51.66 199.574 6.137 35.628 10.452 71.594 14.723 107.51 2.82 23.708 4.595 47.57 5.941 71.415 1.746 30.916 15.92 54.195 41.068 71.513 20.703 14.255 44.072 21.915 68.265 26.882 26.325 5.405 52.852 9.949 79.424 13.999 55.787 8.503 112.008 14.433 166.875 28.292 22.925 5.79 45.506 12.67 66.533 23.841 20.294 10.782 36.209 25.832 45.885 46.957 1.055 2.304 1.653 4.818 2.865 8.434-7.92 0-14.746.013-21.571-.004-7.254-.017-14.508-.102-21.76-.071-2.32.01-4.636.408-6.956.437-18.32.234-36.655.059-54.96.707-29.217 1.035-58.42 2.495-87.617 3.99-22.216 1.138-44.423 2.482-66.618 3.964-24.497 1.635-48.97 3.633-73.466 5.28-15.912 1.07-31.858 1.628-47.768 2.718-23.498 1.61-46.974 3.551-70.467 5.233-14.249 1.02-28.522 1.699-42.768 2.744-22.829 1.676-45.64 3.587-68.467 5.283-13.581 1.009-27.187 1.693-40.768 2.716-13.225.997-26.463 1.966-39.64 3.441-17.493 1.958-30.342 13.664-34.847 31.061-5.197 20.069 5.28 41.597 24.456 49.026 5.142 1.992 11.061 3.197 16.527 2.91 18.88-.99 37.71-2.89 56.572-4.264 14.578-1.062 29.187-1.722 43.764-2.802 22.163-1.642 44.304-3.585 66.468-5.222 14.577-1.076 29.184-1.742 43.766-2.764 24.16-1.692 48.304-3.606 72.466-5.265 15.246-1.046 30.513-1.791 45.77-2.681 20.548-1.2 41.092-2.481 61.645-3.595 28.526-1.546 57.048-3.206 85.59-4.388 37.862-1.57 75.78-2.087 113.59-4.427 12.313-.762 24.185.189 37.394.885-11.186 14.783-24.393 25.744-38.11 36.137-33.702 25.535-70.932 44.784-110.337 59.558-29.55 11.078-59.578 21.022-89.79 30.16-47.362 14.328-74.177 46.366-82.733 94.048-5.386 30.019-3.388 60.266.85 90.39 7.832 55.691 21.891 110.105 33.497 165.021 9.273 43.876 18.447 87.772 23.562 132.374 3.591 31.312 7.093 62.642 9.946 94.027 2.523 27.76 4.496 55.584 5.982 83.419 1.77 33.181 3.287 66.394 3.968 99.612.961 46.936 1.36 93.89 1.349 140.836-.004 15.519-2.024 31.037-3.165 47.163-16.464 2.41-32.129 5.075-47.889 6.932-34.921 4.115-69.86 8.126-104.85 11.59-21.802 2.158-43.71 3.244-65.57 4.805-24.82 1.772-49.639 3.58-74.465 5.276-5.974.408-11.975.425-17.963.643-18.935.69-37.87 1.418-56.806 2.076-20.268.704-40.535 1.458-60.808 1.985-29.6.77-59.201 1.504-88.806 1.985-37.945.616-75.895 1.405-113.84 1.307-37.27-.096-74.54-1.106-111.805-1.921-19.275-.422-38.546-1.154-57.807-1.99-27.878-1.21-55.76-2.422-83.615-4.042-29.824-1.735-59.647-3.62-89.422-6.03-37.04-2.996-74.13-5.77-111.022-10.133-55.356-6.544-110.565-14.332-165.82-21.724-10.465-1.4-20.847-3.42-31.596-5.21-.224-3.316-.56-5.915-.55-8.513.167-47.987.192-95.976.652-143.96.243-25.273 1.187-50.541 1.954-75.807.535-17.607 1.218-35.21 1.991-52.808 1.268-28.875 2.55-57.75 4.039-86.614 1.146-22.216 2.408-44.43 3.996-66.617 2.226-31.105 4.823-62.183 7.221-93.276 1.608-20.856 2.925-41.737 4.773-62.571 2.138-24.113 4.722-48.187 7.098-72.28 1.434-14.532 2.643-29.088 4.299-43.594 3.8-33.294 7.637-66.586 11.79-99.837 4.032-32.277 8.082-64.56 12.844-96.734 5.686-38.421 11.67-76.811 18.385-115.064 7.235-41.215 14.524-82.461 23.486-123.322 12.743-58.09 26.505-115.972 40.818-173.698 13.448-54.24 30.216-107.543 48.312-160.419 18.538-54.168 39.386-107.399 63.319-159.436 19.63-42.682 41.513-84.124 66.51-124.75m521.093 270.042c-1.6-37.322-33.387-60.304-63.617-59.783-29.38.507-61.777 22.21-62.162 62.395-.336 35.103 24.709 62.812 61.829 63.595 41.645.877 65.765-33.638 63.95-66.207z"
        }
      ></path>

      <path
        fill={"#3F6FE0"}
        opacity={"1"}
        d={
          "M1846.307 1080.178c1.814 31.647-22.306 66.162-63.951 65.285-37.12-.783-62.165-28.492-61.829-63.595.385-40.185 32.783-61.888 62.162-62.395 30.23-.52 62.017 22.46 63.618 60.705z"
        }
      ></path>
    </svg>
  );
}

export default AiheLogosvgIcon;
/* prettier-ignore-end */