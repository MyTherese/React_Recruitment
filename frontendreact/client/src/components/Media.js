import { css } from 'styled-components'
const sizes = {
   big: 1000,
   large: 900,
   medium: 700,
   smal: 400
}
export default Object.keys(sizes).reduce((acc, label) => {
   acc[label] = (...args) => css`
      @media (max-width: ${sizes[label]}px) {
         ${css(...args)};
      }
   `
   return acc
}, {})