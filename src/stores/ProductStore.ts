import {registerInDevtools, Store} from 'pullstate'
import {Product, products} from '../data/products'

type ProductStoreType = {
	products: Product[];
	showOnlyStocked: boolean;
	searchText: string;
}

export const ProductStore = new Store<ProductStoreType>({
	products,
	showOnlyStocked: true,
	searchText: ''
})

export const toggleShowOnlyStocked = () => {
	ProductStore.update(
		s => {s.showOnlyStocked = !s.showOnlyStocked}
	)
}

export const setSearchText = (text: string) => {
	ProductStore.update(
		s => {s.searchText = text}
	)
}

export const getFilteredProducts = (state: ProductStoreType) => {
	let output: Product[] = []
	//filter by showOnlyStocked
	if (state.showOnlyStocked){
		output = state.products.filter(x => x.stocked)
	}
	else
		output = state.products
	
	//filter by searchText
	if (state.searchText !== ''){
		output = output.filter(x => x.name.includes(state.searchText))
	}

	return output
}

registerInDevtools({
	ProductStore
})