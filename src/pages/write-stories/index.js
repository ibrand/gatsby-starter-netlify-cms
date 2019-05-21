import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import CheckboxContainer from "../../components/CheckboxContainer"

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
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Write Stories</h1>
              <form
                name="write-stories"
                method="post"
                action="/write-stories/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="write-stories" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label>1) I am a... </label><br/>
                  Student <input label={"Student"} name={"Student"} onChange={this.handleChange} type={'radio'} />
                  Parent <input label={"Parent"} name={"Parent"} onChange={this.handleChange} type={'radio'} />
                  Teacher <input label={"Teacher"} name={"Teacher"} onChange={this.handleChange} type={'radio'} />
                </div>
                <div className="field">
                  <label className="label">
                    2)  Have you, your child, your student ever been harassed/bullied in school by (check all that apply)
                  </label><br/>
                  <CheckboxContainer section={'Have you, your child, your student ever been harassed/bullied in school'} onChange={this.handleChange} />
                </div>
                <div className="field">
                  <label className="label">
                    4) What were the impacts of the experience you faced? (Check all that apply)
                  </label><br/>
                  <CheckboxContainer section={'What were the impacts of the experience you faced'} onChange={this.handleChange} />
                </div>
                <div className="field">
                  <label className="label">
                    5) Were you able to resolve the situation?
                  </label><br/>
                  Yes <input label={"Yes"} name={"was able to resolve the situation"} onChange={this.handleChange} type={'radio'} />
                  No <input label={"No"} name={"was not able to resolve the situation"} onChange={this.handleChange} type={'radio'} />
                  <label className="label">
                    If yes, how?
                  </label>
                  <input className="input" type={'text'} name={'how situation was resolved'} onChange={this.handleChange} required={false} />
                  <button className="button is-link" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
