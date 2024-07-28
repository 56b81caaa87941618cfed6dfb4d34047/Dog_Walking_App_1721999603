/* Summary: HTML file that describes the header section including:
1. Site branding with a logo on the left.
2. Desktop navigation menu with links to different pages in the middle.
3. Desktop sign-in and sign-up links on the right.
*/ 

Vue.component("purple_header_component_1721999604", {
    template: `
    <header class="bg-gradient-to-r from-purple-900 to-blue-900 py-6 px-8 shadow-lg">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <div class="flex items-center">
                <a href="index.html" class="flex items-center">
                    <img src="./images/logo.svg" alt="Stellar" class="h-10 w-10 mr-3">
                    <span class="text-purple-400 text-3xl font-bold">Stellar</span>
                </a>
                <nav class="hidden md:flex ml-12">
                    <a href="Book Walks.html" class="text-white hover:text-purple-300 mx-5 text-lg">Book Walks</a>
                    <a href="Walker Profiles.html" class="text-white hover:text-purple-300 mx-5 text-lg">Walker Profiles</a>
                    <a href="Doggy Day Care.html" class="text-white hover:text-purple-300 mx-5 text-lg">Doggy Day Care</a>
                    <a href="Pet Supplies.html" class="text-white hover:text-purple-300 mx-5 text-lg">Pet Supplies</a>
                    <a href="My Account.html" class="text-white hover:text-purple-300 mx-5 text-lg">My Account</a>
                </nav>
            </div>
            <div class="flex items-center">
                <button @click="openMyAccount" class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                    My Account
                </button>
                <button @click="expanded = !expanded" class="ml-6 text-white md:hidden">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </div>
        <nav x-show="expanded" class="md:hidden mt-6">
            <a href="Book Walks.html" class="block text-white hover:text-purple-300 py-3 text-lg">Book Walks</a>
            <a href="Walker Profiles.html" class="block text-white hover:text-purple-300 py-3 text-lg">Walker Profiles</a>
            <a href="Doggy Day Care.html" class="block text-white hover:text-purple-300 py-3 text-lg">Doggy Day Care</a>
            <a href="Pet Supplies.html" class="block text-white hover:text-purple-300 py-3 text-lg">Pet Supplies</a>
            <a href="My Account.html" class="block text-white hover:text-purple-300 py-3 text-lg">My Account</a>
        </nav>
    </header>
    data() {
        return {
            expanded: false,
        };
    },
        methods: {
            // Start of openMyAccount method
            openMyAccount() {
                // Add logic to open My Account section
                console.log('Opening My Account section');
            }
            // End of openMyAccount method
        },
    });
                    