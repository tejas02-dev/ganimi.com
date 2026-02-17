import Navbar from '../components/Navbar'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md border border-[#0086c3]/10 p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              Ganimi (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the Ganimi app and related
              services. This Privacy Policy explains how we collect, use, and protect your
              information when you use Ganimi.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Information we collect</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <span className="font-semibold">Account details:</span> name, email, phone number,
                  role (such as student or vendor), and a password stored in hashed form.
                </li>
                <li>
                  <span className="font-semibold">Profile and vendor information:</span> profile
                  photo, address or pincode, basic details about the services you offer or use, and
                  documents you may upload for verification.
                </li>
                <li>
                  <span className="font-semibold">Usage data:</span> pages or screens you visit in
                  the app, actions you take (like viewing services or making bookings), and basic
                  device information (such as model, operating system, and app version).
                </li>
                <li>
                  <span className="font-semibold">Payment and order data:</span> booking details,
                  amounts, payment status, and payment references from Razorpay. We do not store
                  your full card or UPI details.
                </li>
                <li>
                  <span className="font-semibold">Communications:</span> messages you send to us,
                  including support requests and feedback.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">How we use your information</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>To create and manage your Ganimi account.</li>
                <li>To provide core features like browsing, booking, enrolments, and attendance.</li>
                <li>To show vendors information about their own bookings, students, and revenue.</li>
                <li>To process payments through our payment partners and keep transaction records.</li>
                <li>To communicate with you about bookings, updates, and support.</li>
                <li>To improve, secure, and troubleshoot the app and prevent abuse or fraud.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Sharing your information</h2>
              <p className="mb-2">
                We do not sell your personal data. We may share your information with:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Our service providers (such as hosting, database, analytics, email/SMS) who help
                  us run Ganimi.
                </li>
                <li>Razorpay, to process and verify payments.</li>
                <li>
                  Vendors, so they can manage their own bookings, classes, and students related to
                  you.
                </li>
                <li>
                  Authorities or others when required by law, legal process, or to protect rights
                  and safety.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Retention and security</h2>
              <p className="mb-2">
                We keep your account, booking, and payment information while your account is active
                and for a reasonable period afterwards where needed for legal or accounting reasons.
                If you request deletion, we delete or anonymise your personal data where reasonably
                possible.
              </p>
              <p>
                We use HTTPS to protect data in transit, store passwords in hashed form, and limit
                access to personal data to authorised people and systems. No method of storage or
                transfer is completely secure, but we take reasonable steps to protect your
                information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Your rights and contact</h2>
              <p className="mb-2">
                You can update your profile information in the app (where available) and you can ask
                us to correct or delete your data, subject to legal requirements.
              </p>
              <p>
                To contact us about privacy or your data, email{' '}
                <a
                  href="mailto:support@ganimi.app"
                  className="text-[#0086c3] hover:underline"
                >
                  support@ganimi.app
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Children</h2>
              <p>
                Ganimi is intended for use by students together with their parents or guardians. If
                you believe we have collected personal information from a child without appropriate
                consent, please contact us so we can review and take appropriate action.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Changes to this policy</h2>
              <p>
                We may update this Privacy Policy from time to time. When we do, we will update the
                &quot;Last updated&quot; date above. If you continue to use Ganimi after changes
                take effect, you agree to the updated policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

