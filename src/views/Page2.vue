<template>
	<v-container fluid class="pa-5">
		<v-row>
			<v-col cols="12" sm="6" md="3">
				<v-select
					:items="products"
					v-model="product"
					label="Select Product"
					item-text="name"
					item-value="id"
					@change="changeProduct($event)"
				></v-select>
			</v-col>
			<v-col cols="12" sm="6" md="3">
				<v-text-field v-model="name" label="Enter Category" :rules="[rules.required]"></v-text-field>
			</v-col>
			<v-col cols="12" sm="6" md="3">
				<v-btn elevation="2" @click="addProduct">Add category</v-btn>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12" sm="6" md="3">
				<v-select
					:items="categoryItems"
					v-model="category"
					label="Select Category"
					item-text="name"
					item-value="id"
					@change="changeCategory($event)"
					@click="update"
				></v-select>
			</v-col>
			<v-col cols="12" sm="6" md="3">
				<v-text-field v-model="subCategoryName" label="Enter Sub Category" :rules="[rules.required]"></v-text-field>
			</v-col>
			<v-btn elevation="2" @click="addSubCategory">Add Sub category</v-btn>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'Page2',
	mounted() {
		this.products = JSON.parse(localStorage.products);
		this.categories = JSON.parse(localStorage.categories);
	},
	methods: {
		update() {
			this.categories = JSON.parse(localStorage.categories);
		},
		changeProduct(item) {
			this.productId = item;
			this.categoryItems = this.categories.filter(el => el.productId == item)
		},
		addProduct() {
			if (this.categories.length == 0) {
				this.categoryId = 1;
			} else {
				this.categoryId++;
			}
			this.category = {
				id: this.categoryId,
				productId: this.product,
				name: this.name,
			}
			if(this.name.length > 0) {
				this.categories.push(this.category);
			localStorage.setItem('categories', JSON.stringify(this.categories));
			}
		},
		addSubCategory() {
			if (this.subCategories.length == 0) {
				this.id = 1;
			} else {
				this.id++;
			}
			this.subCategory = {
				id: this.id,
				categoryId: this.category,
				name: this.subCategoryName,
			}
			if(this.category.length > 0) {
				this.subCategories.push(this.subCategory);
			localStorage.setItem('subCategories', JSON.stringify(this.subCategories));
			}
		},
	},
	data() {
		return {
			subCategoryName: '',
			categoryName: '',
			categoryId: 1,
			name: '',
			subCategory: {},
			subCategories: [],
			categoryItems: [],
			// category: '',
			product: '',
			productId: '',
			products: [],
			category: '',
			categories: [],
			rules: {
				required: (value) => !!value || 'Required.',
			},
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
