/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { Fragment } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import colors from "../../theme/colors"

import { spaces, fontFamilies, fontSizes } from "../../utils/presets"

const SidebarNav = ({ children, options, style }) => (
  <nav
    css={{
      width: `100%`,
      height: `100%`,
      ...style,
    }}
  >
    {options ? (
      <SidebarNav.List>
        {options.map(option => {
          const Icon = option.svg && option.svg
          return (
            <Fragment key={option.label}>
              <SidebarNav.Item
                active={option.active && option.active}
                onClick={option.onClick && option.onClick}
                to={option.to && option.to}
              >
                {Icon && option.active && <Icon />}
                {option.label && option.label}
              </SidebarNav.Item>
              {option.subItems && option.active && (
                <SidebarNav.List variant="SUB">
                  {option.subItems.map(subItem => (
                    <SidebarNav.SubItem
                      key={subItem.label}
                      active={subItem.active && subItem.active}
                      onClick={subItem.onClick && subItem.onClick}
                      to={subItem.to && subItem.to}
                    >
                      {subItem.label && subItem.label}
                    </SidebarNav.SubItem>
                  ))}
                </SidebarNav.List>
              )}
            </Fragment>
          )
        })}
      </SidebarNav.List>
    ) : (
      { children }
    )}
    <div />
  </nav>
)

SidebarNav.propTypes = {
  children: PropTypes.node,
  options: PropTypes.array,
}

SidebarNav.List = ({ children, variant = `FULL` }) => {
  const variantStyles = {
    SUB: {
      padding: `${spaces.xs} 0`,
    },
    FULL: {
      position: `fixed`,
      maxWidth: `8rem`,
    },
  }

  return (
    <ul
      css={{
        paddingInlineStart: `0`,
        margin: `0`,
        ...variantStyles[variant],
      }}
    >
      {children}
    </ul>
  )
}

SidebarNav.List.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf([`FULL`, `SUB`]),
}

const baseItemStyles = active => {
  return {
    fontFamily: fontFamilies.headerFontFamily,
    fontSize: fontSizes.s,
    color: active ? colors.purple[50] : colors.grey[60],
    listStyle: `none`,
    "&:first-of-type": {
      paddingTop: `0`,
    },
    "&:last-of-type": {
      paddingBottom: `0`,
    },
  }
}

const baseLinkStyles = {
  color: `inherit`,
  lineHeight: `1.375rem`,
  textDecoration: `none`,
}

SidebarNav.Item = ({ active, onClick, to, children }) => (
  <li
    css={{
      marginBottom: `0`,
      padding: `${spaces.xs} 0`,
      position: `relative`,
      ...baseItemStyles(active),
      svg: {
        verticalAlign: `middle`,
        position: `absolute`,
        left: `-${spaces.xl}`,
      },
    }}
  >
    {to ? (
      <Link
        to={to}
        onClick={onClick}
        css={{
          ...baseLinkStyles,
        }}
      >
        {children}
      </Link>
    ) : (
      children
    )}
  </li>
)

SidebarNav.Item.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
}

SidebarNav.SubItem = ({ active, onClick, to, children }) => (
  <li
    css={{
      padding: `${spaces[`2xs`]} ${spaces.m}`,
      marginBottom: `0`,
      borderLeft: active
        ? `1px solid ${colors.purple[50]}`
        : `1px solid ${colors.grey[30]}`,
      ...baseItemStyles(active),
    }}
  >
    {to ? (
      <Link
        to={to}
        onClick={onClick}
        css={{
          ...baseLinkStyles,
        }}
      >
        {children}
      </Link>
    ) : (
      children
    )}
  </li>
)

SidebarNav.SubItem.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
}

export default SidebarNav
