import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import CheckboxContainer from "../../components/CheckboxContainer"

function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleCheck = e => {
    this.setState({ [e.target.name]: e.target.checked })
  }

  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0] })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ isSubmitting: true })
    const form = e.target
    fetch('/', {
      method: 'POST',
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

  form() {
    const { 'I was able to resolve the situation': couldResolveTheSituation } = this.state
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
        <h2>Submit your story</h2>
        <fieldset className="fieldset">
          <legend><span className="required-asterix">*</span> Privacy information</legend>
          <p className="subtext">
            We are working to make our schools better and reduce incidences of Institutional Bullying. By submitting the survey, you agree for your responses to be compiled to produce a report of the overall survey results after a given period.<br/><br/>
            In some situations, we may want to share an anonymous version of your submission. It may be included on this website in the “Read Stories” section or as examples for policy campaigns work.
          </p>
          <span className="single-line-checkboxes">
            <CheckboxContainer
              onChange={this.handleCheck}
              section={"consent agreement"}
            />
          </span>
        </fieldset>
        <fieldset className="fieldset">
          <legend><span className="required-asterix">*</span> What is your email?</legend>
          <input label={"Email"} name={"Email"} onChange={this.handleChange} type={'text'} />
        </fieldset>
        <p>
          <em>Check all square boxes that apply</em><br/>
          <span className="required-warning">All fields marked with an asterisk (<span className="required-asterix">*</span>) are required</span>
        </p>
        <fieldset className="fieldset">
          <legend><span className="required-asterix">*</span> I am a...</legend>
          <CheckboxContainer section={'I am a'} onChange={this.handleCheck} />
        </fieldset>
        <fieldset className="fieldset">
          <legend>Have you, your child, your student ever been harassed/bullied in school by</legend>
          <div className="two-column-checkboxes">
            <CheckboxContainer section={'Have you, your child, your student ever been harassed/bullied in school'} onChange={this.handleCheck} />
          </div>
        </fieldset>
        <fieldset className="fieldset">
          <legend><span className="required-asterix">*</span> Tell us your story</legend>
          <span className="single-line-checkboxes"><CheckboxContainer onChange={this.handleCheck} section={'Tell us what happened'}/></span>
          <textarea className="input" type={'text'} name={'Story'} onChange={this.handleChange} required={false} />
        </fieldset>
        <em>The following information is optional.</em><br/>
        <fieldset className="fieldset">
          <legend>I believe the reason for the Harassment/bullying was due to my/their...</legend>
          <div className="two-column-checkboxes">
            <CheckboxContainer section={'I believe the reason for the Harassment/bullying was due to my/their...'} onChange={this.handleCheck} />
          </div>
        </fieldset>
        <fieldset className="fieldset">
          <legend>What were the impacts of the experience you faced?</legend>
          <div className="two-column-checkboxes">
            <CheckboxContainer section={'What were the impacts of the experience you faced'} onChange={this.handleCheck} />
          </div>
        </fieldset>
        <fieldset className="fieldset">
          <legend>Were you able to resolve the situation?</legend>
          <CheckboxContainer onChange={this.handleCheck} section="was able to resolve situation" />
          <label>If so, how?</label>
          <input type={'text'} name={'how situation was resolved'} onChange={this.handleChange} required={false} />
        </fieldset>
        <em>The following information is optional. If you consented to sharing your story, your information will remain anonymous.</em><br/>
        <fieldset className="fieldset">
          <legend>Contact Information</legend>
          <label>Name</label>
          <input label={"Name"} name={"Name"} onChange={this.handleChange} type={'text'} />
          <label>Phone #</label>
          <input label={"Phone number"} name={"Phone number"} onChange={this.handleChange} type={'text'} />
          <label>School where incident occurred</label>
          <input label={"School where incident occurred"} name={"School where incident occurred"} onChange={this.handleChange} type={'text'} />
          <label>Zipcode where incident occurred</label>
          <input label={"Zipcode where incident occurred"} name={"Zipcode where incident occurred"} onChange={this.handleChange} type={'text'} />
        </fieldset>
        <fieldset className="fieldset">
          <legend>Upload a photo</legend>
          <label>You can upload a photo to share your story with the prompt: “Institutional Bullying is….”</label>
          <input label={"Image upload"} name={"Image upload"} onChange={this.handleAttachment} type={'file'} />
        </fieldset>
      </React.Fragment>
    )
  }

  render() {
    const {
      'i-am-student' : iAmStudent, 'i-am-parent' : iAmParent, 'i-am-teacher' : iAmTeacher,
      Email,
      Story,
      'consents-to-information-sharing' : consentsToInformationSharing,
      'does-not-consent-to-information-sharing' : doesNotConsentToInformationSharing,
      isSubmitting
    } = this.state
    const identityIsFilledOut = iAmStudent || iAmParent || iAmTeacher
    const consentIsFilledOut = consentsToInformationSharing || doesNotConsentToInformationSharing
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
                disabled={!consentIsFilledOut || !identityIsFilledOut || !Story || !Email || isSubmitting}
                className="button is-link"
                type="submit"
              >
                { isSubmitting ? "Submitting..." : "Submit Story" }
              </button>
              {
                !consentIsFilledOut ||
                !identityIsFilledOut ||
                !Story ||
                !Email ?
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
