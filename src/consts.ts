// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Wander & Spice';
export const SITE_DESCRIPTION = 'Stories, food, and honest trip notes from the road.';

// import.meta.env.BASE_URL doesn't reliably end with a slash, so normalize it once here
export const BASE_URL = import.meta.env.BASE_URL.endsWith('/')
	? import.meta.env.BASE_URL
	: `${import.meta.env.BASE_URL}/`;
