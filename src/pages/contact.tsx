import React from "react";
import ContactCard from "../components/ContactCard";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import contacts from '../data/contact.json'

export default () => {
  return (
    <>
      <Navbar />
      <div className="bg-primaryBg space-y-6">
        <div className="bg-primaryBg font-sans text-alternateText pt-5 text-center font-semibold">
            HAVE ANY QUERY?
        </div>
        <Header title="Contact Me" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text." backgroundColor="primaryBg"/>
        <div className="w-full space-y-4 md:grid md:grid-flow-row md:grid-cols-3 md:space-y-0 md:gap-3">
            {contacts.map((contact, i) => (
                <ContactCard title={contact.title} description={contact.description} backgroundColor="secondaryBg" key={i}/>
            ))}
        </div>

        {/* form TODO */}
        {/* <div className="flex-initial flex-wrap justify-center space-x-8 text-center space-y-8">
            <input type="text" placeholder="Your Name" className="w-1/3 bg-secondaryBg rounded text-primaryText focus:ring-primaryText focus:ring-6 focus:ring-offset-0 pl-4 font-semibold text-xl" style={{height: "4.1rem" }}/>
            <input type="text" placeholder="Your Email" className="w-1/3 bg-secondaryBg rounded text-primaryText focus:ring-primaryText focus:ring-6 focus:ring-offset-0 pl-4 font-semibold text-xl" style={{height: "4.1rem" }}/>
        </div>
        <div className="text-center">
            <input type="text" placeholder="Your Subject" className="w-3/4 bg-secondaryBg rounded text-primaryText focus:ring-primaryText focus:ring-6 focus:ring-offset-0 pl-4 font-semibold text-xl" style={{height: "4.1rem" }}/>
        </div> */}


      </div>
    </>
  );
};
