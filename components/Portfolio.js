import IconGitHub from "./icons/github"
import IconExternal from "./icons/external"

export function Portfolio() {
    return (
        <div className="relative min-h-screen bg-gray-900 px-[100px] tracking-wider">
            <div id="header" className="fixed left-[0] w-full h-[75px] bg-gray-900 px-[100px] flex gap-5 justify-end items-center">
                <a href="#intro" className="float-right text-lg text-gray-100 w-fit m-[0] cursor-pointer hover:text-[#33A1E4]"><span className="text-[#33A1E4]">1.</span> About</a>
                <a href="#work" className="float-right text-lg text-gray-100 w-fit m-[0] cursor-pointer hover:text-[#33A1E4]"><span className="text-[#33A1E4]">2.</span> Work</a>
                <a href="#contact" className="float-right text-lg text-gray-100 w-fit m-[0] cursor-pointer hover:text-[#33A1E4]"><span className="text-[#33A1E4]">3.</span> Contact</a>
                <a target="_blank" rel="noreferrer" href="/images/Cristian_Silva_Resume.pdf">
                    <button className="text-lg text-[#33A1E4] px-[8px] py-[6px] rounded-md border-2 border-[#33A1E4] hover:bg-[#33A1E4] hover:text-white">Resume</button>
                </a>
            </div>
            <div id="intro" className="pt-[150px] pb-[45px] w-full grid grid-cols-2">
                <div className="w-full h-full">
                    <h1 className="text-[#33A1E4] text-3xl mb-[20px]">Hello, my name is </h1>
                    <h1 className="text-white text-6xl font-bold mb-[25px]">Cristian Silva.</h1>
                    <h1 className="text-gray-300 text-4xl font-medium leading-[3rem]">A software engineer who enjoys building <span className="text-[#33A1E4]">web</span> and <span className="text-[#33A1E4]">blockchain</span> apps.</h1>
                    <div className="mt-[60px] w-full flex place-content-center">
                        <a target="_blank" href="mailto:silvacristian1296@gmail.com">
                        <button className="text-3xl text-[#33A1E4] px-[20px] py-[15px] rounded-md border-2 border-[#33A1E4] hover:bg-[#33A1E4] hover:text-white">Contact Me</button>    
                        </a>
                    </div>
                </div>
                <div className="w-full h-full flex justify-center">
                    <img className="w-[70%]" src="/images/profile.jpg" />
                </div>
            </div>
            <div id="work" className="w-full pt-[85px]">
                <h1 className="mb-[50px] text-white text-center text-5xl font-semibold">Latest Works</h1>
                <div className="w-full flex pb-[80px]">
                    <div className="w-[55%]">
                        <img src="/images/artstore_screenshot.jpg" />
                    </div>
                    <div className="w-[45%] pt-[20px] px-[30px]">
                        <h1 className="mb-[25px] text-[#33A1E4] text-center text-4xl font-normal tracking-wider">Artstore</h1>
                        <h1 className="mb-[30px] text-lg text-gray-300">An online website builder for showing off your NFTs. Connect your wallet, load your NFTs, add name, bio, image and links. After customizations are complete, you can save the website to your GitHub account.</h1>
                        <ul className="mb-[30px] text-md text-gray-200 font-semibold whitespace-nowrap">
                            <li className="inline mr-[20px]">TypeScript</li>
                            <li className="inline mr-[20px]">NextJS</li>
                            <li className="inline mr-[20px]">Redux</li>
                            <li className="inline mr-[20px]">Tailwind CSS</li>
                            <li className="inline mr-[20px]">GitHub API</li>
                        </ul>
                        <div className="flex gap-4">
                            <div className="w-[23px]">
                                <a target="_blank" rel="noreferrer" href="https://github.com/Artstore-nft/gallery-builder">
                                    <IconGitHub />
                                </a>
                            </div>
                            <div className="w-[23px]">
                                <a target="_blank" rel="noreferrer" href="https://artstore.lol">
                                    <IconExternal />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex pb-[80px]">
                    <div className="w-[45%] pt-[20px] px-[30px]">
                        <h1 className="mb-[25px] text-[#33A1E4] text-center text-4xl font-normal tracking-wider">Agori</h1>
                        <h1 className="mb-[30px] text-lg text-gray-300">A custom e-commerce store for indie clothing. Side-scrollling categories(Nextflix type UI), account creation and login, and ability to <span className="text-red-400">heart</span> items you like. Checkout with built-in Stripe integration.</h1>
                        <ul className="text-md text-gray-200 font-semibold whitespace-nowrap">
                            <li className="inline mr-[20px]">Python</li>
                            <li className="inline mr-[20px]">Flask</li>
                            <li className="inline mr-[20px]">JQuery</li>
                            <li className="inline mr-[20px]">MongoDB</li>
                            <li className="inline mr-[20px]">AWS</li>
                            <li className="inline mr-[20px]">Stripe API</li>
                        </ul>
                    </div>
                    <div className="w-[55%] flex justify-center">
                        <img className="w-[55%]" src="/images/agori_screenshot.png" />
                    </div>
                </div>
                <div className="w-full flex pb-[80px]">
                    <div className="w-[55%]">
                        <img src="/images/wealthwallet_screenshot.jpg" />
                    </div>
                    <div className="w-[45%] pt-[20px] px-[30px]">
                        <h1 className="mb-[25px] text-[#33A1E4] text-center text-4xl font-normal tracking-wider">WealthWallet</h1>
                        <h1 className="mb-[30px] text-lg text-gray-300">A blockchain portfolio manager that lets users deposit funds to store a variety of tokens. Choose the tokens and ratios of the portfolio, then WealthWallet will automatically swap your funds to your selected tokens using Uniswap.   </h1>
                        <ul className="mb-[30px] text-md text-gray-200 font-semibold whitespace-nowrap">
                            <li className="inline mr-[20px]">Solidity</li>
                            <li className="inline mr-[20px]">Truffle</li>
                            <li className="inline mr-[20px]">Mocha</li>
                            <li className="inline mr-[20px]">Web3JS</li>
                            <li className="inline mr-[20px]">Uniswap</li>
                        </ul>
                        <div className="flex gap-4">
                            <div className="w-[23px]">
                                <a target="_blank" rel="noreferrer" href="https://github.com/wealthwallet/wealthwallet">
                                    <IconGitHub />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="contact" className="w-full py-[40px] flex flex-col items-center">
                <h1 className="mb-[50px] text-white text-center text-5xl font-semibold">Contact</h1>
                <a target="_blank" rel="noreferrer" href="mailto:silvacristian1296@gmail.com" className="w-fit text-[#33A1E4] text-center text-4xl font-semibold">silvacristian1296@gmail.com</a>
            </div>
        </div>
    )
}