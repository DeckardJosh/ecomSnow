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
              We offer Snowboards, Skis, and assorted Gear
            </p>
            <div className="buttons_row">
              <button className="btn btn-dark btn-sm">Skis</button>
              <button className="btn btn-dark btn-sm">Snowboards</button>
              <button className="btn btn-dark btn-sm">Apparel</button>
              <button className="btn btn-dark btn-sm">Gear</button>
            </div>
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
              We offer Snowboards, Skis, and assorted Gear
            </p>
            <div className="buttons_row">
              <button className="btn btn-dark btn-sm">Skis</button>
              <button className="btn btn-dark btn-sm">Snowboards</button>
              <button className="btn btn-dark btn-sm">Apparel</button>
              <button className="btn btn-dark btn-sm">Gear</button>
            </div>
          </div>
        </div>
        {/* END WOMENS SECTION */}
        {/* GEAR SECTION */}
        <div className="home_about_row">
          <div className="home_about_column">
            <h2 className="home_about_column__header">Shop Kids</h2>
            <p className="home_about_column__subheader">
              We offer Snowboards, Skis, and assorted Gear
            </p>
            <div className="buttons_row">
              <button className="btn btn-dark btn-sm">Skis</button>
              <button className="btn btn-dark btn-sm">Snowboards</button>
              <button className="btn btn-dark btn-sm">Apparel</button>
              <button className="btn btn-dark btn-sm">Gear</button>
            </div>
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
