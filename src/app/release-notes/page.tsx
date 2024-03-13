import { Container } from '@/components/Container'

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
      </Container>
    </section>
    </>
  )
}
