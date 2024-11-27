import { Container } from '@/components/Container'

const releaseNotes = [
  {
    version: '2.0',
    date: '27-11-2024',
    notes: [
      {
        category: '🚀 New Features & Enhancements',
        color: 'bg-blue-500 bg-opacity-40',
        items: [
          { title: 'Customizable Tiles', description: 'Personalize your home screen and summary tab with configurable widgets for quick access.' },
          { title: 'Redesigned Apple Watch App', description: 'A completely new experience on your wrist with better access to invoices and client data.' },
          { title: 'Invoice Due Dates', description: 'Add due dates to invoices and receive notifications when they approach.' },
          { title: 'Enhanced Filtering Options', description: 'Find invoices, products, and clients faster with improved filters.' },
          { title: 'Redesigned iPad Tab', description: 'A new customizable tab optimized for iPad’s large screen for better navigation.' },
          { title: 'Dark and Tinted App Icon', description: 'Customize your app with a sleek dark icon and tinted variations.' }
        ]
      },
      {
        category: '📈 Productivity Boosters',
        color: 'bg-green-500 bg-opacity-40',
        items: [
          { title: 'Simplified Onboarding', description: 'Getting started is now easier and faster with our new onboarding flow.' },
          { title: 'UX and UI Improvements', description: 'Major updates across the app for a smoother and more intuitive experience.' }
        ]
      },
      {
        category: '🔧 Fixes & Improvements',
        color: 'bg-yellow-500 bg-opacity-40',
        items: [
          { title: 'Performance Optimizations', description: 'Enjoy a faster and smoother experience throughout the app.' },
          { title: 'Bug Fixes', description: 'Resolved various issues to ensure greater stability and reliability.' }
        ]
      }
    ]
  },
  {
    version: '1.1',
    date: '20-05-2024',
    notes: [
      {
        category: '🚀 New Features & Enhancements',
        color: 'bg-blue-500 bg-opacity-40',
        items: [
          { title: 'Stunning New Invoice View', description: 'Experience your invoices like never before with our 3D viewer.' },
          { title: 'Signatures on Invoices', description: 'Easily add your signature and your customer\'s signature to invoices.' },
          { title: 'Enhanced Export Options', description: 'Export multiple invoices as PDF or CSV with just a few taps.' },
          { title: 'Interactive Invoice Management', description: 'Change invoice status quickly with long press or swipe actions.' }
        ]
      },
      {
        category: '📈 Productivity Boosters',
        color: 'bg-green-500 bg-opacity-40',
        items: [
          { title: 'Redesigned Customer View', description: 'Now includes a 3D view of your invoices and displays the last 10 invoices.' },
          { title: 'Profile Pictures', description: 'Add profile pictures for your customers to personalize your records.' },
          { title: 'Product Photos', description: 'Add photos to your products for better visual management.' },
          { title: 'Customizable App Accent Color', description: 'Make Invoflow truly yours by changing the app’s accent color.' }
        ]
      },
      {
        category: '🔧 Fixes & Improvements',
        color: 'bg-yellow-500 bg-opacity-40',
        items: [
          { title: 'Discount Display Issue Fixed', description: 'Discounts now correctly appear on PDF invoices.' },
          { title: 'Invoice CSV Enhancements', description: 'Includes invoice status and payment method.' },
          { title: 'Menu Reorganization', description: 'Easier editing, archiving, and deleting of customers, invoices, and products.' },
          { title: 'Specific Tax Rates for Products', description: 'Assign unique tax percentages to each product.' },
          { title: 'Notifications Bug Fix', description: 'Resolved issues with unwanted notifications.' },
          { title: 'Performance Optimizations', description: 'Enjoy a smoother and faster app experience.' }
        ]
      },
      {
        category: '🎁 Extras',
        color: 'bg-purple-500 bg-opacity-40',
        items: [
          { title: 'Support for Developers', description: 'Show your support by tipping the developers directly within the app.' }
        ]
      },
      {
        category: '🌐 Language Support Update',
        color: 'bg-red-500 bg-opacity-40',
        items: [
          { title: '', description: 'To streamline our development process and focus on the core features that benefit the majority of our users, we have removed support for French, German, Italian, Portuguese, and Polish. This decision allows us to allocate more resources to enhancing the app\'s functionality and user experience. We appreciate your understanding and are here to support you through this transition.' }
        ]
      }
    ]
  },
  {
    version: '1.0.1',
    date: '28-03-2024',
    notes: [
      {
        category: '🔧 Bug Fixes',
        color: 'bg-red-500 bg-opacity-40',
        items: [
          { title: 'Fixed issue causing app crashes', description: 'App no longer crashes when opening certain invoices.' },
          { title: 'Resolved synchronization problem', description: 'Synchronization with cloud storage is now stable.' },
          { title: 'Addressed display glitches', description: 'Display issues on older devices have been fixed.' }
        ]
      }
    ]
  }
];

export default function ReleaseNotes() {
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
            Release Notes
          </h2>
        </div>

        <div className="bg-gray-50 dark:bg-transparent text-gray-900 dark:text-gray-100 my-10">
          <div className="container mx-auto">
            {releaseNotes.map(note => (
              <div key={note.version} className="bg-white dark:bg-gray-900 shadow-xl rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">Invoflow {note.version}</h3>
                <p className="text-gray-500 dark:text-gray-300 mb-6">Released on {note.date}</p>
                {note.notes.map(note => (
                  <div key={note.category} className="mb-6">
                  <h4 className={`text-md font-bold mb-4 text-gray-700 dark:text-gray-300 inline-block`}>
                    {note.category}
                  </h4>
                  <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-400">
                  {note.items.map((item, index) => (
                    <li key={index} className="leading-relaxed">
                      {item.title && <strong className="font-semibold">{item.title}:</strong>} {item.description}
                    </li>
                  ))}
                </ul>
                </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
    </>
  )
}
