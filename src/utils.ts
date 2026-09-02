export function slugify(value: string): string {
	return value
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
}

// Region grouping for the Destinations nav and overview page.
export const REGIONS: Record<string, string[]> = {
	Asia: ['Bhutan', 'Georgia', 'Nepal', 'Vietnam', 'Thailand'],
	Europe: ['Hungary', 'Czech Republic', 'Netherlands', 'Spain'],
	Oceania: ['Australia'],
};

export function regionFor(country: string): string {
	for (const [region, countries] of Object.entries(REGIONS)) {
		if (countries.includes(country)) return region;
	}
	return 'Other';
}

// Groups a list of countries by region, in REGIONS' declared order,
// falling back to an "Other" group for anything unmapped.
export function groupByRegion(countries: string[]): { region: string; countries: string[] }[] {
	const groups = new Map<string, string[]>();
	for (const country of countries) {
		const region = regionFor(country);
		if (!groups.has(region)) groups.set(region, []);
		groups.get(region)!.push(country);
	}
	const orderedRegions = [...Object.keys(REGIONS), 'Other'];
	return orderedRegions
		.filter((region) => groups.has(region))
		.map((region) => ({ region, countries: groups.get(region)! }));
}
