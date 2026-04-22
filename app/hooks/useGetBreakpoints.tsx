import { Grid } from "antd";
import { useMemo } from "react";

export const useGetBreakpoints = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const { xs, sm, md, lg, xl, xxl } = screens;
  const isMobile = useMemo(() => xs || (sm && !(md || lg || xl || xxl)), [lg, md, sm, xl, xs, xxl])

  return {
    isMobile,
    ...(useBreakpoint()),
  }
}