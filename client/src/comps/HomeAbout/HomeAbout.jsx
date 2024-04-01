import React from "react";
import "./HomeAbout.css";
import mensSnowModel from "../../images/mens-snow-model.jpg";
import womanSnowModel from "../../images/woman-snow-model.jpg";
import kidsSnowModel from "../../images/kids-snow-model.jpg";

export default function HomeAbout() {
  return (
    <>
      <div className="home_about_wrapper">
        {/* MENS SECTION */}
        <div className="home_about_row">
          <div className="home_about_column">
            <h2 className="home_about_column__header">Shop Mens</h2>
            <p className="home_about_column__subheader">
              We have plenty of Mens gear. Anything from Forum snowboards to ThirtyTwo Apparel. Take a look at our Products page and check out what we are reccomending! You won't be disappointed.
            </p>
          </div>
          <div className="home_blob_one home_about_column_blob">
            <img
              src={mensSnowModel}
              alt="Mens Snowboard Model"
              className="home_about_snow_model"
            />
          </div>
        </div>
        {/* END MENS SECTION */}
        {/* WOMENS SECTION */}
        <div className="home_about_row">
          <div className="home_blob_two home_about_column_blob">
            <img
              src={womanSnowModel}
              alt="Mens Snowboard Model"
              className="home_about_snow_model"
            />
          </div>
          <div className="home_about_column">
            <h2 className="home_about_column__header">Shop Womens</h2>
            <p className="home_about_column__subheader">
              Ladies! You are going to love our picks here. We have gear from Burton, K2, and ThirtyTwo to make you feel right at home on the mountain. All sizes shown are for these products are in Womens.
            </p>
          </div>
        </div>
        {/* END WOMENS SECTION */}
        {/* GEAR SECTION */}
        <div className="home_about_row">
          <div className="home_about_column">
            <h2 className="home_about_column__header">Shop Kids</h2>
            <p className="home_about_column__subheader">
              Thinking of picking up something for the kids? Check out our recommendations! There are few kids brands out there, but Burton, Oakley, and Salomon have some great choices.
            </p>
          </div>
          <div className="home_blob_three home_about_column_blob">
            <img
              src={kidsSnowModel}
              alt="Mens Snowboard Model"
              className="home_about_snow_model"
            />
          </div>
        </div>
        {/* END GEAR SECTION */}
      </div>
    </>
  );
}
