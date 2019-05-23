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

  form() {
    const { 'was able to resolve the situation': couldResolveTheSituation } = this.state
    return(
      <React.Fragment>
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="write-stories" />
        <div hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </div>
        <fieldset>
          <legend>1) I am a... </legend>
          <CheckboxContainer section={'I am a'} onChange={this.handleCheck} />
        </fieldset>
        <fieldset>
          <legend>2)  Have you, your child, your student ever been harassed/bullied in school by</legend>
          <CheckboxContainer section={'Have you, your child, your student ever been harassed/bullied in school'} onChange={this.handleCheck} />
        </fieldset>
        <fieldset>
          <legend>4) What were the impacts of the experience you faced?</legend>
          <CheckboxContainer section={'What were the impacts of the experience you faced'} onChange={this.handleCheck} />
        </fieldset>
        <fieldset>
          <legend>5) Were you able to resolve the situation?</legend>
          Yes <input label={"Yes"} name={"was able to resolve the situation"} onChange={this.handleCheck} type={'checkbox'} />
          <label className={couldResolveTheSituation ? "label show" : "hide" }>
            If yes, how?
          </label>
          <input className={couldResolveTheSituation ? "input show" : "hide" } type={'text'} name={'how situation was resolved'} onChange={this.handleChange} required={false} />
        </fieldset>
        <fieldset>
          <legend>Tell us your story</legend>
          <CheckboxContainer onChange={this.handleCheck} section={'Tell us what happened'}/>
          <textarea className="input" type={'text'} name={'Story'} onChange={this.handleChange} required={false} />
        </fieldset>
        <fieldset>
          <label>Name</label>
          <input label={"Name"} name={"Name"} onChange={this.handleChange} type={'text'} />
          <label>Email</label>
          <input label={"Email"} name={"Email"} onChange={this.handleChange} type={'text'} />
          <label>Phone #</label>
          <input label={"Phone number"} name={"Phone number"} onChange={this.handleChange} type={'text'} />
          <label>School where incident occurred</label>
          <input label={"School where incident occurred"} name={"School where incident occurred"} onChange={this.handleChange} type={'text'} />
          <label>Zipcode where incident occurred</label>
          <input label={"Zipcode where incident occurred"} name={"Zipcode where incident occurred"} onChange={this.handleChange} type={'text'} />
          <label>You can upload a photo to share your story with the prompt: “Institutional Bullying is….”</label>
          <input label={"Image upload"} name={"Image upload"} onChange={this.handleChange} type={'file'} />
        </fieldset>
      </React.Fragment>
    )
  }

  render() {
    const {
      Student, Parent, Teacher,
      Email,
      Story
    } = this.state
    const identityIsFilledOut = Student || Parent || Teacher
    return (
      <Layout>
        <section className="write-stories">
          <div className="container">
            <h2 className="page-title">Write Stories</h2>
            <h3>YOU’RE NOT ALONE.</h3>
            <p className="subtitle">By sharing your story, you change the way people talk about and understand bullying.</p>
            <form
              name="write-stories"
              method="post"
              action="/write-stories/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              <div className="form-container">
                {this.form()}
              </div>
              <button
                disabled={!identityIsFilledOut || !Story || !Email}
                className="button is-link"
                type="submit"
              >
                Submit Story
              </button>
            </form>
          </div>
        </section>
      </Layout>
    )
  }
}
