/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export function RequestAccess() {
    return (
        <section id="request-access">
            <div className=" bg-slate-50 pb-16 sm:pb-24">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
                    <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Get notified when we launch.
                    </h2>
                    <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
                        Sign up now for early access to Walnut Debugger and ascend to new heights in Starknet development.
                    </p>
                    <form className="mx-auto mt-10 flex max-w-md gap-x-4">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                            placeholder="Enter your email"
                        />
                        <button
                            type="submit"
                            className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Notify me
                        </button>
                    </form>

             
                            <form action="https://joinwido.us1.list-manage.com/subscribe/post?u=519a9433ee6834f49d94686d9&amp;id=f836ce2ed8&amp;f_id=00d49de5f0"
                                method="post"
                                id="mc-embedded-subscribe-form"
                                name="mc-embedded-subscribe-form"
                                className="validate"
                                target="_self">

                                <div id="mc_embed_signup_scroll">

                                    <div className="indicates-required">
                                        <span className="asterisk">*</span>indicates required
                                    </div>
                                    <div className="mc-field-group">
                                        <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                                        <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required={true} />
                                            <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
                                    </div>
                                    <div hidden={true}>
                                        <input type="hidden" name="tags" value="5890423" />
                                    </div>
                                    <div id="mce-responses" className="clear">
                                        <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                                        <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                                    </div>
                                    <div aria-hidden="true" style={{ position: "absolute", left: "-5000px"}}>
                                        <input type="text" name="b_519a9433ee6834f49d94686d9_f836ce2ed8" value="" />
                                    </div>
                                    <div className="clear">
                                        <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                                        
                                    </div>
                                </div>
                            </form>
                   




                    <svg
                    viewBox="0 0 1024 1024"
                    className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
                    aria-hidden="true"
                    >
                    <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                    <defs>
                        <radialGradient
                        id="759c1415-0410-454c-8f7c-9a820de03641"
                        cx={0}
                        cy={0}
                        r={1}
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(512 512) rotate(90) scale(512)"
                        >
                        <stop stopColor="#7775D6" />
                        <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
                        </radialGradient>
                    </defs>
                    </svg>
                </div>
                </div>
            </div>
        </section>
    )
  }
  