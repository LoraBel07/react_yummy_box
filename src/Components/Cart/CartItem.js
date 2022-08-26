import dataDishes from "../../data/dataDishes";
// import { useDispatch } from "react-redux";

const CartItem = ({cartItem}) => {

console.log(cartItem)

// const dispatch=useDispatch();

const dishes = dataDishes.find(item => item.id === cartItem.dishId);
console.log(dishes);
	return (<div>
		{/* <p>{dishes.name}</p> */}
		{/* <p>$ {dishes.price}</p> */}
		<p>{cartItem.quantity} porstion(s)</p>
		<p>{cartItem.name}</p>
		<p>$ {cartItem.price}</p>
		
	</div>)
}
export default CartItem;