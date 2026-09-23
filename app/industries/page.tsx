import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industries We Serve | EasyLink Technologies',
  description: 'Tailored ICT solutions for various industries across East Africa',
}

export default function IndustriesPage() {
  const industries = [
    {
      title: 'Financial Services',
      description: 'We leverage IT to improve financial services to continue their operations, enhance security, and offer innovative products and services to their customers.',
    },
    {
      title: 'Engineering & Construction',
      description: 'Improving project planning and management, design and engineering, communication and collaboration, safety and compliance, and automation and robotics.',
    },
    {
      title: 'Legal Practices',
      description: 'Equip with tools for communication and collaboration, including email, video conferencing, and collaboration software.',
    },
    {
      title: 'Hospitality',
      description: 'Supports point-of-sale (POS) systems that enable hospitality businesses to streamline transactions and improve accuracy. POS systems allow businesses to track inventory, process payments, and manage customer orders.',
    },
    {
      title: 'Accounting',
      description: 'Automation of the tedious and time-consuming tasks in the financial services industry, such as accounting, record-keeping, and customer onboarding.',
    },
  ]

  return (
    <main className='pt-32 pb-20'>
      <div className='container mx-auto max-w-7xl px-4'>
        <h1 className='text-center mb-8'>Industries We Serve</h1>
        <p className='text-xl text-center text-black/70 mb-16 max-w-4xl mx-auto'>
          While it's true that different clients may conduct business in their unique ways, 
          it's not necessarily true that they all have the same needs. Each client may have 
          specific requirements, preferences, and priorities that are different from others.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {industries.map((industry, index) => (
            <div key={index} className='bg-grey p-8 rounded-lg hover:shadow-lg transition-shadow duration-300'>
              <h3 className='text-2xl font-semibold mb-4 text-primary'>{industry.title}</h3>
              <p className='text-black/70'>{industry.description}</p>
            </div>
          ))}
        </div>

        <div className='mt-16 max-w-4xl mx-auto text-center'>
          <h2 className='mb-6'>Understanding Your Unique Needs</h2>
          <p className='text-lg text-black/70'>
            Understanding each client's unique needs is crucial to providing the best possible service. 
            Taking the time to listen and learn about each client's needs can help us tailor our approach 
            and provide a personalized solution. This can ultimately lead to better relationships, 
            increased customer satisfaction, and even new business opportunities.
          </p>
        </div>
      </div>
    </main>
  )
}
