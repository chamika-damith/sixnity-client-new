import React from 'react'

function Comparison() {
  const features = [
    {
      name: 'AI Workout Generator',
      sixinfinity: { available: true, text: 'Available' },
      other: { available: false, text: 'Not available' }
    },
    {
      name: 'AI Meal Plan Generator',
      sixinfinity: { available: true, text: 'Available' },
      other: { available: false, text: 'Not available' }
    },
    {
      name: 'AI Chatbot / Virtual Coach',
      sixinfinity: { available: true, text: 'Included' },
      other: { available: false, text: 'Not offered' }
    },
    {
      name: 'Admin / Owner / Trainer Management',
      sixinfinity: { available: true, text: 'Full SaaS with role-based access' },
      other: { available: true, text: 'Basic / Limited' }
    },
    {
      name: 'Trainer Salary & Automated Payouts',
      sixinfinity: { available: true, text: 'Fully automated' },
      other: { available: false, text: 'Mostly manual or not available' }
    },
    {
      name: 'Platform Commission & Revenue Split',
      sixinfinity: { available: true, text: 'Built-in automation' },
      other: { available: false, text: 'Not supported' }
    },
    {
      name: 'Super Admin Multi-Gym Control',
      sixinfinity: { available: true, text: 'True multi-gym SaaS architecture' },
      other: { available: true, text: 'Multi-location only (limited control)' }
    },
    {
      name: 'Workout Tracking & Progress Analytics',
      sixinfinity: { available: true, text: 'Deep analytics' },
      other: { available: true, text: 'Very limited' }
    },
    {
      name: 'Marketing & CRM Tools',
      sixinfinity: { available: true, text: 'Fully integrated' },
      other: { available: true, text: 'Partial or limited' }
    },
    {
      name: 'Wearable Device Integration',
      sixinfinity: { available: true, text: 'Supported' },
      other: { available: false, text: 'Not supported' }
    },
    {
      name: 'AI Personalization Across Entire System',
      sixinfinity: { available: true, text: 'AI workouts + AI meals + AI chatbot' },
      other: { available: false, text: 'No AI personalization' }
    },
    {
      name: 'Member Engagement Automation',
      sixinfinity: { available: true, text: 'AI-driven notifications and insights' },
      other: { available: true, text: 'Basic notifications only' }
    }
  ]

  return (
    <div className="w-full mt-12">
      <div className="">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="title">
            System Comparison Table
          </h2>
          <p className="description mt-4">
            Compare leading SaaS platforms side by side to find the best fit based on features, pricing, scalability, and performance.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white dark:bg-black rounded-lg overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-primary">
                <th className="p-4 sm:p-6 text-left font-neutiva font-bold text-sm sm:text-base  text-black">
                  Feature/ Capability
                </th>
                <th className="p-4 sm:p-6 text-start font-neutiva font-bold text-sm sm:text-base  text-black ">
                  SIXNITIY Gym Management System
                </th>
                <th className="p-4 sm:p-6 text-start font-neutiva font-bold text-sm sm:text-base text-black">
                  Other Gym Management System
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr 
                  key={index} 
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                  <td className="p-4 sm:p-6 text-secondary font-neutiva text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      {feature.name}
                      <svg className="w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </td>
                  <td className="p-4 sm:p-6">
                    {feature.sixinfinity.available ? (
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm text-secondary font-neutiva">{feature.sixinfinity.text}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm text-secondary font-neutiva">{feature.sixinfinity.text}</span>
                      </div>
                    )}
                  </td>
                  <td className="p-4 sm:p-6">
                    {feature.other.available ? (
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm text-secondary font-neutiva">{feature.other.text}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm text-secondary font-neutiva">{feature.other.text}</span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Comparison
