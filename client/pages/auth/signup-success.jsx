import Link from 'next/link';

const SignupSuccess = () => {
  return (
    <div className="app-height app-width signup-success d-flex align-items-center justify-content-center">
      <div className="max-600">
        <div className="intro-text success">
          <h6>Welcome to</h6>
          <img src="/images/logo@3x.png" className="signup-success-img" />
          <p className="fw-300">
            Please click on one ticket below <br /> to select your role
            preference
          </p>
        </div>
        <div className="row">
          <div className="col-6 event-host">
            <Link href="/host-profile">
            <img src="/images/event-host@3x.png" className="event-host" style={{cursor: 'pointer'}} />
            </Link>
            <div style={{cursor: 'pointer'}}>
              <p className="fw-300 f-18">Become an</p>
              <h3>Event Host</h3>
            </div>
          </div>
          <div className="col-6 attendee">
            <Link href='/auth/attendee'>
            <img src="/images/attendee@3x.png" className="attendee" style={{cursor: 'pointer'}}/>
            </Link>
            <div style={{cursor: 'pointer'}}>
              <p className="fw-300 f-18">Register as an</p>
              <h3>Attendee</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupSuccess;
