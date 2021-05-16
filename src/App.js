import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
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
import NotFound from "./components/common/NotFound";

export default function App() {
  const [user, setuser] = useState(null);
  const [authed, setauthed] = useState(false);

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem('user'));
    setuser(user);
    setauthed(true);

  }, []);

  function PrivateRoute({ component: Component, authed, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
      />
    )
  }

  return (
    <div className="container">
      <Header />
      <Switch>
        {/* Recruiter */}
        <PrivateRoute authed={authed} path="/recruiter/home" component={JobsPosted} />
        <PrivateRoute authed={authed} path="/recruiter/post-job" component={PostNewJob} />
        {/* Candidate */}
        <PrivateRoute authed={authed} path="/candidate/home" component={OpenJobs} />
        <PrivateRoute authed={authed} path="/candidate/applied" component={AppliedJobs} />
        {/* Auth */}
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/login" component={LoginForm} />

        <Route path="/" component={() => {
          if (user?.userRole === 1) {
            return <OpenJobs />;
          } else if (user?.userRole === 0) {
            return <JobsPosted />;
          } else return <HomePage />;
        }} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}
