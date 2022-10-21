import { Popover } from "@headlessui/react";
import { BRAND_IMAGE, BRAND_NAME, BRAND_TAGLINE, classNames } from "../lib";
import {
  BuildingOffice2Icon,
  HomeIcon,
  InformationCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, ShieldCheckIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import MetaComponent from "../components/Meta";

const features = [
  {
    name: "In-home services",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: HomeIcon,
  },
  {
    name: "Medical Services",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Nurses / Home Health Aides",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: UsersIcon,
  },
  {
    name: "Easy, safe, and dependable transportation",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ShieldCheckIcon,
  },
];
const metrics = [
  {
    id: 1,
    stat: "Companionship",
    emphasis: "Companies",
    rest: "use laoreet amet lacus nibh integer quis.",
  },
  {
    id: 2,
    stat: "Cognitive Social Interaction",
    emphasis: "Countries around the globe",
    rest: "lacus nibh integer quis.",
  },
  {
    id: 3,
    stat: "Errands and Transportation",
    emphasis: "Customer satisfaction",
    rest: "laoreet amet lacus nibh integer quis.",
  },
  {
    id: 4,
    stat: "Light Housekeeping",
    emphasis: "Issues resolved",
    rest: "lacus nibh integer quis.",
  },
  {
    id: 5,
    stat: "Medication and MealPrep",
    emphasis: "Issues resolved",
    rest: "lacus nibh integer quis.",
  },
];
const footerNavigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Example() {
  return (
    <>
      <MetaComponent title={`${BRAND_NAME} | ${BRAND_TAGLINE}`} />

      <div className="bg-white">
        <header>
          <Popover className="relative bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <Image
                    src={BRAND_IMAGE}
                    alt="logo"
                    width={100}
                    height={100}
                  />
                </a>
              </div>

              <div className=" items-center justify-end md:flex md:flex-1 lg:w-0">
                {/* <a
                href="#"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sign in
              </a> */}
                <Link href="https://api.whatsapp.com/send?phone=13476540706">
                  <a className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-gradient-to-r from-cyan-600 to-cyan-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-cyan-700 hover:to-cyan-700">
                    WhatsApp Us
                  </a>
                </Link>
              </div>
            </div>
          </Popover>
        </header>

        <main>
          {/* Hero section */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                <div className="absolute inset-0">
                  {/* <img
                  className="h-full w-full object-cover"
                  src="https://res.cloudinary.com/deyudesls/image/upload/v1666368091/photo-1584515933487-779824d29309_fs5nco.webp"
                  alt="People working on laptops"
                /> */}

                  <Image
                    src="https://res.cloudinary.com/deyudesls/image/upload/v1666368091/photo-1584515933487-779824d29309_fs5nco.webp"
                    alt="People working on laptops"
                    // height={259}
                    // width={608}
                    layout="fill"
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-800 to-cyan-700 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">
                      Take control of your
                    </span>
                    <span className="block text-cyan-200">
                      health and wellness
                    </span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-lg text-center text-xl text-cyan-200 sm:max-w-3xl">
                    {BRAND_TAGLINE}
                  </p>
                  <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                    <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                      <Link href="tel:13476540706">
                        <a className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-cyan-700 shadow-sm hover:bg-cyan-50 sm:px-8">
                          Call Us
                        </a>
                      </Link>
                      <Link href="https://api.whatsapp.com/send?phone=13476540706">
                        <a className="flex items-center justify-center rounded-md border border-transparent bg-cyan-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8">
                          Text on WhatsApp
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo Cloud */}
          <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-base font-semibold text-gray-500">
                Trusted by all who use our services
              </p>
            </div>
          </div>

          {/* Alternating Feature Sections */}
          <div className="relative overflow-hidden pt-16 pb-32">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
            />
            <div className="relative">
              <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                  <div>
                    <div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-cyan-600 to-cyan-600">
                        <InformationCircleIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div className="mt-6">
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                        What we do
                      </h2>
                      <p className="mt-4 text-lg text-gray-500">
                        Potterstouch LLC offers quality and caring post acute,
                        long-term care and transportation services. Our main
                        focus is providing excellent clinical and transport
                        services, by professionals who are compasionate and
                        emphatic in an environment that contributes to the
                        safety, healing, and wellness of all clients.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0">
                  <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img
                      className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="https://res.cloudinary.com/deyudesls/image/upload/v1666370873/photo-1543333995-a78aea2eee50_ku8op7.webp"
                      alt="Inbox user interface"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gradient Feature Section */}
          <div className="bg-gradient-to-r from-cyan-800 to-cyan-700">
            <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                What we offer
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-cyan-200">
                We offer a wide range of services to meet the needs of our
                clients.
              </p>
              <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name}>
                    <div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div className="mt-6">
                      <h3 className="text-lg font-medium text-white">
                        {feature.name}
                      </h3>
                      {/* <p className="mt-2 text-base text-cyan-200">
                      {feature.description}
                    </p> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div className="relative bg-gray-900">
            <div className="absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full">
              <div className="h-full w-full xl:grid xl:grid-cols-2">
                <div className="h-full xl:relative xl:col-start-2">
                  <img
                    className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                    alt="People working on laptops"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                  />
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
              <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
                <h2 className="text-base font-semibold">
                  <span className="bg-gradient-to-r from-cyan-300 to-cyan-300 bg-clip-text text-transparent">
                    Daily Activities
                  </span>
                </h2>
                <p className="mt-3 text-3xl font-bold tracking-tight text-white">
                  We provide activities for our clients each day.
                </p>

                <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                  {metrics.map((item) => (
                    <p key={item.id}>
                      <span className="block text-2xl font-bold text-white">
                        {item.stat}
                      </span>
                      {/* <span className="mt-1 block text-base text-gray-300">
                        <span className="font-medium text-white">
                          {item.emphasis}
                        </span>{" "}
                        {item.rest}
                      </span> */}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white">
            <div className="mx-auto max-w-4xl py-16 px-4 sm:px-6 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-8">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block">Round-the-clock support?</span>
                <span className="-mb-1 block bg-gradient-to-r from-cyan-600 to-cyan-600 bg-clip-text pb-1 text-transparent">
                  We provide 24/7 support all year round.
                </span>
              </h2>
              {/* <div className="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5">
                <a
                  href="#"
                  className="flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-cyan-600 to-cyan-600 bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm hover:from-cyan-700 hover:to-cyan-700"
                >
                  Learn more
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center rounded-md border border-transparent bg-cyan-50 px-4 py-3 text-base font-medium text-cyan-800 shadow-sm hover:bg-cyan-100"
                >
                  Get started
                </a>
              </div> */}
            </div>
          </div>
        </main>

        <footer className="bg-gray-50" aria-labelledby="footer-heading">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-24">
            {/* <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">
                      Solutions
                    </h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {footerNavigation.solutions.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-base text-gray-500 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-base font-medium text-gray-900">
                      Support
                    </h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {footerNavigation.support.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-base text-gray-500 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">
                      Company
                    </h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {footerNavigation.company.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-base text-gray-500 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-base font-medium text-gray-900">
                      Legal
                    </h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {footerNavigation.legal.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-base text-gray-500 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-12 xl:mt-0">
                <h3 className="text-base font-medium text-gray-900">
                  Subscribe to our newsletter
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  The latest news, articles, and resources, sent to your inbox
                  weekly.
                </p>
                <form className="mt-4 sm:flex sm:max-w-md">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    required
                    className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-cyan-500 focus:placeholder-gray-400 focus:outline-none focus:ring-cyan-500"
                    placeholder="Enter your email"
                  />
                  <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-cyan-600 to-cyan-600 bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm hover:from-cyan-700 hover:to-cyan-700"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div> */}
            <div className="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
              <div className="flex space-x-6 md:order-2">
                {footerNavigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
              <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
                &copy; 2022 {BRAND_NAME}, Inc. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
