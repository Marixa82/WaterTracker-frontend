export const FormUserData =() =>{
    return(
        <>
            <div>
            <h3>Your gender identity</h3>
          <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="gender" id="genderGirl" />
          <label className="form-check-label" htmlFor="genderGirl">Girl</label>
    </div>
    <div className="form-check form-check-inline">
    <input className="form-check-input" type="radio" name="gender" id="genderMan" defaultChecked />
    <label className="form-check-label" htmlFor="genderMan">Man</label>
    </div>
          </div>
         
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Your name</label>
              <input type="text" className="form-control" id="username" placeholder="Username" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>
          </form>
         
        </>
    )
}