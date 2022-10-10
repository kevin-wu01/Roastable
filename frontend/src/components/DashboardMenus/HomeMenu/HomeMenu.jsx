import { H1, H2 } from "../../styled/text";
import { DashboardTile } from "../../styled/common";

import "./HomeMenu.scss";

export default function HomeMenu() {
    return(
        <div className="HomeMenu">
            <div className="HomeMenu-wrapper"><H2 className="HomeMenu-title">Welcome to</H2> <H1>Roastable.</H1></div>
            <div className="HomeMenu-stats">
                <DashboardTile>
                    <H2 className="HomeMenu-label">Online</H2>
                    <H2 className="HomeMenu-value">1,795,201</H2>
                </DashboardTile>
                <DashboardTile>
                    <H2 className="HomeMenu-label">Active Tables</H2>
                    <H2 className="HomeMenu-value">1,203</H2>
                </DashboardTile>
            </div>
        </div>
    );
}