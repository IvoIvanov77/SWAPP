import React from 'react';
// import { Query } from 'react-apollo';
// import { gql } from 'apollo-boost';

import LoginPage from './login-page.component';

// const SIGNIN_USER = gql`
//   mutation($email: String!, $password: String!) {
//     signin(email: $email, password: $password) {
//       token
//     }
//   }
// `;

/* <Mutation mutation={SIGNIN_USER} variables={{ email, password }}>

{(signinUser, { loading }) => {

  return (

    <form className="form" onSubmit={event => this.handleSubmit(event, signinUser)}>

      <div className="form_wrap">

        <div className={classNames({ 'error-label': this.state.error != '' })}>
          {this.state.error}
        </div>

        <div className="form_row">

          <div className="form_item">
            <div className="form_input">
              <input type="email" name="email" placeholder="Email" value={email} onChange={this.handleChange.bind(this)} />
              <span className="bottom_border"></span>
            </div>
          </div>

        </div>

        <div className="form_row">

          <div className="form_item">
            <div className="form_input">
              <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange.bind(this)} />
              <span className="bottom_border"></span>
            </div>
          </div>

        </div>

        <div className="formBottomLinks">
          <p>
            {`Don't`} have an account? <NavLink to="/signup">Join now!</NavLink>
          </p>
          <p>
            Forgot your password? <NavLink to="/account-recovery">Reset here</NavLink>
          </p>
        </div>

        <div className="form_buttons">
          <button type="submit" className="btn"
            disabled={loading || this.validateForm()}>
            LogIn</button>
        </div>

      </div>

    </form>

  );
}}

</Mutation> */

const LoginPageContainer = () => (
  // <Query query={}>
  //     {
  //         ({ loading, error, data }) => {
  //             if(loading){
  //                 return
  //             }
  //             console.log(data)
  //             return <EpisodesPage/>
  //         }
  //     }
  // </Query>
  <LoginPage />
);

export default LoginPageContainer;
