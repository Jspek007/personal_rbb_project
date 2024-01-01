export type MediaBreakpoint = keyof typeof MEDIA_BREAKPOINTS;

const MEDIA_BREAKPOINTS = {
  xs: 640,
  sm: 640,
  md: 768,
  lg: 940,
  xl: 1280,
  xxl: 1440,
  xxxl: 2080,
  xxxxl: 2560,
};

const getMinMediaCondition = (breakpoint: MediaBreakpoint) =>
  `(min-width:${MEDIA_BREAKPOINTS[breakpoint]}px)`;

const getMaxMediaCondition = (breakpoint: MediaBreakpoint) =>
  `(max-width:${MEDIA_BREAKPOINTS[breakpoint]}px)`;

const getMediaQuery = (breakpoint: MediaBreakpoint) =>
  `@media ${BREAKPOINT_CONDITIONS.get(breakpoint)}`;

const BREAKPOINT_CONDITIONS = new Map<MediaBreakpoint, string>();

(function setupBreakpointConditions() {
  Object.keys(MEDIA_BREAKPOINTS).forEach((item: MediaBreakpoint) => {
    if (item === 'xs') {
      BREAKPOINT_CONDITIONS.set(item, getMaxMediaCondition(item));
    } else {
      BREAKPOINT_CONDITIONS.set(item, getMinMediaCondition(item));
    }
  });
})();

/**
 * Use within styled-components
 * @example
 * ${MEDIA_QUERY.xs} {
 * ...My style here
 * }
 */
const MEDIA_QUERY = Object.keys(MEDIA_BREAKPOINTS).reduce(
  (acc, curr: MediaBreakpoint) => ({
    ...acc,
    [curr]: getMediaQuery(curr),
  }),
  {} as { [key in MediaBreakpoint]: string }
);

export { MEDIA_BREAKPOINTS, MEDIA_QUERY, BREAKPOINT_CONDITIONS };
