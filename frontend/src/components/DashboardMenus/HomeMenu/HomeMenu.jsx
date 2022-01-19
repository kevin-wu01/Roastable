import { H1, H2 } from "../../styled/text";

import "./HomeMenu.scss";

export default function HomeMenu() {
    return(
        <div className="HomeMenu">
            <H2 className="HomeMenu-title">Welcome to</H2> <H1>Roastable.</H1>
        </div>
    );
}