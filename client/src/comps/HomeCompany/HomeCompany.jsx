import React from 'react';
import "./HomeCompany.css";
import companyPhoto from "../../images/company_photo.jpg";

export default function HomeCompany() {
  return (
    <>
        <div className='company_wrapper'>
            <div className="company_content">
                <div className="company_row">
                    <div className="company_column">
                        <h3 className='company_content_header'>About Us:</h3>
                        <p className='copany_content_bio'>We shred just like you, and figured we would share some of our battle tested gear so you can buy without worrying that it won't fit your standards.</p>
                        <p className='copany_content_bio'>Our company is based out of Spokane Washington. We are a team of 4 employees that have dedicated our lives to making snowboarding/skiing more than just a hobby. There is nothing like getting on the mountain, feeling the fresh air, and endless powder.</p>
                        <p className='copany_content_bio'>We hope to see you knee deep enjoying some of our selections!</p>
                    </div>
                    <div className="company_column">
                        <img src={companyPhoto} alt="company ski trip" />
                    </div>
                </div>
            </div>


            {/* Wave Divider */}
            <div class="wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
    </>
  );
};
