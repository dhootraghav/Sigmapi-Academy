// src/pages/PrivacyPolicy.jsx

export default function PrivacyPolicy() {
  return (
    <main className="bg-gray-100 px-4 py-12"> {/* light gray site background */}
      <div className="privacy-page max-w-4xl mx-auto">
        <h1>Privacy Policy for SigmaPi Academy</h1>

        <p>
          At <strong>www.sigmapi-academy.com</strong>, accessible from
          www.sigmapi-academy.com, one of our main priorities is the privacy of our
          visitors. This Privacy Policy document contains types of information that is
          collected and recorded by www.sigmapi-academy.com and how we use it.
        </p>

        <p>
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us.
        </p>

        <p>
          This Privacy Policy applies only to our online activities and is valid for
          visitors to our website with regards to the information that they shared
          and/or collect in www.sigmapi-academy.com. This policy is not applicable to
          any information collected offline or via channels other than this website.
        </p>

        <h2>Consent</h2>
        <p>
          By using our website, you hereby consent to our Privacy Policy and agree to its terms.
        </p>

        <h2>Information we collect</h2>
        <p>
          The personal information that you are asked to provide, and the reasons why
          you are asked to provide it, will be made clear to you at the point we ask
          you to provide your personal information.
        </p>
        <p>
          If you contact us directly, we may receive additional information about you
          such as your name, email address, phone number, the contents of the message
          and/or attachments you may send us, and any other information you may choose
          to provide.
        </p>
        <p>
          When you register for an Account, we may ask for your contact information,
          including items such as name, company name, address, email address, and
          telephone number.
        </p>

        <h2>How we use your information</h2>
        <ul>
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>Communicate with you, either directly or through one of our partners</li>
          <li>Send you emails</li>
          <li>Find and prevent fraud</li>
        </ul>

        <h2>Log Files</h2>
        <p>
          www.sigmapi-academy.com follows a standard procedure of using log files.
          These files log visitors when they visit websites. All hosting companies do
          this and it is a part of hosting services' analytics. The information
          collected by log files include internet protocol (IP) addresses, browser
          type, Internet Service Provider (ISP), date and time stamp, referring/exit
          pages, and possibly the number of clicks. These are not linked to any
          information that is personally identifiable. The purpose of the information
          is for analyzing trends, administering the site, tracking users' movement on
          the website, and gathering demographic information.
        </p>

        <h2>Cookies and Web Beacons</h2>
        <p>
          Like any other website, www.sigmapi-academy.com uses "cookies". These cookies
          are used to store information including visitors' preferences, and the pages
          on the website that the visitor accessed or visited. The information is used
          to optimize the users' experience by customizing our web page content based
          on visitors' browser type and/or other information.
        </p>
        <p>
          For more general information on cookies, please read{" "}
          <a
            href="https://www.privacypolicyonline.com/what-are-cookies/"
            target="_blank"
            rel="noreferrer"
          >
            What Are Cookies
          </a>{" "}
          from Cookie Consent.
        </p>

        <p className="last-updated">
          Last updated: {new Date().getFullYear()}
        </p>
      </div>
    </main>
  );
}
