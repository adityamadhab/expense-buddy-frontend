export function SupportPage() {
    return (
        <div>
            <div className="m-2">
                <div className="flex flex-col m-auto gap-10 justify-center items-center text-center py-16">
                    <div className="w-full mx-auto xl:px-20 md:px-10 px-4">
                        <img
                            alt="supportImage"
                            loading="lazy"
                            width="0"
                            height="0"
                            decoding="async"
                            data-nimg="1"
                            className="hidden"
                            src="/support.svg"
                            style={{ color: 'transparent' }}
                        />
                        <img
                            src="/support2.png"
                            alt="supportImage"
                            className="max-w-md m-auto w-full false"
                        />
                    </div>
                    <h1>
                        Need Support? <span className="underline cursor-pointer">Contact us</span>
                    </h1>
                </div>
            </div>
        </div>
    )
}