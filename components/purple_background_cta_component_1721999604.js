/* Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
*/

Vue.component("purple_background_cta_component_1721999604", {
    template: `
    <section id="cta-section-container" class="bg-gradient-to-br from-blue-900 to-black">
        <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6">
            <div id="content-container" class="relative px-8 py-16 md:py-24 rounded-3xl overflow-hidden shadow-2xl bg-blue-950">
                <!-- Radial gradient -->
                <div id="radial-gradient" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                    <div id="radial-gradient-outer" class="absolute inset-0 translate-z-0 rounded-full blur-150 opacity-70" :class="radialGradientPrimaryStyle"></div>
                    <div id="radial-gradient-inner" class="absolute w-1/3 h-1/3 translate-z-0 rounded-full blur-50" :class="radialGradientSecondaryStyle"></div>
                </div>
                <!-- Blurred shape -->
                <div id="blurred-shape" class="absolute bottom-0 translate-y-1/2 left-0 blur-3xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="534" height="527">
                        <defs><linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%"><stop offset="0%" :stop-color="stopColorPrimaryStyle" /><stop offset="100%" :stop-color="stopColorSecondaryStyle" stop-opacity="0" /></linearGradient></defs>
                        <path fill="url(#bs5-a)" fill-rule="evenodd" d="m0 0 561 469-384 58z" transform="matrix(1 0 0 -1 0 527)" />
                    </svg>
                </div>
                <!-- Content -->
                <div id="content" class="max-w-4xl mx-auto">
                    <div class="text-center mb-12">
                        <div id="content-subtitle" class="flex justify-center">
                            <div id="content-subtitle-text" class="inline-block font-semibold text-lg bg-clip-text pb-3 px-4 rounded-full bg-purple-600" :class="[transparentTextStyle, contentSubtitleStyle]">
                                <i class='bx bx-walk mr-2'></i>Fetch the Perfect Walk for Your Pooch
                            </div>
                        </div>
                        <div class="flex justify-center" id="content-title-container">
                            <h2 id="content-title" class="text-4xl md:text-5xl font-bold bg-clip-text pb-4 text-white" :class="[transparentTextStyle, contentCtaTitleStyle]">Unleash the Adventure: Your Dog's New Best Friend</h2>
                        </div>
                        <div class="flex justify-center" id="content-body-container">
                            <p id="content-body" class="text-xl mb-8 max-w-2xl text-purple-200" :class="[contentBodyStyle]">Say goodbye to the hassle of walking your furry companion alone. Our app connects you with trusted, pet-loving walkers in your neighborhood who'll treat your pup like family.</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div class="bg-blue-900 p-6 rounded-xl shadow-md">
                            <i class='bx bx-map text-3xl text-purple-400 mb-4'></i>
                            <h3 class="text-xl font-semibold mb-2 text-white">Local Walks</h3>
                            <p class="text-purple-200">Discover nearby walking routes perfect for your pup's needs.</p>
                        </div>
                        <div class="bg-blue-900 p-6 rounded-xl shadow-md">
                            <i class='bx bx-shield text-3xl text-purple-400 mb-4'></i>
                            <h3 class="text-xl font-semibold mb-2 text-white">Vetted Walkers</h3>
                            <p class="text-purple-200">All our walkers are background-checked and pet-care certified.</p>
                        </div>
                        <div class="bg-blue-900 p-6 rounded-xl shadow-md">
                            <i class='bx bx-time text-3xl text-purple-400 mb-4'></i>
                            <h3 class="text-xl font-semibold mb-2 text-white">Flexible Scheduling</h3>
                            <p class="text-purple-200">Book walks anytime, from quick potty breaks to long adventures.</p>
                        </div>
                    </div>
                    <div class="text-center mb-12">
                        <a id="content-cta-button" href="#0" class="btn text-lg px-8 py-4 rounded-full transition duration-300 ease-in-out group bg-purple-600 text-white hover:bg-purple-700" :class="[contentCtaButtonPrimaryStyle, contentCtaButtonGradientStyle, contentCtaButtonHoverStyle]">
                            Get Started 
                            <span id="content-cta-arrow" class="tracking-normal group-hover:translate-x-1 transition-transform duration-300 ease-in-out ml-2" :class="contentCtaArrowStyle">
                                <i class='bx bx-right-arrow-alt'></i>
                            </span>
                        </a>
                    </div>
                    <div class="bg-blue-900 p-8 rounded-2xl">
                        <h3 class="text-2xl font-semibold text-white mb-6 text-center">What Our Happy Pups Say</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="bg-blue-950 p-6 rounded-xl shadow-md">
                                <p class="text-purple-200 mb-4">"My dog loves his daily walks now! The app made finding a reliable walker so easy."</p>
                                <div class="flex items-center">
                                    <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="User Avatar" class="w-12 h-12 rounded-full mr-4">
                                    <div>
                                        <p class="font-semibold text-white">Sarah M.</p>
                                        <p class="text-purple-300 text-sm">Dog Mom to Max</p>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-blue-950 p-6 rounded-xl shadow-md">
                                <p class="text-purple-200 mb-4">"As a busy professional, this app has been a lifesaver for ensuring my pup gets his exercise!"</p>
                                <div class="flex items-center">
                                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User Avatar" class="w-12 h-12 rounded-full mr-4">
                                    <div>
                                        <p class="font-semibold text-white">James L.</p>
                                        <p class="text-purple-300 text-sm">Proud owner of Luna</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
            </div>
        </div>
    </section>`,
        data() {
            return {
                expanded: false, 
                radialGradientPrimaryStyle: "bg-purple-600",
                radialGradientSecondaryStyle: "bg-purple-400",
                stopColorPrimaryStyle: "#8B5CF6",
                stopColorSecondaryStyle: "#A78BFA",
                transparentTextStyle: "text-transparent",
                contentSubtitleStyle: "bg-gradient-to-r from-purple-600 to-purple-400",
                contentCtaTitleStyle: "bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700",
                contentBodyStyle: "text-purple-700",
                contentCtaButtonPrimaryStyle:"text-white",
                contentCtaButtonGradientStyle: "bg-gradient-to-r from-purple-600 to-purple-500",
                contentCtaButtonHoverStyle: "hover:from-purple-700 hover:to-purple-600",
                contentCtaArrowStyle: "text-white"
            };
        },
    });
                    