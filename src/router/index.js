import Vue from 'vue';
import VueRouter from 'vue-router';
import goTo from 'vuetify/lib/services/goto';
import Home from '../views/Home.vue';
import Page2 from '../views/Page2';
import Page3 from '../views/Page3';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/add',
		name: 'page2',
		component: Page2,
	},
	{
		path: '/list',
		name: 'page3',
		component: Page3,
	},
];

const router = new VueRouter({
	routes,
});

router.beforeEach((to, from, next) => {
	document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`;
	next();
});

router.afterEach((to, from) => {
	goTo(0, { duration: 0 });
});

export default router;
