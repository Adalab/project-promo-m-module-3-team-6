import React from "react";

function CardPreview() {
  return (
    <>
        <div className="maincontainer1__profilecard">
          <div className="maincontainer1__text js-headerpreview">
            {/* {props.name || "Nombre apellido"} */}
            <h2 className="maincontainer1__title js-name">Nombre apellido</h2>
            {/* {props.job || "Front-end developer"} */}
            <h3 className="maincontainer1__subtitle js-job">Front-end developer</h3>
          </div>
          <div className="maincontainer1__img js__profile-preview js__border-palette"></div>
          <nav className="maincontainer1__links-container js-footerpreview">
        <a href="" className="maincontainer1__links js-telefono js__link__radius">
            <i className="fas fa-mobile-alt js__link__pallete"></i>
        </a>
        <a href="" className="maincontainer1__links js-mail js__link__radius">
            <i className="far fa-envelope js__link__pallete"></i>
        </a>
        <a href="" className="maincontainer1__links js-linkedin js__link__radius">
            <i className="fab fa-linkedin-in js__link__pallete"></i>
        </a>
        <a href="" className="maincontainer1__links js-git js__link__radius">
            <i className="fab fa-github-alt js__link__pallete"></i>
        </a>
        </nav>
        </div>
    </>
  );
}

export default CardPreview;
