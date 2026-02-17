import Navbar from '../components/Navbar'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md border border-[#0086c3]/10 p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the Ganimi app
              and related services (&quot;Service&quot;). By creating an account or using Ganimi,
              you agree to these Terms and to our Privacy Policy.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Eligibility &amp; accounts</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Ganimi is intended for use by students, their families, and vendors providing
                  services through the platform.
                </li>
                <li>
                  You must be old enough to enter into a binding agreement under your local law, or
                  be using the Service with the consent and supervision of a parent or guardian.
                </li>
                <li>
                  You agree to provide accurate information and to keep your login details secure.
                  You are responsible for all activity under your account.
                </li>
                <li>
                  We may suspend or close your account if we suspect misuse, fraud, or a violation
                  of these Terms or applicable laws.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Use of the Service</h2>
              <p className="mb-2">
                Ganimi helps connect students and families with vendors and manage courses, batches,
                bookings, and attendance.
              </p>
              <p className="mb-2">You agree that you will not:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Use Ganimi for any unlawful purpose.</li>
                <li>Harass, abuse, or harm other users or vendors.</li>
                <li>Attempt to hack, disrupt, or reverse-engineer the Service.</li>
                <li>
                  Upload or share content that is illegal, offensive, or infringes the rights of
                  others.
                </li>
              </ul>
              <p className="mt-2">
                Vendors are responsible for the services they provide, including quality, safety,
                and compliance with local laws. Ganimi primarily acts as an intermediary platform.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Bookings, payments &amp; refunds
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Payments made through Ganimi are processed by Razorpay. We do not store your full
                  card or UPI details.
                </li>
                <li>
                  A booking is usually confirmed after successful payment, unless the app or vendor
                  specifies otherwise.
                </li>
                <li>
                  Ganimi is not a bank or wallet; we only facilitate payments between students and
                  vendors.
                </li>
              </ul>
              <p className="mt-2 mb-2 font-semibold">Refunds and cancellations</p>
              <p className="mb-2">
                Refund and cancellation rules may be set by vendors and/or shown in the app when you
                book. Where refunds are allowed, they may be subject to conditions (such as time
                limits or non-refundable fees).
              </p>
              <p>
                To request a refund or cancellation, follow the process described in the app or
                contact{' '}
                <a
                  href="mailto:support@ganimi.app"
                  className="text-[#0086c3] hover:underline"
                >
                  support@ganimi.app
                </a>
                . We may help coordinate your request with the vendor but are not obligated to
                provide a refund where the applicable policy does not allow it.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Vendor responsibilities</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Provide accurate information about your services, schedule, and pricing.</li>
                <li>Honour bookings and run your services as described, where reasonably possible.</li>
                <li>Comply with all applicable laws, regulations, and tax obligations.</li>
                <li>
                  Ensure you have any required licences, permissions, and insurance for your
                  activities.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Student responsibilities</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Provide accurate information about yourself and your contact details.</li>
                <li>Respect class rules, vendors, and other participants.</li>
                <li>Do not share your login details with others without permission.</li>
                <li>
                  Do not record or share course materials or sessions without appropriate consent,
                  where required.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Content, intellectual property &amp; third-party services
              </h2>
              <p className="mb-2">
                Ganimi&apos;s brand, logo, and app design are owned or licensed by us. You receive a
                limited, non-transferable licence to use the app for personal use (or, for vendors,
                to provide services through Ganimi as permitted).
              </p>
              <p className="mb-2">
                You may not copy, sell, or redistribute the app or its content without our
                permission, except where the law allows it.
              </p>
              <p>
                Ganimi may integrate with third-party tools (such as payment gateways or
                communication services). Your use of those features may also be subject to the terms
                and privacy policies of those third parties.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Disclaimers &amp; liability</h2>
              <p className="mb-2">
                The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis,
                without warranties of any kind, to the maximum extent permitted by law.
              </p>
              <p className="mb-2">
                We do not guarantee that Ganimi will always be available or error-free, or that any
                particular vendor&apos;s services will meet your expectations.
              </p>
              <p>
                To the maximum extent allowed by law, our total liability for any claim related to
                your use of Ganimi is limited to the amount you have paid through Ganimi in the{' '}
                {''}
                last 6 months before the claim arose, and we are not liable for indirect or
                consequential damages (such as loss of profits or data).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Termination</h2>
              <p className="mb-2">
                We may suspend or terminate your access to Ganimi if you violate these Terms, we
                suspect fraud or misuse, or we are required to do so by law.
              </p>
              <p>
                You may stop using Ganimi at any time and can request account deletion as described
                in our Privacy Policy. Some provisions (such as payment obligations and liability
                limits) will continue to apply after termination.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Governing law, disputes &amp; changes
              </h2>
              <p className="mb-2">
                These Terms are governed by the laws that apply in your main country of operation
                for Ganimi, unless another law is required by local rules. Any disputes should
                ideally be raised with us first at{' '}
                <a
                  href="mailto:support@ganimi.app"
                  className="text-[#0086c3] hover:underline"
                >
                  support@ganimi.app
                </a>
                , so we can try to resolve them informally.
              </p>
              <p>
                We may update these Terms from time to time. When we do, we will update the &quot;Last
                updated&quot; date above. If you continue to use Ganimi after changes take effect,
                you agree to the updated Terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

