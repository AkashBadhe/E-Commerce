import React from 'react';

// Import the Autocomplete Component
import Autocomplete from 'react-autocomplete';

export default class Search extends React.Component {
  constructor(props, context) {
    super(props, context);

    // Set initial State
    this.state = {
      // Current value of the select field
      value: '',
      // Data that will be rendered in the autocomplete
      // As it is asynchronous, it is initially empty
      autocompleteData: [],
    };

    // Bind `this` context to functions of the class
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.getItemValue = this.getItemValue.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.retrieveDataAsynchronously = this.retrieveDataAsynchronously.bind(
      this,
    );
  }

  renderMenu = (items, value, style) => {
    return (
      <div
        style={{
          ...style,
        }}
        children={items}
      />
    );
  };

  retrieveDataAsynchronously = searchText => {
    let _this = this;
    fetch('http://localhost:8000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `{
        products{
            edges{
              title,
              price
            }
        }
      }`,
      }),
    })
      .then(r => r.json())
      .then(r => {
        let data =
          r && r.data
            ? r.data.products.edges
                .filter(a => {
                  const regex = new RegExp(searchText, 'gi');
                  return a.title.match(regex);
                })
                .map(item => {
                  return {
                    label: item.title,
                    value: item.price,
                  };
                })
            : [];
        _this.setState({
          autocompleteData: data,
        });
      })
      .catch(err => console.log('err', err));
  };

  /**
   * Updates the state of the autocomplete data with the remote data obtained via AJAX.
   *
   * @param {String} searchText content of the input that will filter the autocomplete data.
   * @return {Nothing} The state is updated but no value is returned
   */
  retrieveDataAsynchronously1(searchText) {
    let _this = this;

    // Url of your website that process the data and returns a
    let url = `mywebsite/searchApi?query=${searchText}`;

    // Configure a basic AJAX request to your server side API
    // that returns the data according to the sent text
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = () => {
      let status = xhr.status;

      if (status == 200) {
        // In this example we expects from the server data with the structure of:
        // [
        //    {
        //        label: "Some Text",
        //        value: 1,
        //    },
        //    {
        //        label: "Some Other Text",
        //        value: 1,
        //    },
        // ]
        // But you can obviously change the render data :)

        // Update the state with the remote data and that's it !
        _this.setState({
          autocompleteData: xhr.response,
        });

        // Show response of your server in the console
        console.log(xhr.response);
      } else {
        console.error('Cannot load data from remote source');
      }
    };

    xhr.send();
  }

  /**
   * Callback triggered when the user types in the autocomplete field
   *
   * @param {Event} e JavaScript Event
   * @return {Event} Event of JavaScript can be used as usual.
   */
  onChange(e) {
    this.setState({
      value: e.target.value,
    });

    /**
     * Handle the remote request with the current text !
     */
    this.retrieveDataAsynchronously(e.target.value);

    console.log('The Input Text has changed to ', e.target.value);
  }

  /**
   * Callback triggered when the autocomplete input changes.
   *
   * @param {Object} val Value returned by the getItemValue function.
   * @return {Nothing} No value is returned
   */
  onSelect(val) {
    this.setState({
      value: val.split('- ')[1],
    });

    console.log("Option from 'database' selected : ", val);
  }

  /**
   * Define the markup of every rendered item of the autocomplete.
   *
   * @param {Object} item Single object from the data that can be shown inside the autocomplete
   * @param {Boolean} isHighlighted declares wheter the item has been highlighted or not.
   * @return {Markup} Component
   */
  renderItem(item, isHighlighted) {
    return (
      <div
        style={{
          background: isHighlighted ? 'lightgray' : 'white',
          paddingLeft: '30px',
        }}
      >
        {item.label}
      </div>
    );
  }

  /**
   * Define which property of the autocomplete source will be show to the user.
   *
   * @param {Object} item Single object from the data that can be shown inside the autocomplete
   * @return {String} val
   */
  getItemValue(item) {
    // You can obviously only return the Label or the component you need to show
    // In this case we are going to show the value and the label that shows in the input
    // something like "1 - Microsoft"
    return `${item.value} - ${item.label}`;
  }

  render() {
    return (
      <div>
        <Autocomplete
          getItemValue={this.getItemValue}
          items={this.state.autocompleteData}
          renderItem={this.renderItem}
          renderMenu={this.renderMenu}
          value={this.state.value}
          onChange={this.onChange}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}
