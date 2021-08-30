type ProductRowProps = {
	name: string;
	stocked: boolean;
	price: number;
}

const ProductRow = ({name, stocked, price}: ProductRowProps) => {
	const computedStyle = stocked? {} : {color: 'red'}
	return (
		<tr style={computedStyle}>
			<td>{name}</td>
			<td>${price}</td>
		</tr>
	)
}

export default ProductRow