// @flow
//eslint-disable-next-line

import * as React from "react";

function Home() {
  return (
    <div className="screen midWrap bg-white">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="homeLoading">
              <div className="heading">
                Loading Secure Checkout
              </div>
              <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;

