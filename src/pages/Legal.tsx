import PageHead from '../components/PageHead'
import { useSEO } from '../hooks/useSEO'

function Legal({ title, items }: { title: string; items: [string, string][] }) {
  useSEO(title, `${title} for the Raksha Computers website.`)
  return (
    <>
      <PageHead title={title} intro="Plain-language summary. Have this reviewed before launch." />
      <section className="py-14 md:py-20"><div className="wrap max-w-3xl space-y-10">
        {items.map(([h, t]) => <div key={h}><h2 className="font-display text-xl">{h}</h2><p className="mt-3 text-muted">{t}</p></div>)}
      </div></section>
    </>
  )
}
export const Privacy = () => <Legal title="Privacy policy" items={[
  ['What this site collects', 'In this version, enquiry forms are validated in your browser and are not sent or stored. If a backend is added later, this page must be updated to say what is collected, why and for how long.'],
  ['Third-party content', 'The site loads fonts from Google Fonts and an embedded Google Map, which may receive technical data such as your IP address.'],
  ['Contact', 'For privacy questions, call the shop on +91 99006 03818.']]} />
export const Terms = () => <Legal title="Terms and conditions" items={[
  ['Product information', 'Listings are demonstrations. They do not show real stock or prices. Please confirm details with the shop.'],
  ['Enquiries', 'Sending an enquiry asks for information. It does not confirm a purchase, booking or reservation.'],
  ['Services', 'Services are described in general terms. Availability, timing and cost are confirmed by the shop.']]} />
