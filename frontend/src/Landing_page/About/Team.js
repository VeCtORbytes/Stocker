import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5  ">
        <h2 className=" text-center mt-5 border-top">People</h2>
      </div>

      <div
        className="row  p-5 mt-5 text-muted "
        style={{ lineHeight: "1.8", fontSize: "16px" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="Media/images/SarthakGupta.png"
            style={{ width: "60%", borderRadius: "50%" }}
          />
          <h4 className="mt-4">Sarthak Gupta</h4>
          <h6 className="mt-2">Full Stack Developer</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            Driven by a passion for democratizing access to financial markets, I
            founded this platform to empower investors with a seamless and
            intuitive trading experience. As a third-year B.Tech Computer
            Science student with expertise in the MERN stack, I've leveraged
            cutting-edge technology to deliver real-time market data, secure
            transactions, and robust user authentication. My commitment to
            clean, scalable code ensures a reliable and efficient platform for
            users of all levels.
          </p>
          <p>
            I'm passionate about the ever-evolving landscape of DevOps and cloud
            computing.
          </p>
          <p>
            Connect on 
            <a style={{textDecoration:"none", marginLeft:"5px"}}  href=''>Your Homepage</a> /
            <a style={{textDecoration:"none",marginLeft:"5px"}}   target="_blank" href="https://www.linkedin.com/in/sarthakgupta25">LinkedIn</a> /
            <a style={{textDecoration:"none",marginLeft:"5px"}}   target="_blank" href="https://www.x.com/Sarthak_Gupta25">Twitter</a> 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
