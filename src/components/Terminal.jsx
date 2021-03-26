import React, { useState } from 'react'
import Buttons from './Buttons'
import Command from './Command'
import Intro from './Intro'
import PreviousCommand from './PreviousCommand'
import Result from './Result'

export default function terminal() {

    // States
    const [showIntro, setShowIntro] = useState(true)
    const [command, setCommand] = useState('')
    const [previousCommand, setPreviousCommand] = useState('')
    const [result, setResult] = useState('')

    // Functions
    const receiveCommand = (command) => {
        setCommand(command)
        setShowIntro(false)
        setPreviousCommand(command)
        setResult(command.toLowerCase())
    }

    return (

        <div 
        className="bg-gray-800 rounded-lg shadow-md w-11/12 md:W-10/12 lg:w-2/3 xl:w-1/2 min-h-96">
            
            { /* Action Buttons */ }
            
            <div className="flex w-full justify-start m-4">
                <Buttons/>
            </div>
            
            { /* Intro Text */ }

            { showIntro &&
                
                <div className="w-full m-4">
                    <Intro/>
                </div>

            }

            { /* Previous Command */ }

            { previousCommand &&

                <div className="w-full m-4">
                    <PreviousCommand command={previousCommand}/>
                </div>

            }

            { /* Results Section */ }

            { result &&

                <div className="w-full m-4">
                    <Result command={result}/>
                </div>

            }

            { result &&
            
                <div className="w-10/12 m-4 text-green-500">
                    <h1>Would you like to know more? Type one of the commands shown below:</h1>
                    <ul className="w-10/12 flex space-x-5 lg:space-x-10 mt-2 text-blue-500">
                        <li className="hover:underline cursor-pointer">About</li>
                        <li className="hover:underline cursor-pointer">Skills</li>
                        <li className="hover:underline cursor-pointer">Projects</li>
                        <li className="hover:underline cursor-pointer">Contact</li>
                        <li className="hover:underline cursor-pointer">Help</li>
                    </ul>
                </div>
            
            }

            <div className="w-full m-4">
                <Command sendCommand={receiveCommand}/>
            </div>

        </div>
    )
}
