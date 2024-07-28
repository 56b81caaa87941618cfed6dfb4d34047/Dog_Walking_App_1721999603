/* Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
*/

Vue.component("purple_background_cta_component_1721999604", {
    template: `
    <section id="cta-section-container" class="bg-gradient-to-br from-yellow-400 to-orange-500">
        <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6">
            <div id="content-container" class="relative px-8 py-16 md:py-24 rounded-3xl overflow-hidden shadow-2xl bg-white">
                <!-- Radial gradient -->
                <div id="radial-gradient" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                    <div id="radial-gradient-outer" class="absolute inset-0 translate-z-0 rounded-full blur-150 opacity-70" :class="radialGradientPrimaryStyle"></div>
                    <div id="radial-gradient-inner" class="absolute w-1/3 h-1/3 translate-z-0 rounded-full blur-50" :class="radialGradientSecondaryStyle"></div>
                </div>
                <!-- Content -->
                <div id="content" class="max-w-4xl mx-auto">
                    <div class="text-center mb-12">
                        <div id="content-subtitle" class="flex justify-center">
                            <div id="content-subtitle-text" class="inline-block font-semibold text-lg bg-clip-text pb-3 px-4 rounded-full bg-orange-500" :class="[transparentTextStyle, contentSubtitleStyle]">
                                <i class='bx bx-bone mr-2'></i>Discover the World of Dogs
                            </div>
                        </div>
                        <div class="flex justify-center" id="content-title-container">
                            <h2 id="content-title" class="text-4xl md:text-5xl font-bold bg-clip-text pb-4 text-orange-600" :class="[transparentTextStyle, contentCtaTitleStyle]">Pawsome Pals: From Tiny to Tremendous!</h2>
                        </div>
                        <div class="flex justify-center" id="content-body-container">
                            <p id="content-body" class="text-xl mb-8 max-w-2xl text-orange-700" :class="[contentBodyStyle]">Embark on a tail-wagging journey through the diverse world of canines. From pocket-sized pooches to gentle giants, there's a perfect furry friend for everyone!</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div class="bg-yellow-100 p-6 rounded-xl shadow-md">
                            <i class='bx bx-dog text-3xl text-orange-500 mb-4'></i>
                            <h3 class="text-xl font-semibold mb-2 text-orange-700">Tiny Treasures</h3>
                            <p class="text-orange-600">Chihuahuas, Yorkies, and Pomeranians - small in size, big in personality!</p>
                        </div>
                        <div class="bg-yellow-100 p-6 rounded-xl shadow-md">
                            <i class='bx bx-run text-3xl text-orange-500 mb-4'></i>
                            <h3 class="text-xl font-semibold mb-2 text-orange-700">Medium Marvels</h3>
                            <p class="text-orange-600">Beagles, Corgis, and Bulldogs - the perfect balance of cuddles and energy!</p>
                        </div>
                        <div class="bg-yellow-100 p-6 rounded-xl shadow-md">
                            <i class='bx bx-shield text-3xl text-orange-500 mb-4'></i>
                            <h3 class="text-xl font-semibold mb-2 text-orange-700">Gentle Giants</h3>
                            <p class="text-orange-600">Great Danes, Saint Bernards, and Newfoundlands - big dogs with even bigger hearts!</p>
                        </div>
                    </div>
                    <div class="text-center mb-12">
                        <a id="content-cta-button" href="#0" class="btn text-lg px-8 py-4 rounded-full transition duration-300 ease-in-out group bg-orange-500 text-white hover:bg-orange-600" :class="[contentCtaButtonPrimaryStyle, contentCtaButtonGradientStyle, contentCtaButtonHoverStyle]">
                            Find Your Furry Friend 
                            <span id="content-cta-arrow" class="tracking-normal group-hover:translate-x-1 transition-transform duration-300 ease-in-out ml-2" :class="contentCtaArrowStyle">
                                <i class='bx bx-right-arrow-alt'></i>
                            </span>
                        </a>
                    </div>
                    <div class="bg-yellow-100 p-8 rounded-2xl">
                        <h3 class="text-2xl font-semibold text-orange-700 mb-6 text-center">Fun Dog Facts</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="bg-white p-6 rounded-xl shadow-md">
                                <p class="text-orange-600 mb-4">"Did you know? A Greyhound can run up to 45 miles per hour, making them the fastest dog breed!"</p>
                                <div class="flex items-center">
                                    <i class='bx bx-run text-3xl text-orange-500 mr-4'></i>
                                    <p class="font-semibold text-orange-700">Speedy Sprinters</p>
                                </div>
                            </div>
                            <div class="bg-white p-6 rounded-xl shadow-md">
                                <p class="text-orange-600 mb-4">"The Basenji is known as the 'barkless dog' because it makes a unique yodel-like sound!"</p>
                                <div class="flex items-center">
                                    <i class='bx bx-music text-3xl text-orange-500 mr-4'></i>
                                    <p class="font-semibold text-orange-700">Unique Voices</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`,
        data() {
            return {
                radialGradientPrimaryStyle: "bg-orange-400",
                radialGradientSecondaryStyle: "bg-yellow-300",
                stopColorPrimaryStyle: "#F97316",
                stopColorSecondaryStyle: "#FDE68A",
                transparentTextStyle: "text-transparent",
                contentSubtitleStyle: "bg-gradient-to-r from-orange-500 to-yellow-500",
                contentCtaTitleStyle: "bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500",
                contentBodyStyle: "text-orange-700",
                contentCtaButtonPrimaryStyle:"text-white",
                contentCtaButtonGradientStyle: "bg-gradient-to-r from-orange-500 to-yellow-500",
                contentCtaButtonHoverStyle: "hover:from-orange-600 hover:to-yellow-600",
                contentCtaArrowStyle: "text-white"
        },
    });
                    