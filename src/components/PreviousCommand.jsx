import React from 'react'

export default function PreviousCommand(props) {
    return (
        <div className="mt-2 lg:text-lg text-green-500 flex items-center">
            <h1>root@siamekanto.com:~$ <span className="text-blue-500">{props.command}</span> </h1>
        </div>
    )
}
