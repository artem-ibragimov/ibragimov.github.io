import type { PageLoad } from './$types';
export const load: PageLoad = (e) => {
	return e.params;
};
