import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg width={41} height={40} fill="none" {...props}>
    <Path
      fill="#E7A600"
      d="M25.667 28.333h-10A1.666 1.666 0 0 0 14 30a6.667 6.667 0 0 0 13.333 0 1.667 1.667 0 0 0-1.666-1.667Z"
    />
    <Path
      fill="#FDDC48"
      d="m34.15 22.783-1.817-1.8V15A11.667 11.667 0 0 0 9 15v5.983l-1.817 1.8a5.216 5.216 0 0 0 3.684 8.884h19.6a5.216 5.216 0 0 0 3.683-8.884Z"
    />
  </Svg>
)
export default SvgComponent
