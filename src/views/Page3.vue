<template>
	<v-container fluid class="pa-5">
		<v-row>
			<h3>Products</h3>
		</v-row>
		<v-row>
			<v-col
				cols="12"
				sm="2"
				md="2"
				v-for="product in products"
				:key="product.id"
			>
				<a>
					<span @click="clickProduct(product)">
					{{ product.name }}
				</span>
					</a>
			</v-col>
		</v-row>
		<v-row v-show="categoryItems.length !== 0">
			<h4>Categories</h4>
		</v-row>
		<v-row>
			<v-col
				cols="12"
				sm="2"
				md="2"
				v-for="product in categoryItems"
				:key="product.id"
			>
			<a>
				<span @click="clickCategory(product)">
					{{ product.name }}
				</span>
			</a>
			</v-col>
		</v-row>
		<v-row>
			<h4>Sub Categories</h4>
		</v-row>
		<v-row>
			<v-col
				cols="12"
				sm="2"
				md="2"
				v-for="product in subCategoryItems"
				:key="product.id"
			>
				<span >
					{{ product.name }}
				</span>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'Page2',
	mounted() {
		this.products = JSON.parse(localStorage.products);
		this.categories = JSON.parse(localStorage.categories);
		this.subCategories = JSON.parse(localStorage.subCategories);
	},
	methods: {
		clickProduct(product) {
			this.categoryItems = []
			this.subCategoryItems = []
			this.categories = JSON.parse(localStorage.categories);
			this.categoryItems = this.categories.filter(el => el.productId == product.id)
		},
		clickCategory(category) {
			this.subCategoryItems = []
			this.subCategories = JSON.parse(localStorage.subCategories);
			this.subCategoryItems = this.subCategories.filter(el => el.categoryId == category.id)
		},
		changeProduct(item) {
			this.productId = item;
		},
		addProduct() {
			console.log(this.category);
			if (this.categories.length == 0) {
				this.categoryId = 1;
			} else {
				this.categoryId++;
			}
			(this.category = {
				id: this.categoryId,
				productId: this.product,
				name: this.name,
			}),
			this.categories.push(this.category);
			localStorage.setItem('categories', JSON.stringify(this.categories));
		},
		addSubCategory() {
			if (this.subCategories.length == 0) {
				this.id = 1;
			} else {
				this.id++;
			}
			this.subCategory = {
				id: this.id,
				productId: this.product,
				categoryId: this.category,
				name: this.subCategoryName,
			}
			this.subCategories.push(this.subCategory);
			localStorage.setItem('subCategories', JSON.stringify(this.subCategories));
		},
	},
	data() {
		return {
			subCategoryName: '',
			categoryName: '',
			categoryItems: [],
			subCategoryItems: [],
			categoryId: 1,
			name: '',
			subCategory: {},
			subCategories: [],
			product: '',
			productId: '',
			products: [],
			category: '',
			categories: [],
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
