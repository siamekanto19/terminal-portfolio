import React from 'react'

export default function Result(props) {
    return (
        
        <div className="mt-2 lg:text-lg text-blue-500">
            
            { props.command == 'about' &&
            
                <div className="w-10/12 h-full">
                    <h1>I'm Sheikh Siam Rouf</h1>
                    <p className="mt-2">From Khulna, Bangladesh</p>
                    <p className="mt-2">I love to build Beautiful and Clean Websites. I love to work with JavaScript and some JavaScript Frameworks. Though I am not expert at anything, I am constantly learning new technologies to sharpen my skills.</p>
                    <p className="mt-2">That's All!</p>
                </div>

            }

            { props.command == 'projects' &&
            
                <div className="w-10/12 h-full">
                    <h1>Please visit my GitHub to check the projects I have worked on:</h1>
                    <p className="mt-2 text-purple-500 underline"><a href="https://github.com/siamekanto19" target="_blank">https://github.com/siamekanto19</a></p>
                </div>

            }

            { props.command == 'skills' &&
            
                <div className="w-10/12 h-full">
                    <h1>Technologies and Frameworks I know (So Far)</h1>
                    <div className="w-full mt-2 overflow-y-scroll h-28">
                        <p>- HTML, CSS, JavaScript</p>
                        <p className="mt-2">- TailwindCSS</p>
                        <p className="mt-2">- React</p>
                        <p className="mt-2">- Vuejs</p>
                        <p className="mt-2">- Svelte</p>
                        <p className="mt-2">- Nodejs</p>
                        <p className="mt-2">- ExpressJs</p>
                        <p className="mt-2">- MongoDB</p>
                        <p className="mt-2">- Framer Motion</p>
                        <p className="mt-2">- Websockets</p>
                        <p className="mt-2">- Jquery</p>
                        <p className="mt-2">- JSON</p>
                    </div>
                    <h1 className="mt-4 text-purple-500">Most importantly, I'm constantly learning new things to sharpen my skills.</h1>
                </div>

            }

            { props.command == 'contact' &&
            
                <div className="w-10/12 h-full">
                    <h1>I'm glad that you want to contact me. Here's how :</h1>
                    <p className="mt-2">Email: <a className="text-purple-500 underline" href="mailto:siamekanto360@gmail.com">siamekanto360@gmail.com</a></p>
                    <p className="mt-2">Facebook: <a className="text-purple-500 underline" href="https://fb.com/sheikhsiamrouf">fb.com/sheikhsiamrouf</a></p>
                    <p className="mt-2">Instagram: <a className="text-purple-500 underline" href="https://instagram.com/sheikhsiamrouf">instagram.com/sheikhsiamrouf</a></p>
                    <p className="mt-2">Github: <a className="text-purple-500 underline" href="https://github.com/siamekanto19">github.com/siamekanto19</a></p>
                </div>

            }

            { props.command == 'help' &&
            
                <div className="w-10/12 h-full">
                    <h1 className="text-purple-500">Please type what you want to know in the console below. As example, if you want to know about my Projects, type "projects" and press Enter.</h1>
                </div>

            }

        </div>
    )
}
