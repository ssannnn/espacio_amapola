import React from "react";

const WaveMask = ({ width = "100%", height = "auto", color = "currentColor", className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1884 74"
      width={width}
      height={height}
      className={className}
      fill={color} // Se pasa el color globalmente aquí
    >
      <path d="M73 0C10 0 0 74 0 74H148.5C148.5 74 136 0 73 0Z" />
      <path d="M685 0C622 0 612 74 612 74H760.5C760.5 74 748 0 685 0Z" />
      <path d="M277 0C214 0 204 74 204 74H352.5C352.5 74 340 0 277 0Z" />
      <path d="M889 0C826 0 816 74 816 74H964.5C964.5 74 952 0 889 0Z" />
      <path d="M481 0C418 0 408 74 408 74H556.5C556.5 74 544 0 481 0Z" />
      <path d="M1093 0C1030 0 1020 74 1020 74H1168.5C1168.5 74 1156 0 1093 0Z" />
      <path d="M176 0C113 0 103 74 103 74H251.5C251.5 74 239 0 176 0Z" />
      <path d="M788 0C725 0 715 74 715 74H863.5C863.5 74 851 0 788 0Z" />
      <path d="M380 0C317 0 307 74 307 74H455.5C455.5 74 443 0 380 0Z" />
      <path d="M992 0C929 0 919 74 919 74H1067.5C1067.5 74 1055 0 992 0Z" />
      <path d="M584 0C521 0 511 74 511 74H659.5C659.5 74 647 0 584 0Z" />
      <path d="M1196 0C1133 0 1123 74 1123 74H1271.5C1271.5 74 1259 0 1196 0Z" />
      <path d="M685 0C622 0 612 74 612 74H760.5C760.5 74 748 0 685 0Z" />
      <path d="M1297 0C1234 0 1224 74 1224 74H1372.5C1372.5 74 1360 0 1297 0Z" />
      <path d="M889 0C826 0 816 74 816 74H964.5C964.5 74 952 0 889 0Z" />
      <path d="M1501 0C1438 0 1428 74 1428 74H1576.5C1576.5 74 1564 0 1501 0Z" />
      <path d="M1093 0C1030 0 1020 74 1020 74H1168.5C1168.5 74 1156 0 1093 0Z" />
      <path d="M1705 0C1642 0 1632 74 1632 74H1780.5C1780.5 74 1768 0 1705 0Z" />
      <path d="M788 0C725 0 715 74 715 74H863.5C863.5 74 851 0 788 0Z" />
      <path d="M1400 0C1337 0 1327 74 1327 74H1475.5C1475.5 74 1463 0 1400 0Z" />
      <path d="M992 0C929 0 919 74 919 74H1067.5C1067.5 74 1055 0 992 0Z" />
      <path d="M1604 0C1541 0 1531 74 1531 74H1679.5C1679.5 74 1667 0 1604 0Z" />
      <path d="M1196 0C1133 0 1123 74 1123 74H1271.5C1271.5 74 1259 0 1196 0Z" />
      <path d="M1808 0C1745 0 1735 74 1735 74H1883.5C1883.5 74 1871 0 1808 0Z" />
    </svg>
  );
};

export default WaveMask;
