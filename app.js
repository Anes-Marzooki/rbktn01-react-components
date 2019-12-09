


// var Cucumbers = () => (
// 	<li>Cucumbers</li>
// 	);
//  var Kale = () => (
//  	<li>Kale</li>
//  );

// var GroceryList = () => (
// 	<ul>
// 		<Cucumbers/>
// 		<Kale/>
// 	</ul>
// );

// ReactDOM.render(<GroceryList/>, document.getElementById('app'));

// var GroceryListItem = (props) => (
// 	<ul>
// 	<li>{props.items[0]}</li>
//     <li>{props.items[1]}</li>
//     </ul>
	
// 	);

// var GroceryList = () => (
// 	<div>
// 		<h2>My Grocery List</h2>
// 		<GroceryListItem items={['Kale', 'Cucumbers']}/>
// 	</div>

// );

// ReactDOM.render (<GroceryList/>, document.getElementById('app'))


//****************************

class GroceryListItem extends React.Component {

	constructor(props){
		super(props);
	    this.state = {
	      done: false
	    };
	}

    onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }


	render(){

		var style = {
			fontWeight: this.state.done ? 'bold' : 'none'
		}

		return (
			<li style={style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.item}</li>
			);
	}
}

var GroceryList = (props) => {
    const items = props.items;
	const GroceryList = items.map((item, index) => 
    <GroceryListItem key={index} item={item}/> ) //item = "Cucumbers"
    
	return(
		<ul>
	    	{GroceryList}
	    </ul>
		);

}

ReactDOM.render (<GroceryList items={['Cucumbers', 'Kale']}/>, document.getElementById('app'))



    