import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  location: Yup.string().required('Required'),
})

const DialogModal = props => {
  return (
    <div className={classNames('modal', { '-visible': props.isVisible })}>
      <Formik
        initialValues={{ location: localStorage.getItem('weatherLocation') }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            props.setLocation(values.location)
            setSubmitting(false)
          }, 400)
        }}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <div className="modal__dialog">
            <div className="modal__dialog__header">
              <h1>{props.header}</h1>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal__dialog__content">
                <p>{props.description}</p>
                <label>
                  Localization:
                  <input
                    name="location"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Weather Location"
                    type="text"
                    value={values.location}
                  />
                </label>
                {errors.location && touched.location && errors.location}
              </div>
              <div className="modal__dialog__footer">
                <button className="modal-button" disabled={isSubmitting} type="submit">
                  Set
                </button>
                <button className="modal-button" onClick={props.closeModal}>
                  Close
                </button>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </div>
  )
}

DialogModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string,
  setLocation: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
}

export default DialogModal
