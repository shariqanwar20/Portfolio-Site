import React from "react";
import ContactCard from "./ContactCard";
import Header from "../Services/Header";
// import contacts from "../../data/contact.json";
import { LocationMarkerIcon, PhoneIcon, MailIcon } from "@heroicons/react/solid";
import { contact } from '../../../data.json'

export default () => {
  return (
    <div id="contact">
      <div className="bg-primaryBg space-y-6 py-5">
        <div className="bg-primaryBg font-sans text-alternateText pt-5 text-center font-semibold">
          HAVE ANY QUERY?
        </div>
        <Header
          title={contact.header}
          description={contact.subHeader}
          backgroundColor="primaryBg"
        />
        <div
          className="space-y-4 md:grid md:grid-flow-row md:grid-cols-3 md:space-y-0 md:gap-x-2 mx-auto"
          style={{
            width: "95%",
          }}
        >
          {contact.details.map((contact, i) => (
            <ContactCard
              title={contact.title}
              description={contact.description}
              backgroundColor="secondaryBg"
              icon={contact.icon}
              key={i}
            />
          ))}
        </div>

        <form
          className="w-full lg:w-4/5 px-5 mx-auto space-y-6 py-12"
          method="POST"
          action={contact.endPoint}
        >
          <div className="lg:grid lg:grid-cols-2 lg:gap-2 justify-center text-center">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full my-6 lg:my-0 bg-secondaryBg rounded text-primaryText focus:ring-primaryText focus:ring-6 focus:ring-offset-0 pl-4 font-semibold text-xl"
              style={{ height: "4.1rem" }}
            />
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              className="w-full my-6 lg:my-0 bg-secondaryBg rounded text-primaryText focus:ring-primaryText focus:ring-6 focus:ring-offset-0 pl-4 font-semibold text-xl"
              style={{ height: "4.1rem" }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Your Subject"
              name="subject"
              className="w-full bg-secondaryBg rounded text-primaryText focus:ring-primaryText focus:ring-6 focus:ring-offset-0 pl-4 font-semibold text-xl"
              style={{ height: "4.1rem" }}
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              name="message"
              className="w-full bg-secondaryBg rounded text-primaryText focus:ring-primaryText focus:ring-6 focus:ring-offset-0 pl-4 font-semibold text-xl"
              style={{ height: "8.1rem" }}
            />
          </div>
          <button type="submit" className="py-4 px-4 text-lg md:text-xl md:px-10 text-center font-semibold rounded-full shadow-md text-primaryText border-2 border-alternateText hover:bg-alternateText">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
