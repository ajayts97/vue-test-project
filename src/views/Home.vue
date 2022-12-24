<template>
	<v-container fluid class="pa-5">
		<v-form>
		<v-row>
			<v-col cols="12" sm="6" md="3">
				<v-text-field
					v-model="name"
					label="Enter product name"
					:rules="[rules.required]"
				></v-text-field>
			</v-col>
		</v-row>
		<v-row>
			<v-btn elevation="2" @click="addProduct">Add Product</v-btn>
		</v-row>
		</v-form>
	</v-container>
</template>

<script>
export default {
	name: 'Home',
	methods: {
		addProduct() {
			console.log(this.product);
			if (this.product.length == 0) {
				this.id = 1;
			} else {
				this.id++;
			}
			this.product = {
				id: this.id,
				name: this.name,
			}
				if(this.name.length > 1) {
					this.products.push(this.product);
		localStorage.setItem('products', JSON.stringify(this.products));
				} 
		},
	},
	data() {
		return {
			rules: {
				required: (value) => !!value || 'Required.',
			},
			id: 1,
			name: '',
			product: {},
			products: [],
			closeOnClick: false,
		};
	},
};
</script>
<style scoped>
.home {
	background-color: #f5f7fb;
}
</style>
