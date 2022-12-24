<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app mobile-breakpoint="768" color="#3C3B54">
      <v-card
        class="pa-4"
		color="#3C3B54"
        height="70"
      >
        <v-card-title class="white--text text-subtitle-1 font-weight-bold pt-1">
Vue Test        </v-card-title>
      </v-card>

      <v-list dense nav color="#3C3B54">
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link class="white--text">
          <v-list-item-icon>
            <v-icon size="20" color="#263238">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="white"
	  light
      prominent
      :height="$route.path === '/' ? '70' : '70'"
    >
      <v-container  fluid>
        <v-row justify="space-between" dense no-gutters >
			<v-col md="1" cols="2" >
				<v-app-bar-nav-icon  @click="drawer = !drawer"></v-app-bar-nav-icon>
				</v-col>
			<v-col md="4" cols="1" >
				<v-btn @click="clearData">Clear all data</v-btn>
	</v-col>
			

        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
	name: 'home',
  data: () => ({
    drawer: null,
    items: [
      { title: 'Create', to: '/' },
      { title: 'Add', to: '/add' },
      { title: 'List', to: '/list' },
    ],
  closeOnClick:false
  }),
  methods: {
		clearData() {
			localStorage.clear()
		},
  }
};
</script>
<style >
.header-container{
	max-width : none !important
}
.title{
	font-size: 1em;
}
</style>
