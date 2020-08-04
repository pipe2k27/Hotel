import React from "react";
import Money from "./money.js";
import Country from "./country.js";
import Size from "./size.js";
import Date1 from "./date1.js";
import Date2 from "./date2.js";

export default class Filters extends React.Component {
  render() {
    return (
      <div className="filters">
        <div className="filters-grid">
          <div className="date-filters">
            <Date1 start={this.props.money} />
            <Date2 end={this.props.money} />
          </div>

          <div className="other-filters">
            <Money money={this.props.money} />
            <Country country={this.props.money} />
            <Size size={this.props.money} />
          </div>
        </div>
      </div>
    );
  }
}
