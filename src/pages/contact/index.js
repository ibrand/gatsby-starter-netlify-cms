import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ isSubmitting: true })
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => {
        navigate(form.getAttribute('action'))
        this.setState({ isSubmitting: false })
      })
      .catch(error => {
        this.setState({ isSubmitting: false })
        alert(error)
      })
  }

  render() {
    console.log(this.state)
    const {
      name,
      phoneNumber,
      email,
      description,
      isSubmitting
    } = this.state
    return (
      <Layout>
        <section className="contact">
          <div className="container">
            <h2 className="page-title">Contact Us</h2>
            <p>
              If you want more information about the campaign or want to conduct a training on Institutionalized Bullying please submit the contact form below.
            </p>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                <div className="form-container">
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{' '}
                      <input name="bot-field" onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="fieldset">
                    <label className="label" htmlFor={'name'}>
                      Name
                    </label>
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                  <div className="fieldset">
                    <label className="label" htmlFor={'phone-number'}>
                      Phone #
                    </label>
                    <input
                      className="input"
                      type={'tel'}
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      name={'phoneNumber'}
                      onChange={this.handleChange}
                      id={'phoneNumber'}
                      required={true}
                    />
                    <span className="note">(Format: 123-456-7890)</span>
                  </div>
                  <div className="fieldset">
                    <label className="label" htmlFor={'email'}>
                      Email
                    </label>
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                  <div className="fieldset">
                    <label className="label" htmlFor={'description'}>
                      Description (What is the purpose of your inquiry)
                    </label>
                      <textarea
                        className="textarea"
                        name={'description'}
                        onChange={this.handleChange}
                        id={'description'}
                        required={true}
                      />
                  </div>
                </div>
                <button
                  disabled={!name || !phoneNumber || !email || !description || isSubmitting}
                  className="button is-link"
                  type="submit"
                >
                  { isSubmitting ? "Sending..." : "Send" }
                </button>
                {
                  !name ||
                  !phoneNumber ||
                  !email ||
                  !description ?
                    <span className="required-text">There are still required fields to fill out</span> :
                    null
                }
              </form>
          </div>
        </section>
      </Layout>
    )
  }
}
