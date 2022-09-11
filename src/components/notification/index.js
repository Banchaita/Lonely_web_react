import React from 'react';
import ReactNotifications from 'react-browser-notifications';

class Notify extends React.Component {
  constructor() {
    super();
    this.showNotifications = this.showNotifications.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  showNotifications() {
    if (this.n.supported()) this.n.show();
  }

  handleClick(event) {
    window.focus()
    this.n.close(event.target.tag);
  }

  render() {
    return (
      <div>

        <ReactNotifications
          onRef={ref => (this.n = ref)} // Required
          title="Some Title" // Required
          body="This is the body!"
          icon="devices-logo.png"
          tag="abcdef"
          onClick={event => this.handleClick(event)}
        />


        <div className=' button-part mt-5 ml-5'>
          <div onClick={this.showNotifications} className="authlocation_btn" style={{ width: '100%' }}>
            <p style={{ padding: '12px 8rem', height: 'auto', margin: '0', background: '#282c34', borderRadius: '7px', color: 'white' }}>   I want to be Notified</p>
            </div>
        </div>

      </div>
    )
  }
}
export default Notify;