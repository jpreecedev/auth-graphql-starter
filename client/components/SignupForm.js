import React, { Component } from "react";
import { graphql } from "react-apollo";

import AuthForm from "./AuthForm";

import CurrentUser from "../queries/CurrentUser";
import Signup from "../mutations/Signup";

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: []
    };
  }

  onSubmit({ email, password }) {
    this.props
      .mutate({
        variables: {
          email,
          password
        },
        refetchQueries: [
          {
            query: CurrentUser
          }
        ]
      })
      .catch(res => {
        const errors = res.graphQLErrors.map(error => error.message);
        this.setState({
          errors
        });
      });
  }

  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <AuthForm
          errors={this.state.errors}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default graphql(Signup)(SignupForm);
