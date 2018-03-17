//Survey Review Form
import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {FIELDS} from './formFields';
import * as actions from '../../actions/index';

const SurveyReview = ({onCancel, formValues, submitSurvey, history}) => {
    const reviewFields = _.map(FIELDS, ({label, name}) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        );
    })
    return (
        <div>
            <h5>Please confirm your entries.</h5>
            <div>
                {reviewFields}
            </div>
            <button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>
                Back
            </button>
            <button onClick={() => submitSurvey(formValues, history)}
                    className="green btn-flat right white-text">
                Send Survey
                <i className="material-icons right"></i>
            </button>
        </div>
    )
}

function mapStateToProps(state) {
    console.log(state);
    return {
        formValues: state.form.surveyForm.values
    }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));