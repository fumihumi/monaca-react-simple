import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  alertPopup() {
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>Onsen UI</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <div>Hello World!</div>
        <Button onClick={this.alertPopup}>Click Me!</Button>
      </Page>
    );
  }
}
