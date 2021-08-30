import { ProductStore, setSearchText, toggleShowOnlyStocked } from "../stores/ProductStore"

const SearchBar = () => {

	const state = ProductStore.useState()

	return (
		<form>
			<input
				placeholder='Search...'
				value={state.searchText}
				onChange={e => setSearchText(e.target.value)}
			/>
			<p>
				<input
					type='checkbox'
					checked={state.showOnlyStocked}
					onChange={() => toggleShowOnlyStocked()}
				/>
				<span> Only show products in stock </span>
			</p>
		</form>
	)
}

export default SearchBar