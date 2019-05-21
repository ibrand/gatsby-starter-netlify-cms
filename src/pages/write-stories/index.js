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
    // const isEnabled = email.length > 0 && password.length > 0
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleCheck = e => {
    this.setState({ [e.target.name]: e.target.checked })
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
    const { Student, Parent, Teacher, email, 'was able to resolve the situation': couldResolveTheSituation } = this.state
    const identityIsFilledOut = Student | Parent | Teacher
    console.log(couldResolveTheSituation)
    return (
      <Layout>
        <section className="section">
          <div className="container write-stories">
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
                  <CheckboxContainer section={'I am a'} onChange={this.handleCheck} />
                </div>
                <div className="field">
                  <label className="label">
                    2)  Have you, your child, your student ever been harassed/bullied in school by (check all that apply)
                  </label><br/>
                  <CheckboxContainer section={'Have you, your child, your student ever been harassed/bullied in school'} onChange={this.handleCheck} />
                </div>
                <div className="field">
                  <label className="label">
                    4) What were the impacts of the experience you faced? (Check all that apply)
                  </label><br/>
                  <CheckboxContainer section={'What were the impacts of the experience you faced'} onChange={this.handleCheck} />
                </div>
                <div className="field">
                  <label className="label">
                    5) Were you able to resolve the situation?
                  </label><br/>
                  Yes <input label={"Yes"} name={"was able to resolve the situation"} onChange={this.handleCheck} type={'checkbox'} />
                  <label className={couldResolveTheSituation ? "label show" : "hide" }>
                    If yes, how?
                  </label>
                  <input className={couldResolveTheSituation ? "input show" : "hide" } type={'text'} name={'how situation was resolved'} onChange={this.handleChange} required={false} />
                  <div className="field">
                    <label className="label">
                      Tell us your story
                    </label>
                    <CheckboxContainer onChange={this.handleCheck} section={'Tell us what happened'}/>
                    <textarea className="input" type={'text'} name={'how situation was resolved'} onChange={this.handleChange} required={false} />
                  </div>
                  <button
                    disabled={!identityIsFilledOut}
                    className="button is-link"
                    type="submit"
                  >
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
