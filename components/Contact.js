import React from "react"

export default function Contact() {
  const loremIpsum = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'

  return (
    <>
      <p className="formInfo">
        {loremIpsum}
      </p>
      <div className='aboutContent'>
        <form className="form">
          <p>
          <label for="name">Name</label>
          <input type="text" id="name" name="name"/>
          </p>
          <p>
            <label for="email">Email</label>
            <input type="email" id="email" name="email"/>
          </p>
          <p>
            <label for="phone">Phone</label>
            <input type="phone" id="phone" name="phone"/>
          </p>
          <p>
            <label for="message">Message</label>
            <textarea name="message" rows="10" cols="30"/>
          </p>
          <p className='submitButton'>
            <a type="submit">
              Submit
            </a>
          </p>
        </form>
      </div>
    </>
  )
}
