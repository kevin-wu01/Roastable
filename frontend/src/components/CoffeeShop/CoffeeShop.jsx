
import { H2, H4 } from "../styled/text";
import "./CoffeeShop.scss";

export default function CoffeeShop() {
    return(
        <div className="CoffeeShop">
            <button className="CoffeeShop-Btn"> 
                <H2 className="CoffeeShop-Btn__title">
                    Reserved Table
                </H2>
                <hr className="CoffeeShop-Btn__divider" />
                <H4 className="CoffeeShop-Btn__desc">
                    Private room for your group of friends, dog, parakeet & anyone else you know
                </H4>
            </button>
            <button className="CoffeeShop-Btn"> 
                <H2 className="CoffeeShop-Btn__title">
                    Open Table
                </H2>
                <hr className="CoffeeShop-Btn__divider" />
                <H4 className="CoffeeShop-Btn__desc">
                    Public room for finding your next study group
                </H4>
            </button>
        </div>
    );
}