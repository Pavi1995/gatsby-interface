import React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"
import { useTheme } from "../ThemeProvider"

export default function FeaturesIcon(props: IconProps) {
  const theme = useTheme()

  return (
    <IconSkeleton {...props} iconName="FeaturesIcon">
      <path
        d="M13.3645 12.1161L11.8839 10.6354L9.41614 13.1032L10.8968 14.5838L13.3645 12.1161Z"
        fill={theme.colors.white}
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7026 6.0501L18.9236 5.22094L18.0944 7.44191L18.9236 9.66288L16.7026 8.83372L14.4817 9.66288L15.3108 7.44191L14.4817 5.22094L16.7026 6.0501Z"
        fill={theme.colors.purple[60]}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.16271 7.44196L8.53122 8.42905L7.54413 8.06054L6.55703 8.42905L6.92555 7.44196L6.55703 6.45486L7.54413 6.82337L8.53122 6.45486L8.16271 7.44196Z"
        fill={theme.colors.orange[70]}
        stroke={theme.colors.orange[70]}
        strokeWidth="1.5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5257 14.4218L17.8942 15.4089L16.9071 15.0403L15.92 15.4089L16.2885 14.4218L15.92 13.4347L16.9071 13.8032L17.8942 13.4347L17.5257 14.4218Z"
        fill={theme.colors.orange[70]}
      />
      <path
        d="M9.41612 13.1033L10.8968 14.5839L5.22096 20.2597C4.81209 20.6686 4.14918 20.6686 3.74031 20.2597C3.33144 19.8509 3.33144 19.188 3.74031 18.7791L9.41612 13.1033Z"
        fill={theme.colors.purple[20]}
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
      />
    </IconSkeleton>
  )
}
