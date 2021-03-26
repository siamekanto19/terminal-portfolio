import React, { useEffect, useState } from 'react'

export default function Command(props) {

    // States
    const [command, setCommand] = useState('')

    // Effect
    useEffect(() => {
        
        document.getElementById('command').focus()
        
        return () => {
            document.getElementById('command').blur()
        }

    }, [])

    // Functions
    const sendCommand = (e) => {

        let commandArray = [ 'help', 'projects', 'skills', 'contact', 'about' ]

        if (e.keyCode == 13 && commandArray.includes(command.toLowerCase())) {

            props.sendCommand(command)
            setCommand('')

        } else if (command.length >= 10) {

            setCommand('')
        }
    }


    
    return (
        <div className="mt-2 lg:text-lg text-green-500 flex items-center">
            <h1>root@siam.netlify.app:~$  </h1>
            <input value={command} onChange={ (e) => setCommand(e.target.value) } onKeyUp={sendCommand} type="text" className="bg-transparent ml-2 text-blue-500" id="command"/>
        </div>
    )
}
