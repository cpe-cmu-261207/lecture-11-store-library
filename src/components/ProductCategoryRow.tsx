type ProductCategoryRowProps = {
	category: string;
}

const ProductCategoryRow = ({category}: ProductCategoryRowProps) => {
	return (
			<tr>
				<th colSpan={2}>
					{category}
				</th>
			</tr>
	)
}

export default ProductCategoryRow