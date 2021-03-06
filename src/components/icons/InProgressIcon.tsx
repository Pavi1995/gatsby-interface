import React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"

export default function InProgressIcon(props: IconProps) {
  const mask0Id = `InProgressIcon__mask0--${props.id || "noid"}`
  const mask1Id = `InProgressIcon__mask1--${props.id || "noid"}`
  const mask2Id = `InProgressIcon__mask2--${props.id || "noid"}`
  const filterId = `InProgressIcon__filter--${props.id || "noid"}`
  const gradientId = `InProgressIcon__gradient--${props.id || "noid"}`
  return (
    <IconSkeleton
      {...props}
      iconName="InProgressIcon"
      applyColorToStroke={false}
    >
      <mask
        id={mask0Id}
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="2"
        y="2"
        width="20"
        height="20"
      >
        <mask
          id={mask1Id}
          maskUnits="userSpaceOnUse"
          x="2"
          y="12"
          width="20"
          height="10"
        >
          <path
            d="M12 22C17.5229 22 22 17.5229 22 12L2.00003 12C2.00003 17.5229 6.47718 22 12 22Z"
            fill="#232129"
          />
        </mask>
        <g mask={`url(#${mask1Id}`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9996 22C17.5224 22 21.9995 17.5228 21.9995 12C21.9995 6.47714 17.5224 2 11.9996 2C6.47672 2 1.99957 6.47714 1.99957 12C1.99957 17.5228 6.47672 22 11.9996 22ZM11.9994 19.9999C16.4177 19.9999 19.9994 16.4182 19.9994 11.9999C19.9994 7.58166 16.4177 3.99994 11.9994 3.99994C7.58111 3.99994 3.99939 7.58166 3.99939 11.9999C3.99939 16.4182 7.58111 19.9999 11.9994 19.9999Z"
            fill="#2DE3DA"
          />
        </g>
        <mask
          id={mask2Id}
          maskUnits="userSpaceOnUse"
          x="2"
          y="2"
          width="20"
          height="20"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22C17.5228 22 22 17.5229 22 12C22 6.47718 17.5228 2.00003 12 2.00003C6.47714 2.00003 2 6.47718 2 12C2 17.5229 6.47714 22 12 22ZM11.9998 20C16.4181 20 19.9998 16.4182 19.9998 12C19.9998 7.58169 16.4181 3.99997 11.9998 3.99997C7.58154 3.99997 3.99982 7.58169 3.99982 12C3.99982 16.4182 7.58154 20 11.9998 20Z"
            fill="#2DE3DA"
          />
        </mask>
        <g mask={`url(#${mask2Id}`}>
          <path
            d="M12 2.00003C6.47714 2.00003 2 6.47718 2 12L22 12C22 6.47718 17.5228 2.00003 12 2.00003Z"
            fill={`url(#${gradientId})`}
          />
        </g>
      </mask>
      <g mask={`url(#${mask0Id}`}>
        <circle
          cx="12"
          cy="12"
          r="9.99998"
          fill="currentColor"
          style={{ filter: `url(#${filterId})` }}
        />
      </g>
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <defs>
        <linearGradient
          id={gradientId}
          x1="5.74999"
          y1="12"
          x2="18.25"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#663399" stopOpacity="0" />
          <stop offset="1" />
        </linearGradient>
        <filter id={filterId} x="0" y="0" width="100%" height="100%">
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3"></feFuncA>
          </feComponentTransfer>
        </filter>
      </defs>
    </IconSkeleton>
  )
}
