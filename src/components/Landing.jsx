export function Landing() {
    return (
        <div className="pt-48 ml-60 w-4/5 mx-auto flex flex-row mb-40">
            <div className="landing-text w-2/5">
                <h1 className="landTitle text-5xl pt-8 pb-8 bg-gradient-to-r from-black to-primary-100 text-transparent bg-clip-text">
                    Welcome to Expense Buddy
                </h1>
                <h2 className="landSubTitle w-4/5 pb-20 text-lg font-light">
                    Empower your finances: Track, Budget, and Thrive with our Expenses
                    Tracker App!
                </h2>
                <button className="getStarted bg-primary-100 text-bg-200 text-lg py-4 px-8 rounded-lg transition duration-300 hover:bg-cyan-400 hover:text-text-100">
                    Get Started
                </button>
            </div>

            <div className="land-images flex w-3/5 relative z-10">
                <img
                    src="./Landing/ExpenseGraph.png"
                    alt="graph"
                    className="landingTop-Img w-3/4 object-cover rounded-lg shadow-lg"
                />
                <img
                    src="./Landing/PieGraphLand.png"
                    alt="graph"
                    className="landingTop-Img w-3/4 object-cover rounded-lg shadow-lg absolute bottom-0 right-0 -mb-24 -mr-20"
                />
            </div>
        </div>
    )
}