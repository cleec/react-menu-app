var React = require('react');
module.exports = React.createClass({
  render: function () {
    return (
      <div className="container">
        <MenuContainer />
      </div>
    );
  }
});

var MenuContainer = React.createClass({
  render: function() {
    return (
      <div className="menu-container">
        Menu
        <MenuCategory />
      </div>
    );
  }
});

var MenuCategory = React.createClass({
  render: function() {
    return (
      <div className="menu-category">
        <div className="menu-category--coffee">
          <h3>Coffee</h3>
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div>
        <div className="menu-category--sweet">
          <h3>Sweet</h3>
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div>
        <div className="menu-category--food">
          <h3>Food</h3>
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div>
        <div className="menu-category--drink">
          <h3>Drink</h3>
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div>
      </div>
    );
  }
});

var MenuItem = React.createClass({
  render: function() {
    return (
      <div className="menu-item">
        <input type="radio"/>
        <label>Menu Item</label>
      </div>
    );
  }
});

