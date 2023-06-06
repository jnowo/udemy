import classes from './CartItem.module.css';
import {useDispatch} from "react-redux";
import {cartActions} from "../../store/cart";

const CartItem = (props) => {
  const {title, quantity, total, price, id} = props.item;

  const dispatch = useDispatch();

  const increaseItemQuantityHandler = () => {
    dispatch(cartActions.addItemToCart({id: id}));
  }

  const decreaseItemQuantityHandler = () => {
    dispatch(cartActions.removeItemFromCart({id: id}));
  }
  return (
    <li className={classes.item} key={id}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseItemQuantityHandler}>-</button>
          <button onClick={increaseItemQuantityHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;