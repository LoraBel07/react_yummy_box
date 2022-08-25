const Dish = ({dish}) => {
	return (<div>
		<img src={`./${dish.img}.jpg`} alt="box"/>
		<h2>{dish.name}</h2>
		<p>$ {dish.price}</p>
		{/* To fix later */}
		<button>How many portions?</button>
		<button>Add to Cart</button>
	</div>)
}
export default Dish;