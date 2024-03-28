import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How do I get support if I encounter any issues with the app?',
      answer:
        'We’re here to help! If you experience any difficulties or have questions about the app, please feel free to reach out to us. You can contact us through the app’s help section inside "Account", or send an email to our support address: support@spaceforgers.com. We will be more than happy to assist you.',
    },
    {
      question: 'Is there any limit to the total number of invoices, products or customers that I can create?',
      answer:
        'Nope. Invoflow does not limit the number of invoices, products, categories or customers. You can create as much as you want!',
    },
    {
      question: 'On which platforms can I use Invoflow?',
      answer:
        'Invoflow is available for iOS, iPadOS, watchOS and visionOS. Later this year a macOS version will be released. We have no plans to support Windows, Android or Web for the moment.',
    },
  ],
  [
    {
      question: 'How do I create an invoice using Invoflow?',
      answer:
        'To create an invoice, simply open the app and tap on the "+" button on the top! From there, you can fill in the necessary details such as customer information, products/services provided, and payment terms. Once complete, you can save or share the invoice with your client.',
    },
    {
      question: 'Can I delete permanentely any invoice, customer or product?',
      answer:
        'Of course! We offer a way to permanently delete any customer, invoice or product. To delete anything forever, it must first be archived, it is a security measure that we have added so that you do not accidentally delete something important. Once it is archived, you will have the option to delete it.',
    },
    {
      question: 'Is my data secure with Invoflow?',
      answer:
        'At Space we take privacy and security very seriously. It is not a joke. That’s why your data is synchronized at all times between all your Apple devices through iCloud, the only way to access it is from your iCloud account. And yes, everything is encrypted.',
    },
  ],
  [
    /*
    {
      question: 'What does Invoflow+ offer?',
      answer:
        'Invoflow+ is a monthly or annual subscription, which gives you access to a greater number of graphs so you can see your income in more detail. It also offers you the option to export your invoices in both PDF and CSV. Future updates will add more features, which will be added to Invoflow+.',
    },
    {
      question: 'Does this mean that all new features will only be part of Invoflow+?',
      answer:
        'No. We’re always thinking about the best subscription-free experience (that’s why we’ll never include ads or abusive pricing), so most new features will always be free. Invoflow+ is a way to support us to continue developing Invoflow.',
    },
    */
    {
      question: 'How can I make a feature request?',
      answer:
        'You have no idea how important it is for us that you give us any feedback. If you have any (or if you just want to talk to us!) please contact us at contact@spaceforgers.com, it is a real honor!',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 dark:border-gray-800 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900 dark:text-gray-100"
          >
            Support
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Below you will find some frequently asked questions. If you have anything else you want to ask,{' '}
            <a
              href="mailto:support@spaceforgers.com"
              className="text-gray-900 dark:text-gray-100 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
