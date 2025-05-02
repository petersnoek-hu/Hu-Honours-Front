import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props}>
    <Path
      fill="#FCB7C3"
      d="M33.333 3.333H6.667a3.333 3.333 0 0 0-3.334 3.334v20A3.333 3.333 0 0 0 6.667 30h5v5a1.667 1.667 0 0 0 .95 1.5c.221.114.467.17.716.167.376-.003.74-.132 1.034-.367L22.25 30h11.083a3.333 3.333 0 0 0 3.334-3.333v-20a3.333 3.333 0 0 0-3.334-3.334Z"
    />
    <Path
      fill="#DD586E"
      d="M15.833 16.667a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm4.167-2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm6.667 0a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
    />
  </Svg>
)
export default SvgComponent