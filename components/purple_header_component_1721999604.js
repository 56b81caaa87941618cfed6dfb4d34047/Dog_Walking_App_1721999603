/* Summary: HTML file that describes the header section including:
1. Site branding with a logo on the left.
2. Desktop navigation menu with links to different pages in the middle.
3. Desktop sign-in and sign-up links on the right.
*/ 

Vue.component("purple_header_component_1721999604", {
    template: `
    <header class="w-full z-30" id="header-section-container">
        <div class="max-w-6xl mx-auto px-6 sm:px-8 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 shadow-lg">
            <div class="flex items-center justify-between h-20 md:h-24">
    
                <div id="site-branding" class="flex-1"><a id="logo-link" class="inline-flex items-center space-x-2 transition duration-300 ease-in-out transform hover:scale-105" href="index.html" aria-label="Cruip"><img id="logo-image" class="max-w-none rounded-full shadow-md" src="./images/logo.svg" width="48" height="48" alt="Stellar"><span class="text-xl font-bold text-white">Stellar</span></a></div>
    
                <nav id="desktop-navigation" class="hidden md:flex md:grow">
    
                    <ul id="desktop-menu-links" class="flex grow justify-center flex-wrap items-center space-x-1">
                        <li><a id="Book Walks-link" class="font-medium text-sm px-4 py-2 mx-1 lg:mx-2 transition duration-300 ease-in-out text-white hover:text-purple-200 hover:bg-purple-600 rounded-lg" href="Book Walks.html"><i class='bx bx-walk mr-2'></i>Book Walks</a></li>
                        <li><a id="Walker Profiles-link" class="font-medium text-sm px-4 py-2 mx-1 lg:mx-2 transition duration-300 ease-in-out text-white hover:text-purple-200 hover:bg-purple-600 rounded-lg" href="Walker Profiles.html"><i class='bx bx-user-pin mr-2'></i>Walker Profiles</a></li>
                        <li><a id="Doggy Day Care-link" class="font-medium text-sm px-4 py-2 mx-1 lg:mx-2 transition duration-300 ease-in-out text-white hover:text-purple-200 hover:bg-purple-600 rounded-lg" href="Doggy Day Care.html"><i class='bx bx-dog mr-2'></i>Doggy Day Care</a></li>
                        <li><a id="Pet Supplies-link" class="font-medium text-sm px-4 py-2 mx-1 lg:mx-2 transition duration-300 ease-in-out text-white hover:text-purple-200 hover:bg-purple-600 rounded-lg" href="Pet Supplies.html"><i class='bx bx-store mr-2'></i>Pet Supplies</a></li>
                        <li><a id="My Account-link" class="font-medium text-sm px-4 py-2 mx-1 lg:mx-2 transition duration-300 ease-in-out text-white hover:text-purple-200 hover:bg-purple-600 rounded-lg" href="My Account.html"><i class='bx bx-user-circle mr-2'></i>My Account</a></li>
                    </ul>
    
                </nav>
    
                <div id="desktop-profile" class="flex-1 flex justify-end items-center">
                    <button id="my-account-button" class="font-medium text-sm whitespace-nowrap transition duration-300 ease-in-out flex items-center text-white hover:text-purple-300 bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-700 hover:to-purple-500 px-6 py-3 rounded-lg shadow-md transform hover:scale-105" @click="openMyAccount">
                        <i class='bx bx-user-circle text-2xl mr-2'></i>
                        My Account
                    </button>
                </div>
    
                <div id="mobile-menu" class="md:hidden flex items-center ml-4" x-data="{ expanded: false }">
    
                    <button id="hamburger-button" class="hamburger p-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition duration-300 ease-in-out" :class="{ 'active': expanded }" @click.stop="expanded = !expanded" aria-controls="mobile-nav" :aria-expanded="expanded">
                        <span class="sr-only">Menu</span>
                        <svg id="hamburger-icon" class="w-6 h-6 fill-current transition duration-300 ease-in-out text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <rect y="2" width="20" height="2" rx="1" />
                            <rect y="9" width="20" height="2" rx="1" />
                            <rect y="16" width="20" height="2" rx="1" />
                        </svg>
                    </button>
    
                    <nav id="mobile-nav" class="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" x-ref="mobileNav" :style="expanded ? 'max-height: ' + $refs.mobileNav.scrollHeight + 'px; opacity: 1' : 'max-height: 0; opacity: .8'" @click.outside="expanded = false" @keydown.escape.window="expanded = false" x-cloak>
                        <ul id="mobile-nav-list" class="border border-purple-400 rounded-lg px-4 py-2 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 shadow-lg">
                            <li><a id="mobile-Book Walks-link" class="flex font-medium text-sm py-2 px-3 text-white hover:text-purple-200 hover:bg-purple-600 rounded-md transition duration-300 ease-in-out" href="Book Walks.html"><i class='bx bx-walk mr-2'></i>Book Walks</a></li>
                            <li><a id="mobile-Walker Profiles-link" class="flex font-medium text-sm py-2 px-3 text-white hover:text-purple-200 hover:bg-purple-600 rounded-md transition duration-300 ease-in-out" href="Walker Profiles.html"><i class='bx bx-user-pin mr-2'></i>Walker Profiles</a></li>
                            <li><a id="mobile-Doggy Day Care-link" class="flex font-medium text-sm py-2 px-3 text-white hover:text-purple-200 hover:bg-purple-600 rounded-md transition duration-300 ease-in-out" href="Doggy Day Care.html"><i class='bx bx-dog mr-2'></i>Doggy Day Care</a></li>
                            <li><a id="mobile-Pet Supplies-link" class="flex font-medium text-sm py-2 px-3 text-white hover:text-purple-200 hover:bg-purple-600 rounded-md transition duration-300 ease-in-out" href="Pet Supplies.html"><i class='bx bx-store mr-2'></i>Pet Supplies</a></li>
                            <li><a id="mobile-My Account-link" class="flex font-medium text-sm py-2 px-3 text-white hover:text-purple-200 hover:bg-purple-600 rounded-md transition duration-300 ease-in-out" href="My Account.html"><i class='bx bx-user-circle mr-2'></i>My Account</a></li>
                        </ul>
                    </nav>
    
                </div>
    
            </div>
        </div>
    </header>`,
        data() {
            return {
                expanded: false, 
                tab: null,
                textStylePrimary: 'text-white',
                hoverTextStylePrimary: 'hover:text-purple-200',
                signUpButtonText: "text-white",
                signUpButtonHover: "hover:text-purple-200",
                signUpButtonGradient: "bg-purple-600",
                signUpButtonArrow: "text-purple-300",
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
                    