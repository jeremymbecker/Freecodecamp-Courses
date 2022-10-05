import React from 'react';
import './SurveyForm.css';

class SurveyForm extends React.Component{
    render() {
        return(
            <main id="survey-form-page">
                <h1 id="title">freeCodeCamp Survey Form</h1>
                <p id="description"><em>Thank you for your time in improving our website</em></p>
                <div className="container">
                    <form id="survey-form">
                        <div className="form-spacing">
                            <label for="name" id="name-label" className="label-format">Name</label>
                            <input id="name" type="text" name="name" placeholder="Enter your name" className="textbox-look input-format" required />
                        </div>
                        <div className="form-spacing">
                            <label for="email" id="email-label" className="label-format">Email</label>
                            <input id="email" type="email" name="email" placeholder="Enter your Email" className="textbox-look input-format" required />
                        </div>
                        <div className="form-spacing">
                            <label for="age" id="number-label" className="label-format">Age (optional)</label>
                            <input id="number" type="number" name="age" placeholder="Age" className="textbox-look input-format" min="0" max="125" />
                        </div>
                        <div className="form-spacing">
                            <label for="role-options" id="dropdown-label" className="label-format">Which option best describes your current role?</label>
                            <select id="dropdown" name="role-options" placeholder="Select current role" className="textbox-look select-format" required>
                                <option className="option-format" value="" disabled selected>Select current role</option>
                                <option className="option-format" value="Student">Student</option>
                                <option className="option-format" value="Full Time Job">Full Time Job</option>
                                <option className="option-format" value="Full Time Learner">Full Time Learner</option>
                                <option className="option-format" value="Prefer not to say">Prefer not to say</option>
                                <option className="option-format" value="Other">Other</option>
                            </select>
                        </div>
                        <div className="form-spacing">
                            <label className="label-format">Would you recommend freeCodeCamp to a friend?</label>
                            <label for="Definitely" className="label-format"><input id="Recommendation" type="radio" name="Friend Recommendation" className="input-format" value="Definitely" />Definitely</label>
                            <label for="Maybe" className="label-format"><input id="Recommendation" type="radio" name="Friend Recommendation" className="input-format" value="Maybe" />Maybe</label>
                            <label for="Not sure" className="label-format"><input id="Recommendation" type="radio" name="Friend Recommendation" className="input-format" value="Not sure" />Not sure</label>
                        </div>
                        <div className="form-spacing">
                            <label for="favorite feature" id="feature-label" className="label-format">What is your favorite feature of freeCodeCamp?</label>
                            <select id="dropdown-feature" name="favorite feature" className="textbox-look select-format" required>
                                <option className="option-format" value="" disabled selected>Select an option</option>
                                <option className="option-format" value="Challenges">Challenges</option>
                                <option className="option-format" value="Projects">Projects</option>
                                <option className="option-format" value="Community">Community</option>
                                <option className="option-format" value="Open Source">Open Source</option>
                            </select>
                        </div>
                        <div className="form-spacing">
                            <label className="label-format">What would you like to see improved? (Check all that apply)</label>
                            <label for="Improvements-list" className="label-format"><input type="checkbox" name="Improvements" className="input-format" value="Front-end Projects" />Front-end Projects</label>
                            <label for="Improvements-list" className="label-format"><input type="checkbox" name="Improvements" className="input-format" value="Back-end Projects" />Back-end Projects</label>
                            <label for="Improvements-list" className="label-format"><input type="checkbox" name="Improvements" className="input-format" value="Data Visualization" />Data Visualization</label>
                            <label for="Improvements-list" className="label-format"><input type="checkbox" name="Improvements" className="input-format" value="Challenges" for="Improvements-list" />Challenges</label>
                            <label for="Improvements-list" className="label-format"><input type="checkbox" name="Improvements" className="input-format" value="Open Source Community" />Open Source Community</label>
                            <label for="Improvements-list" className="label-format"><input type="checkbox" name="Improvements" className="input-format" value="Gitter help Rooms" />Gitter help Rooms</label>
                            <label for="Improvements-list" className="label-format"><input type="checkbox" name="Improvements" className="input-format" value="Videos" />Videos</label>
                            <label for="Improvements-list" className="label-format"><input type="checkbox" name="Improvements" className="input-format" value="City Meetups" />City Meetups</label>
                            <label for="Improvements-list" className="label-format"><input type="checkbox" name="Improvements" className="input-format" value="Wiki" />Wiki</label>
                            <label for="Improvements-list" className="label-format"><input type="checkbox" name="Improvements" className="input-format" value="Forum" />Forum</label>
                            <label for="Improvements-list" className="label-format"><input type="checkbox" name="Improvements" className="input-format" value="Additional Courses" />Additional Courses</label>
                        </div>
                        <div className="form-spacing">
                            <label className="label-format">Any comments or suggestions?</label>
                            <textarea id="comments" name="comments" className="textbox-look" placeholder="Enter your comment here..."></textarea>
                        </div> 
                        <div className="form-spacing">  
                            <button id="submit" type="submit" className="textbox-look">Submit</button> 
                        </div>
                    </form>
                </div>
            </main>
        );
    }
}

export default SurveyForm;