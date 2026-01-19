import React from 'react'

function MACoparison() {
  const features = [
    {
      name: 'AI Workout Generator',
      sixinfinity: { available: true, text: 'Yes' },
      other: { available: false, text: 'Not available' }
    },
    {
      name: 'AI Meal Plan Generator',
      sixinfinity: { available: true, text: 'Yes' },
      other: { available: false, text: 'Not available' }
    },
    {
      name: 'AI Chatbot / Virtual Coach',
      sixinfinity: { available: true, text: 'Built-in real-time coach' },
      other: { available: false, text: 'Not available' }
    },
    {
      name: 'Member Profile, Attendance & Billing Sync',
      sixinfinity: { available: true, text: 'Fully integrated' },
      other: { available: true, text: 'Partial' }
    },
    {
      name: 'Workout Tracking & Progress Analytics',
      sixinfinity: { available: true, text: 'Advanced, AI-enhanced' },
      other: { available: false, text: 'Basic or Not Included' }
    },
    {
      name: 'Class Booking & Schedule Management',
      sixinfinity: { available: true, text: 'Included' },
      other: { available: true, text: 'Included (basic)' }
    },
    {
      name: 'Wearable Integration',
      sixinfinity: { available: true, text: 'Yes' },
      other: { available: false, text: 'Rarely supported' }
    },
    {
      name: 'Push Notifications (AI-personalized)',
      sixinfinity: { available: true, text: 'Personalized coaching alerts' },
      other: { available: true, text: 'Generic reminders' }
    },
    {
      name: 'Trainer Communication / Chat',
      sixinfinity: { available: true, text: 'Yes' },
      other: { available: false, text: 'Not included' }
    },
    {
      name: 'Unified Meal + Workout + Gym Sync',
      sixinfinity: { available: true, text: 'Full sync' },
      other: { available: false, text: 'Not supported' }
    },
    {
      name: 'Multi-Gym Member Login',
      sixinfinity: { available: true, text: 'Yes' },
      other: { available: false, text: 'Not supported' }
    }
  ]

  return (
    <div className="w-full mt-12">
      <div className="">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="title mb-4">
            Mobile App Comparison Table
          </h2>
          <p className="description mt-4">
            Compare mobile apps side by side with a clear table covering features, pricing, ratings, and compatibility.
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
                  SIXNITIY Gym Mobile App
                </th>
                <th className="p-4 sm:p-6 text-start font-neutiva font-bold text-sm sm:text-base text-black">
                  Other Gym Mobile App
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

export default MACoparison
