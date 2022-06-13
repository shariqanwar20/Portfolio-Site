import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import logoOnSmallScreen from '../../images/workflow-mark-indigo-500.svg'
import logoOnLargeScreen from '../../images/workflow-logo-indigo-500-mark-white-text.svg'
const navigation = [
  { name: "Home", href: "home", current: false },
  { name: "Certifications", href: "certifications", current: false },
  // { name: "Services", href: "services", current: false },
  { name: "Experience", href: "services", current: false },
  { name: "About", href: "about", current: false },
  // { name: "Skills", href: "skills", current: false },
  { name: "Projects", href: "projects", current: false },
  // { name: "Experience", href: "experience", current: false },
  { name: "Contact", href: "contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default () => {
  // const [activeLink, setActiveLink] = useState(navigation[0].href);

  return (
    <Disclosure as="nav" className="bg-primaryBg fixed w-full z-10">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  style={{ color: "white" }}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primaryBg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto text-primaryBg"
                    src={logoOnSmallScreen}
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src={logoOnLargeScreen}
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <AnchorLink
                        key={item.name}
                        to={`/#${item.href}`}
                        className={
                          // item.href === activeLink
                            // ? `bg-alternateText text-primaryText block px-3 py-2 rounded-md text-base font-medium`
                            "text-secondaryText hover:text-alternateText block px-3 py-2 rounded-md text-base font-medium"
                        }
                        aria-current={item.current ? "page" : undefined}
                        stripHash
                        // onAnchorLinkClick={() => {
                        //   setActiveLink(item.href);
                        // }}
                      >
                        {item.name}
                      </AnchorLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <AnchorLink
                  key={item.name}
                  to={`/#${item.href}`}
                  className={
                    // item.href === activeLink
                      // ? `bg-alternateText text-primaryText block px-3 py-2 rounded-md text-base font-medium`
                      "text-secondaryText hover:text-alternateText block px-3 py-2 rounded-md text-base font-medium"
                  }
                  aria-current={item.current ? "page" : undefined}
                  stripHash
                  // onAnchorLinkClick={() => {
                  //   setActiveLink(item.href);
                  // }}
                >
                  {item.name}
                </AnchorLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
