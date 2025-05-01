import ReactGA from 'react-ga4';

// Initialize GA4
export const initGA = (measurementId: string): void => {
  ReactGA.initialize(measurementId, {
    gaOptions: {
      send_page_view: true,
    },
    gtagOptions: {
      send_page_view: true,
    },
  });
};

// Log page views
export const logPageView = (): void => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname + window.location.search,
  });
};

// Log custom events
export const logEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number
): void => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
}; 