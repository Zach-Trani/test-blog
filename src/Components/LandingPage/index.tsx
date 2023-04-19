/**
 *
 *
 * @return {*} 
 */
const LandingPage = () => {
  return (
    <div className="h-100">
      {/* a href links */}
      <div className="d-flex flex-row">
        <div className="p-2 bd-highlight bg-blue">About</div>
        <div className="p-2 bd-highlight">Work</div>
        <div className="p-2 bd-highlight">Blog</div>
      </div>
      <div className="d-flex justify-content-center w-100 bg-secondary align-items-center pt-5">
        <div className="d-flex flex-column bg-primary h-100 w-75">
          <div className="">Hi, my name is</div>
          <div>
            <div>Zachary Trani.</div>
            <div>I create websites and blog about all things engineering.</div>
          </div>
          <div>
            I'm a software developer specializing in modern front end
            technologies. Recent projects of mine include a markdown demo app
            for developers and this portfolio website.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;