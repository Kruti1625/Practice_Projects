/* eslint-disable jsx-a11y/anchor-is-valid */
import './DealItems.css';

function DealItems(props){
    return (
            <div className="container deals-item-container">
                <div className="item-container deals-item">
                    <img src={props.image} alt="Bean Bag Covers"/>
                    <a className="item-title" href="#">{props.title}</a>
                    <a className="prices" href="#">{props.price}</a>
                    <a className="about" href="#">{props.about}</a>
                </div>
            </div>
    );
}
export default DealItems;