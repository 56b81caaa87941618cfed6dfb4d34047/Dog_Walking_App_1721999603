/* Summary: HTML file that describes the header section including:
1. Site branding with a logo on the left.
2. Desktop navigation menu with links to different pages in the middle.
3. Desktop sign-in and sign-up links on the right.
*/ 

Vue.component("purple_header_component_1721999604", {
    template: `
    <header class="bg-black py-4 px-6">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <div class="flex items-center">
                <a href="index.html" class="flex items-center">
                    <img src="./images/logo.svg" alt="Stellar" class="h-8 w-8 mr-2">
                    <span class="text-red-600 text-2xl font-bold">Stellar</span>
                </a>
                <nav class="hidden md:flex ml-10">
                    <a href="Book Walks.html" class="text-gray-300 hover:text-white mx-4">Book Walks</a>
                    <a href="Walker Profiles.html" class="text-gray-300 hover:text-white mx-4">Walker Profiles</a>
                    <a href="Doggy Day Care.html" class="text-gray-300 hover:text-white mx-4">Doggy Day Care</a>
                    <a href="Pet Supplies.html" class="text-gray-300 hover:text-white mx-4">Pet Supplies</a>
                    <a href="My Account.html" class="text-gray-300 hover:text-white mx-4">My Account</a>
                </nav>
            </div>
            <div class="flex items-center">
                <button @click="openMyAccount" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    My Account
                </button>
                <button @click="expanded = !expanded" class="ml-4 text-white md:hidden">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </div>
        <nav x-show="expanded" class="md:hidden mt-4">
            <a href="Book Walks.html" class="block text-gray-300 hover:text-white py-2">Book Walks</a>
            <a href="Walker Profiles.html" class="block text-gray-300 hover:text-white py-2">Walker Profiles</a>
            <a href="Doggy Day Care.html" class="block text-gray-300 hover:text-white py-2">Doggy Day Care</a>
            <a href="Pet Supplies.html" class="block text-gray-300 hover:text-white py-2">Pet Supplies</a>
            <a href="My Account.html" class="block text-gray-300 hover:text-white py-2">My Account</a>
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
                    