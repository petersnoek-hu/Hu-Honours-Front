import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props}>
    <Path
      fill="#0170A0"
      d="M25 8.333 15 5 6.133 7.95A1.667 1.667 0 0 0 5 9.617v23.066a1.667 1.667 0 0 0 2.2 1.584l7.8-2.6L25 35l8.867-2.95A1.666 1.666 0 0 0 35 30.467V7.317a1.666 1.666 0 0 0-2.2-1.584l-7.8 2.6Z"
    />
    <Path fill="#1A9FD9" d="m25 35-10-3.333V5l10 3.333V35Z" />
  </Svg>
)
export default SvgComponent