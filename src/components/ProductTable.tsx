import { getFilteredProducts, ProductStore } from "../stores/ProductStore"
import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

const ProductTable = () => {

	const state = ProductStore.useState()
	const filteredProducts = getFilteredProducts(state)

	const findDistinctedCategory = () => {
		return [...new Set(filteredProducts.map(x => x.category))]
	}

	const render = () => {
		const output: JSX.Element[] = []
		const distinctedCategory = findDistinctedCategory()
		for( const category of distinctedCategory) {
			output.push(<ProductCategoryRow category={category} key={category}/>)
			output.push(
				...filteredProducts.filter(x => x.category === category)
					.map(x => <ProductRow name={x.name} stocked={x.stocked} price={x.price} key={x.name}/>)
			)
		}
		return output
	}

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{/* {filteredProducts
						.map(x => <ProductRow name={x.name} stocked={x.stocked} price={x.price}/>)} */}
					{render()}
				</tbody>
			</table>
		</div>
	)
}

export default ProductTable