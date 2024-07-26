/* Summary: Contains a section with the following components:
1. Particles animation: A canvas element for displaying a particle animation in the background.
2. Illustration: An SVG illustration with a gradient background and various filters applied.
3. Hero content: The main content of the landing page, including an announcement text, a hero text, a sub-hero text, and two buttons. The hero content is centered.
*/

Vue.component("purple_hero_component_1721999604", {
    template: `
    <section id="hero-section-container">
        <div id="section-container" class="relative max-w-6xl mx-auto px-4 sm:px-6 bg-white">
            <div id="hero-content-container" class="pt-32 pb-16 md:pt-52 md:pb-32">
                <!-- Swap Form -->
                <div id="swap-form" class="max-w-md mx-auto bg-slate-800 rounded-lg shadow-lg p-6 mb-8">
                    <h2 class="text-2xl font-bold text-purple-300 mb-4">Swap Tokens</h2>
                    <div class="mb-4">
                        <label for="from-token" class="block text-sm font-medium text-purple-200 mb-2">From</label>
                        <select id="from-token" class="w-full bg-slate-700 text-white rounded-md p-2 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600">
                            <option value="eth">ETH</option>
                            <option value="dai">DAI</option>
                            <option value="usdc">USDC</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label for="to-token" class="block text-sm font-medium text-purple-200 mb-2">To</label>
                        <select id="to-token" class="w-full bg-slate-700 text-white rounded-md p-2 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600">
                            <option value="dai">DAI</option>
                            <option value="usdc">USDC</option>
                            <option value="eth">ETH</option>
                        </select>
                    </div>
                    <button id="swap-button" class="w-full bg-purple-600 text-white rounded-md p-2 hover:bg-purple-700 transition duration-300 shadow-md">Swap</button>
                </div>
                <!-- Hero content -->
                <div id="hero-content" class="max-w-3xl mx-auto text-center" style="position: relative;z-index: 1">
                </div>
    
            </div>
        </div>
    </section>`,
        data() {
            return {
                expanded: false, 
                tab: null,
                announcementTextStyle: "before:bg-purple-500",
                announcementLinkStyle: "text-slate-300",
                announcementLinkHoverStyle: "hover:text-white",
                announcementLinkGradientStyle: "[background:linear-gradient(theme(colors.purple.500),_theme(colors.purple.500))_padding-box,_linear-gradient(theme(colors.purple.500),_theme(colors.purple.200)_75%,_theme(colors.transparent)_100%)_border-box]",
                announcementLinkBeforeStyle:"before:bg-slate-800/50",
                landingPageAnnouncementTextStyle: "text-purple-500",
                landingPageSubHeroTextStyle: "text-slate-300",
                getStartedButtonPrimaryStyle: "text-slate-900",
                getStartedButtonGradientStyle: "bg-gradient-to-r from-white/80 via-white to-white/80",
                getStartedButtonHoverStyle: "hover:bg-white",
                getStartedArrowStyle: "text-purple-500",
                docsButtonPrimaryStyle: "text-slate-200",
                docsButtonHoverStyle: "hover:text-white",
                docsButtonBackgroundStyle: "bg-slate-900",
                docsIconStyle: "fill-slate-300"
            };
        },
    });
                    