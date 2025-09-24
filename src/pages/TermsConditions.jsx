// src/pages/TermsConditions.jsx

export default function TermsConditions() {
  return (
    <main className="bg-gray-100 px-4 py-12">
      <div className="privacy-page max-w-4xl mx-auto">
        <h1>Terms and Conditions</h1>

        <p><strong>Effective Date:</strong> September 24, 2025</p>
        <p><strong>Last Updated:</strong> September 24, 2025</p>

        <p>
          Welcome to <strong>SigmaPi Academy!</strong> These Terms and Conditions
          ("Terms") govern your access to and use of{" "}
          <a href="https://www.sigmapi-academy.com" target="_blank" rel="noreferrer">
            https://www.sigmapi-academy.com
          </a>{" "}
          (the "Website") and the services provided by SigmaPi Academy ("we," "our," or "us").
        </p>

        <p>
          By accessing or using our Website or services, you agree to be bound by
          these Terms. If you do not agree with any part of these Terms, please
          discontinue using the Website.
        </p>

        <h2>1. Definitions</h2>
        <ul>
          <li>
            <strong>"User," "You," or "Your"</strong> refers to anyone accessing or
            using the Website, including students, visitors, and registered members.
          </li>
          <li>
            <strong>"Services"</strong> means all educational resources, courses,
            content, tools, and features provided by SigmaPi Academy.
          </li>
          <li>
            <strong>"Content"</strong> includes text, graphics, videos, documents,
            quizzes, and other learning materials.
          </li>
          <li>
            <strong>"Account"</strong> means a registered profile created to access
            certain features of the Website.
          </li>
        </ul>

        <h2>2. Eligibility</h2>
        <p>To use our services, you must:</p>
        <ul>
          <li>Be at least 13 years of age.</li>
          <li>Have the legal capacity to enter into a binding agreement under applicable laws.</li>
          <li>Provide accurate and complete information when registering for an account.</li>
        </ul>
        <p>If you are under 18, you must use the Website under the supervision of a parent or guardian.</p>

        <h2>3. User Account</h2>
        <ul>
          <li>
            <strong>Registration:</strong> To access certain features, you must create
            an account by providing your name, email address, and password.
          </li>
          <li>
            <strong>Account Responsibility:</strong> You are solely responsible for
            maintaining the confidentiality of your account and password and agree to
            notify us immediately of any unauthorized use.
          </li>
          <li>
            <strong>Accuracy of Information:</strong> You agree to provide truthful
            information and update it promptly if there are any changes.
          </li>
        </ul>

        <h2>4. Services and Usage</h2>
        <p>
          Our Website provides online courses, study materials, and other educational
          content for personal, non-commercial use.
        </p>
        <p>You may not:</p>
        <ul>
          <li>Resell, redistribute, or sublicense our content.</li>
          <li>Use our platform for illegal activities or unauthorized commercial purposes.</li>
          <li>Disrupt or attempt to hack the Website’s systems or security.</li>
        </ul>
        <p>
          SigmaPi Academy reserves the right to modify, suspend, or discontinue any
          part of the services without prior notice.
        </p>

        <h2>5. Payments and Refund Policy</h2>
        <ul>
          <li>
            <strong>Payments:</strong> Courses and services may be paid through secure
            third-party gateways. You agree to provide valid payment information.
          </li>
          <li>
            <strong>Refunds:</strong> Refunds may be provided in accordance with our
            Refund Policy. Once a course is accessed or downloaded, refunds may not be
            available unless required by law.
          </li>
        </ul>

        <h2>6. Intellectual Property Rights</h2>
        <p>
          All content on the Website is the intellectual property of SigmaPi Academy
          or its content providers. You are granted a limited, non-transferable,
          non-exclusive license to use the content solely for personal learning.
          Unauthorized reproduction, distribution, or derivative works are prohibited.
        </p>

        <h2>7. User Content</h2>
        <p>
          By submitting comments, reviews, or other content, you grant SigmaPi Academy
          a worldwide, royalty-free, non-exclusive license to use and distribute it.
        </p>

        <h2>8. Privacy</h2>
        <p>
          Your use of our Website is also governed by our{" "}
          <a href="/privacy-policy">Privacy Policy</a>.
        </p>

        <h2>9. Third-Party Services</h2>
        <p>
          SigmaPi Academy may integrate with third-party services (e.g., payment
          processors, analytics tools). We are not responsible for their content,
          security, or practices. Users should review their terms and privacy
          policies.
        </p>

        <h2>10. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, SigmaPi Academy shall not be liable
          for indirect, incidental, or consequential damages including data loss,
          service interruptions, or financial loss. Our total liability shall not
          exceed the amount paid by you for the services in question.
        </p>

        <h2>11. Disclaimer of Warranties</h2>
        <p>
          All services and content are provided on an "as-is" and "as-available" basis
          without warranties of any kind.
        </p>

        <h2>12. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your account if you violate
          these Terms, remove any unlawful content, or discontinue services.
        </p>

        <h2>13. Governing Law and Jurisdiction</h2>
        <p>
          These Terms are governed by the laws of India. Any disputes shall be subject
          to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka.
        </p>

        <h2>14. Amendments to Terms</h2>
        <p>
          SigmaPi Academy may update these Terms periodically. Updates will be posted
          on this page with a revised "Last Updated" date. Continued use of the Website
          after updates constitutes acceptance of the new Terms.
        </p>

        <h2>15. Contact Information</h2>
        <p>
          SigmaPi Academy <br />
          📧 Email: <a href="mailto:support@sigmapi-academy.com">support@sigmapi-academy.com</a> <br />
          🌐 Website:{" "}
          <a href="https://www.sigmapi-academy.com" target="_blank" rel="noreferrer">
            https://www.sigmapi-academy.com
          </a>
        </p>

        <p className="last-updated">
          Last updated: {new Date().getFullYear()}
        </p>
      </div>
    </main>
  );
}
