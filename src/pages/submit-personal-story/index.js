import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import CheckboxContainer from "../../components/CheckboxContainer"
import {graphql, StaticQuery} from "gatsby";

function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

export default class WriteStoriesPage extends React.Component {
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

  handleRadio  = (e) => {
    this.setState({ [e.target.name]: e.target.value })
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
    const { 'Situation Resolution': wasSituationResolved } = this.state
    const couldResolveTheSituation = wasSituationResolved === "Resolved situation"
    return(
      <React.Fragment>
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="submit-personal-story" />
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
          <div className="radio-buttons">
            <div className="radio-container">
              <input
                name='Privacy Information'
                onChange={this.handleRadio}
                type={'radio'}
                value='Consents to information sharing'
                id='consents-to-information-sharing'
              />
              <label htmlFor={'consents-to-information-sharing'}>I consent for my submission to be used/shared</label>
            </div>
            <div className="radio-container">
              <input
                name='Privacy Information'
                onChange={this.handleRadio}
                type={'radio'}
                value='Does not consent to information sharing'
                id='does-not-consent-to-information-sharing'
              />
              <label htmlFor={'does-not-consent-to-information-sharing'}>I do not consent</label>
            </div>
          </div>
        </fieldset>
        <fieldset className="fieldset">
          <legend><span className="required-asterix">*</span> What is your email?</legend>
          <input label={"Email"} name={"Email"} onChange={this.handleChange} type={'email'} />
        </fieldset>
        <p>
          <em>Check all square boxes that apply</em><br/>
          <span className="required-warning">All fields marked with an asterisk (<span className="required-asterix">*</span>) are required</span>
        </p>
        <fieldset className="fieldset">
          <legend><span className="required-asterix">*</span> I am a...</legend>
          <div className="single-line-checkboxes">
            <CheckboxContainer section={'I am a'} onChange={this.handleCheck} />
          </div>
        </fieldset>
        <fieldset className="fieldset">
          <legend>Have you ever seen or experienced any of the following in your school</legend>
          <strong>Youth</strong>
          <div className="two-column-checkboxes">
            <CheckboxContainer section={'Have you ever seen or experienced any of the following in your school - Youth'} onChange={this.handleCheck} />
          </div>
          <strong>Parents</strong>
          <div className="two-column-checkboxes">
            <CheckboxContainer section={'Have you ever seen or experienced any of the following in your school - Parents'} onChange={this.handleCheck} />
          </div>
          <br/>
          <strong>Teachers</strong>
          <div className="two-column-checkboxes">
            <CheckboxContainer section={'Have you ever seen or experienced any of the following in your school - Teachers'} onChange={this.handleCheck} />
          </div>
        </fieldset>
        <fieldset className="fieldset">
          <legend>Have you, your child, your student ever been harassed/bullied in school by</legend>
          <div className="two-column-checkboxes">
            <CheckboxContainer section={'Have you, your child, your student ever been harassed/bullied in school'} onChange={this.handleCheck} />
          </div>
          <label className='other-label'>Other:</label>
          <input className='other-input' label={"Other: Bullied by"} name={"Other: Bullied by"} onChange={this.handleChange} type={'text'} />
        </fieldset>
        <fieldset className="fieldset">
          <legend><span className="required-asterix">*</span> Tell us your story</legend>
          <div className="radio-buttons">
            <div className="radio-container">
              <input
                name='Who Experienced This'
                onChange={this.handleRadio}
                type={'radio'}
                value='I experienced this'
                id='i-experienced-this'
              />
              <label htmlFor={'i-experienced-this'}>I experienced this</label>
            </div>
            <div className="radio-container">
              <input
                name='Who Experienced This'
                onChange={this.handleRadio}
                type={'radio'}
                value='I saw this happen'
                id='i-saw-this-happen'
              />
              <label htmlFor={'i-saw-this-happen'}>I saw this happen</label>
            </div>
          </div>
          <textarea className="input" type={'text'} name={'Story'} onChange={this.handleChange} required={false} />
        </fieldset>
        <em>The following information is optional.</em><br/>
        <fieldset className="fieldset">
          <legend>I believe the reason for the Harassment/bullying was due to my/their...</legend>
          <div className="two-column-checkboxes">
            <CheckboxContainer section={'I believe the reason for the Harassment/bullying was due to my/their...'} onChange={this.handleCheck} />
          </div>
          <label className='other-label'>Other:</label>
          <input className='other-input' label={"Other: Reason for bullying"} name={"Other: Reason for bullying"} onChange={this.handleChange} type={'text'} />
        </fieldset>
        <fieldset className="fieldset">
          <legend>What were the impacts of the experience you faced?</legend>
          <div className="two-column-checkboxes">
            <CheckboxContainer section={'What were the impacts of the experience you faced'} onChange={this.handleCheck} />
          </div>
        </fieldset>
        <fieldset className="fieldset">
          <legend>Were you able to resolve the situation?</legend>
          <div className="radio-buttons">
            <div className="radio-container">
              <input
                name='Situation Resolution'
                onChange={this.handleRadio}
                type={'radio'}
                value='Resolved situation'
                id='did-resolve-situation'
              />
              <label htmlFor={'did-resolve-situation'}>Yes</label>
            </div>
            <div className="radio-container">
              <input
                name='Situation Resolution'
                onChange={this.handleRadio}
                type={'radio'}
                value="Couldn't resolve situation"
                id='couldnt-resolve-situation'
              />
              <label htmlFor={'couldnt-resolve-situation'}>No</label>
            </div>
          </div>
          <span className={couldResolveTheSituation ? 'show' : 'hide'}>
            <label>How?</label>
            <textarea name={'how situation was resolved'} onChange={this.handleChange} required={false} />
          </span>
        </fieldset>
        <fieldset className="fieldset">
          <legend>Contact Information</legend>
          <label><span className="required-asterix">*</span> Name</label>
          <input label={"Name"} name={"Name"} onChange={this.handleChange} type={'text'} />
          <label>Phone #</label>
          <input label={"Phone number"} name={"Phone number"} onChange={this.handleChange} type={'text'} />
          <label>School where incident occurred</label>
          <input label={"School where incident occurred"} name={"School where incident occurred"} onChange={this.handleChange} type={'text'} />
          <label><span className="required-asterix">*</span> Zipcode where incident occurred</label>
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
      'Privacy Information' : privacyInformation,
      'Who Experienced This': whoExperiencedThis,
      Name,
      'Zipcode where incident occurred': zipcodeWhereIncidentOccurred,
      isSubmitting
    } = this.state
    const identityIsFilledOut = iAmStudent || iAmParent || iAmTeacher
    const radioButtonsAreFilledOut = privacyInformation && whoExperiencedThis
    const requiredContactInfoIsFilledOut = Name && zipcodeWhereIncidentOccurred
    const disableSubmit = !radioButtonsAreFilledOut || !identityIsFilledOut || !Story || !Email || !requiredContactInfoIsFilledOut
    return (
      <StaticQuery
        query={ graphql`
          query {
            markdownRemark(frontmatter: {
              templateKey: {
                eq: "submit-personal-story-page"
              }
            }) {
              html
            }
          }`
        }
        render={data => (
          <Layout>
            <section className="submit-personal-story">
              <div className="container">
                <h2 className="page-title">Submit Personal Story</h2>
                <h3>YOU’RE NOT ALONE.</h3>
                <span className="subtitle" dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></span>
                <form
                  name="submit-personal-story"
                  method="post"
                  action="/submit-personal-story/thanks/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                >
                  <div className="form-container">
                    {this.form()}
                  </div>
                  <button
                    disabled={disableSubmit}
                    className="button is-link"
                    type="submit"
                  >
                    { isSubmitting ? "Submitting..." : "Submit Story" }
                  </button>
                  {
                    disableSubmit ?
                      <span className="required-text">There are still required fields to fill out</span> :
                      null
                  }
                </form>
              </div>
            </section>
          </Layout>
        )}
      />
    )
  }
}
