import pages from './pages';

const {
    PageForm,
    ThankYou
} = pages;

export const groups = [
    {
    	group: 'PageForm',
		isPublic: true,
		routes: [
			{
				title: 'PageForm',
				path: '/your-detail',
				icon: 'your-detail',
                component: PageForm,
                isExact: true,
                subRoutes: [],
				isPublic: true,
				visible: true,
				index: 1
            }
		]
    },
    {
    	group: 'Thankyou',
		isPublic: true,
		routes: [
			{
				title: 'ThankYou',
				path: '/thank',
				icon: 'Thank-you',
                component: ThankYou,
                isExact: true,
                subRoutes: [],
				isPublic: true,
				visible: true,
				index: 1
            }
		]
    }
];

const joinFn = (acc = [], curr) => {
	return acc.concat(curr);
};

export const allRoutes = groups
	.map(function merge(group) {
		const { routes } = group;
		const subRoutes = routes.map(route => route.subRoutes).reduce(joinFn);
		return routes.concat(subRoutes);
	})
	.reduce(joinFn);

export const getGroups = () => groups;

export default {
	groups,
	allRoutes
};