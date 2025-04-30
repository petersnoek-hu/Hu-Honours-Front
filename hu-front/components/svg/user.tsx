import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props}>
    <Path
      fill="#E6302B"
      d="M21.667 20h-3.334A13.334 13.334 0 0 0 5 33.333a3.334 3.334 0 0 0 3.333 3.334h23.334A3.333 3.333 0 0 0 35 33.333 13.334 13.334 0 0 0 21.667 20Z"
    />
    <Path
      fill="#D3AF85"
      d="M20 26.667c6.443 0 11.667-5.224 11.667-11.667S26.443 3.333 20 3.333 8.333 8.557 8.333 15 13.557 26.667 20 26.667Z"
    />
  </Svg>
)
export default SvgComponent

