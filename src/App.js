import React from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.scss';

// Common
import Header from "./components/common/Header";

//Auth
import LoginForm from "./components/entryflow/LoginForm";
import SignupForm from "./components/entryflow/SignupForm";
import ForgotPassword from "./components/entryflow/ForgotPassword";
import ResetPassword from "./components/entryflow/ResetPassword";

//Candidate
import { AppliedJobs } from "./components/candidate/AppliedJobs";
import { OpenJobs } from "./components/candidate/OpenJobs";

//Recruiter
import { JobsPosted } from "./components/recruiter/JobsPosted";
import PostNewJob from "./components/recruiter/PostNewJob";
import { HomePage } from "./components/common/HomePage";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/topics" component={Topics} />
        
        {/* Candidate */}
        <Route path="/candidate/home" component={OpenJobs} />
        <Route path="/candidate/applied" component={AppliedJobs} />
        {/* Recruiter */}
        <Route path="/recruiter/home" component={JobsPosted} />
        <Route path="/recruiter/post-job" component={PostNewJob} />

        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/login" component={LoginForm} />
        
        <Route path="/" component={HomePage} />
        <Route path="*" component={LoginForm} />
      </Switch>
    </div>
  );
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}