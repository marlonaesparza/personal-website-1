const deviceSizes = {
  mobile: '375px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px'
};

const deviceAdjustment = {
  mobile: `(max-width: ${deviceSizes.mobile})`,
  tablet: `(max-width: ${deviceSizes.tablet})`,
  tabletToggle: `(min-width: ${deviceSizes.tablet})`,
  laptop: `(max-width: ${deviceSizes.laptop})`,
  desktop: `(max-width: ${deviceSizes.desktop})`
};

export default deviceAdjustment;
