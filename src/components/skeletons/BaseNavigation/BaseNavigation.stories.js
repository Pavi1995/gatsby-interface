/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import { storiesOf } from "@storybook/react"
import { StoryUtils } from "../../../utils/storybook"

import BaseNavigation from "./BaseNavigation"

const items = [
  {
    name: `Alpha`,
    linkTo: `/alpha`,
    items: [
      {
        name: `Delta`,
        linkTo: `/alpha/delta`,
      },
      {
        name: `Echo`,
        linkTo: `/alpha/echo`,
      },
    ],
  },
  {
    name: `Bravo`,
    linkTo: `/bravo`,
  },
  {
    name: `Charlie`,
    linkTo: `/charlie`,
  },
]

storiesOf(`BaseNavigation`, module).add(`usage example`, () => (
  <StoryUtils.Container>
    <BaseNavigation navItems={items} />
  </StoryUtils.Container>
))
