import { ethers } from 'ethers';

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
                <!-- Crypto Payment Form -->
                <div id="crypto-payment-form" class="max-w-md mx-auto bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl shadow-lg p-8 mb-8">
                    <h2 class="text-2xl font-bold text-white mb-6">Pay for Dog Walking</h2>
                    <div class="mb-6">
                        <label for="service" class="block text-sm font-medium text-purple-200 mb-2">Select Service</label>
                        <select id="service" class="w-full bg-purple-800 text-white rounded-xl p-3 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400">
                            <option value="30">30 min walk - $20</option>
                            <option value="60">60 min walk - $35</option>
                            <option value="group">Group walk - $15</option>
                        </select>
                    </div>
                    <div class="mb-6">
                        <label for="crypto-currency" class="block text-sm font-medium text-purple-200 mb-2">Pay with</label>
                        <div class="flex items-center bg-purple-800 rounded-xl p-3">
                            <input type="number" placeholder="0" class="w-full bg-transparent text-white text-2xl font-semibold focus:outline-none" />
                            <select id="crypto-currency" class="ml-2 bg-purple-700 text-white rounded-xl p-2 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400">
                                <option value="eth">ETH</option>
                                <option value="dai">DAI</option>
                                <option value="usdc">USDC</option>
                            </select>
                        </div>
                    </div>
                    <div class="text-purple-200 text-sm mb-6">
                        1 ETH = $1,800 USD
                    </div>
                    <button id="pay-button" class="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl py-4 px-6 font-semibold hover:from-purple-600 hover:to-indigo-600 transition duration-300 shadow-md">Pay Now</button>
                </div>
                <!-- Hero content -->
                <div id="hero-content" class="max-w-3xl mx-auto text-center" style="position: relative;z-index: 1">
                </div>
    
            </div>
        </div>
    </section>`,
    methods: {
        // Start of payNow method
        async payNow() {
            if (typeof window.ethereum !== 'undefined') {
                try {
                    await window.ethereum.request({ method: 'eth_requestAccounts' });
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    const signer = provider.getSigner();
                    const address = await signer.getAddress();
                    const amount = ethers.utils.parseEther('0.1'); // Example amount
                    const tx = await signer.sendTransaction({
                        to: '0x1234567890123456789012345678901234567890', // Replace with actual recipient address
                        value: amount
                    });
                    console.log('Transaction sent:', tx.hash);
                    await tx.wait();
                    console.log('Transaction confirmed');
                } catch (err) {
                    console.error('Failed to send transaction:', err);
                }
            } else {
                console.log('MetaMask is not installed');
            }
        },
        // End of payNow method
    },
    mounted() {
        const payButton = document.getElementById('pay-button');
        if (payButton) {
            payButton.addEventListener('click', this.payNow);
        }
    },
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
                    