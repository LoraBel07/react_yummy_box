import Filter from "./Filter";

const AllCategories = () => {
	return (<div>
		<h1>What kind of food do you like?</h1>

		{['ITALIAN', 'SEAFOOD', 'APPETIZERS', 'SALADS', 'ALL'].map(category => 
		<Filter category={category}/>
		
		)}
		<Filter/>
		</div>)
}
export default AllCategories;