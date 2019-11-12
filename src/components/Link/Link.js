/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"

import colors from "../../theme/colors"
import { showCustomCssDeprecationMessage } from "../../utils/maintenance/deprecationMessages"

const Link = ({
  children,
  href,
  target,
  to,
  customCss,
  variant = `DEFAULT`,
  ...rest
}) => {
  showCustomCssDeprecationMessage(customCss)

  const baseStyles = {
    alignItems: `center`,
    color: colors.purple[60],
    display: `inline-flex`,
  }

  const styles = {
    SIMPLE: {
      textDecoration: `none`,
      ":focus, :hover": {
        color: colors.purple[40],
        textDecoration: `underline`,
      },
    },
    DEFAULT: {
      textDecoration: `underline`,
      ":focus, :hover": {
        color: colors.purple[60],
        textDecoration: `underline`,
      },
    },
  }

  const commonProps = {
    css: [
      {
        ...baseStyles,
        ...styles[variant],
      },
      customCss,
    ],
    ...rest,
  }

  return href ? (
    <a
      href={href}
      target={target}
      rel={target === `_blank` ? `noopener noreferrer` : ``}
      {...commonProps}
    >
      {children}
    </a>
  ) : (
    <GatsbyLink to={to} {...rest}>
      {children}
    </GatsbyLink>
  )
}

Link.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  target: PropTypes.string,
  to: PropTypes.string,
  variant: PropTypes.oneOf([`DEFAULT`, `SIMPLE`]),
  customCss: PropTypes.any,
}

export default Link
