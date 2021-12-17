import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  
  let myStyle = {
    color : props.mode ==='dark'?'white':'#042743',
    backgroundColor: props.mode  ==='dark'?'#042743':'white'
  }
 
  return (
    <>
      <div className="container" style={myStyle}>
        <h2 className="my-3">About Us</h2>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                <strong> Analyz your Text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Here we have an extensive set of web-based text processing tools
                and utilities that will help you automate the recurring tasks of
                editing and formatting huge chunk of text. Using these text
                manipulation tools can save you many hours of typing, and will
                increase your productivity.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
               <strong>Free to use</strong> 
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                You can find a lot of useful text tools here with different
                functions, from sorting data, converting letter case, cleaning
                texts, removing unwanted characters, up to advanced replace
                operations.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                 <strong> Browser compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                This handy word counting tool runs in all popular web browsers
                such as Firefox, Chrome, Opera, Safari, Internet Explorer...
                This tool is suitable to count words and characters in books,
                essays, novels, blogs, Twitter, Facebook statuses...
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
}
