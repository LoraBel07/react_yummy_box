import dataDishes from "../../data/dataDishes";
// import { useDispatch } from "react-redux";

const CartItem = ({cartItem}) => {

console.log(cartItem)

const dishes = dataDishes.find(item => item.id === cartItem.dishId);
console.log(dishes);
	return (<div>
		<p>{dishes.name}</p>		
		<p>{cartItem.quantity} porstion(s)</p>
		<p>Price: ${dishes.price * cartItem.quantity}</p>
		<img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt=""/> 
		
	</div>)
}
export default CartItem;