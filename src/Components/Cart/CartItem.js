import dataDishes from "../../data/dataDishes";
// import { useDispatch } from "react-redux";

const CartItem = ({cartItem}) => {

console.log(cartItem)

const dishes = dataDishes.find(item => item.id === cartItem.dishID);
console.log(dishes);
	return (<div>
		<p>{dishes.name}</p>
		<p>Price: ${dishes.price * cartItem.quantity}</p>
		<p>{cartItem.quantity} porstion(s)</p>
		
	</div>)
}
export default CartItem;