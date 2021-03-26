import React from 'react'

export default function Buttons() {

    const btnArray = [ 'bg-red-500', 'bg-yellow-400', 'bg-green-600' ]

    return (
        
        <div className="flex items-center">
            
            { btnArray.map( (btn, index) => {
                
                return (

                    <div className={`w-4 h-4 rounded-full ${btn} ${ index > 0 ? 'ml-1.5' : '' } block`} key={index}></div>

                )

            })}

        </div>
    )
}
