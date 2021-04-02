import React, { Component } from 'react'

class Keypad extends Component {

  render() {
    return (
      <div>
        <form>
          <label>
            Password:
            <input onChange={(e) => console.log('Entering password...')}type='password' />
          </label>
        </form>
      </div>
    )
  }
}

export default Keypad