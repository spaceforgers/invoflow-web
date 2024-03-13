import { Container } from '@/components/Container'

export default function PrivacyPolicy() {
  return (
    <>
      <section
      id="privacy"
      aria-labelledby="privacy-title"
      className="border-t border-gray-200 dark:border-gray-800 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900 dark:text-gray-100"
          >
            Privacy Policy
          </h2>
          <p className='text-gray-900 dark:text-gray-100'>Last update: 13/03/2024</p>

          <h3 className="pt-16 text-xl font-medium tracking-tight text-gray-500">
            Overview
          </h3>
          <p className="mt-1 text-gray-400 dark:text-gray-600">
            Space built Invoflow as a free app with paid subscriptions. This SERVICE is provided by Javier Galera at no cost, but includes a "Invoflow+" subscription that is available for purchase, and is intended for use as is. This page is used to inform visitors regarding my policies with collection, use and disclosure of Personal Information if anyone decided to use my service.
          </p>

          <h3 className="mt-6 text-xl font-medium tracking-tight text-gray-500">
            Log Data
          </h3>
          <p className="mt-1 text-gray-400 dark:text-gray-600">
          Invoflow does not contain any crash/analytics libraries.
          Whenever you use Invoflow, in a case of an error in the app, Apple may send me the crash log. We only receive this Log Data when you have explicitly chosen to enable it in your Device's Privacy settings. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics.
          </p>

          <h3 className="mt-6 text-xl font-medium tracking-tight text-gray-500">
          Cookies
          </h3>
          <p className="mt-1 text-gray-400 dark:text-gray-600">
          Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device’s internal memory.
          Invoflow does not use these “cookies.” However, the app may link to external sites that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
          </p>

          <h3 className="mt-6 text-xl font-medium tracking-tight text-gray-500">
          Links to other sites
          </h3>
          <p className="mt-1 text-gray-400 dark:text-gray-600">
          Invoflow may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, We strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>

          <h3 className="mt-6 text-xl font-medium tracking-tight text-gray-500">
          Children's Privacy
          </h3>
          <p className="mt-1 text-gray-400 dark:text-gray-600">
          Invoflow does not knowingly collect personally identifiable information from anyone. In the case we discover that someone has provided us with personal information, we will immediately delete it. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that I will be able to do necessary actions.
          </p>

          <h3 className="mt-6 text-xl font-medium tracking-tight text-gray-500">
          Changes to this Privacy Policy
          </h3>
          <p className="mt-1 text-gray-400 dark:text-gray-600">
          We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page. You can find the last updated date at the top of this page.
          </p>

          <h3 className="mt-6 text-xl font-medium tracking-tight text-gray-500">
          Contact
          </h3>
          <p className="mt-1 text-gray-400 dark:text-gray-600">
          If you have any questions or suggestions regarding this Privacy Policy, don't hesitate to contact us at contact@spaceforgers.com
          </p>
        </div>
      </Container>
    </section>
    </>
  )
}
