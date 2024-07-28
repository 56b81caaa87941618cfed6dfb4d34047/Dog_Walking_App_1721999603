/* Summary: HTML file that describes the header section including:
1. Site branding with a logo on the left.
2. Desktop navigation menu with links to different pages in the middle.
3. Desktop sign-in and sign-up links on the right.
*/ 

Vue.component("purple_header_component_1721999604", {
    template: `
    <header class="w-full z-30" id="header-section-container">
        <div class="max-w-6xl mx-auto px-8 sm:px-10 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-700 shadow-2xl rounded-b-2xl">
            <div class="flex items-center justify-between h-20 md:h-24">
    
                <div id="site-branding" class="flex-1"><a id="logo-link" class="inline-flex items-center space-x-3 transition duration-300 ease-in-out transform hover:scale-110" href="index.html" aria-label="Cruip"><img id="logo-image" class="max-w-none rounded-full shadow-lg border-2 border-purple-300" src="./images/logo.svg" width="56" height="56" alt="Stellar"><span class="text-2xl font-extrabold text-white tracking-wide">Stellar</span></a></div>
    
                <nav id="desktop-navigation" class="hidden md:flex md:grow">
    
                    <ul id="desktop-menu-links" class="flex grow justify-center flex-wrap items-center space-x-2">
                        <li><a id="Book Walks-link" class="font-semibold text-sm px-5 py-3 mx-1 lg:mx-2 transition duration-300 ease-in-out text-white hover:text-purple-200 hover:bg-navy-600 rounded-xl shadow-md" href="Book Walks.html"><i class='bx bx-walk mr-2 text-purple-300'></i>Book Walks</a></li>
                        <li><a id="Walker Profiles-link" class="font-semibold text-sm px-5 py-3 mx-1 lg:mx-2 transition duration-300 ease-in-out text-white hover:text-purple-200 hover:bg-navy-600 rounded-xl shadow-md" href="Walker Profiles.html"><i class='bx bx-user-pin mr-2 text-purple-300'></i>Walker Profiles</a></li>
                        <li><a id="Doggy Day Care-link" class="font-semibold text-sm px-5 py-3 mx-1 lg:mx-2 transition duration-300 ease-in-out text-white hover:text-purple-200 hover:bg-navy-600 rounded-xl shadow-md" href="Doggy Day Care.html"><i class='bx bx-dog mr-2 text-purple-300'></i>Doggy Day Care</a></li>
                        <li><a id="Pet Supplies-link" class="font-semibold text-sm px-5 py-3 mx-1 lg:mx-2 transition duration-300 ease-in-out text-white hover:text-purple-200 hover:bg-navy-600 rounded-xl shadow-md" href="Pet Supplies.html"><i class='bx bx-store mr-2 text-purple-300'></i>Pet Supplies</a></li>
                        <li><a id="My Account-link" class="font-semibold text-sm px-5 py-3 mx-1 lg:mx-2 transition duration-300 ease-in-out text-white hover:text-purple-200 hover:bg-navy-600 rounded-xl shadow-md" href="My Account.html"><i class='bx bx-user-circle mr-2 text-purple-300'></i>My Account</a></li>
                    </ul>
    
                </nav>
    
                <div id="desktop-profile" class="flex-1 flex justify-end items-center">
                    <button id="my-account-button" class="font-semibold text-sm whitespace-nowrap transition duration-300 ease-in-out flex items-center text-white hover:text-purple-200 bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400 px-7 py-3 rounded-xl shadow-lg transform hover:scale-105" @click="openMyAccount">
                        <i class='bx bx-user-circle text-2xl mr-3 text-purple-200'></i>
                        My Account
                    </button>
                </div>
    
                <div id="mobile-menu" class="md:hidden flex items-center ml-4" x-data="{ expanded: false }">
    
                    <button id="hamburger-button" class="hamburger p-3 rounded-xl bg-navy-600 hover:bg-navy-500 transition duration-300 ease-in-out shadow-md" :class="{ 'active': expanded }" @click.stop="expanded = !expanded" aria-controls="mobile-nav" :aria-expanded="expanded">
                        <span class="sr-only">Menu</span>
                        <svg id="hamburger-icon" class="w-7 h-7 fill-current transition duration-300 ease-in-out text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <rect y="2" width="20" height="2" rx="1" />
                            <rect y="9" width="20" height="2" rx="1" />
                            <rect y="16" width="20" height="2" rx="1" />
                        </svg>
                    </button>
    
                    <nav id="mobile-nav" class="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" x-ref="mobileNav" :style="expanded ? 'max-height: ' + $refs.mobileNav.scrollHeight + 'px; opacity: 1' : 'max-height: 0; opacity: .8'" @click.outside="expanded = false" @keydown.escape.window="expanded = false" x-cloak>
                        <ul id="mobile-nav-list" class="border border-purple-400 rounded-xl px-5 py-3 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-700 shadow-xl">
                            <li><a id="mobile-Book Walks-link" class="flex font-semibold text-sm py-3 px-4 text-white hover:text-purple-200 hover:bg-navy-600 rounded-lg transition duration-300 ease-in-out shadow-md my-2" href="Book Walks.html"><i class='bx bx-walk mr-3 text-purple-300'></i>Book Walks</a></li>
                            <li><a id="mobile-Walker Profiles-link" class="flex font-semibold text-sm py-3 px-4 text-white hover:text-purple-200 hover:bg-navy-600 rounded-lg transition duration-300 ease-in-out shadow-md my-2" href="Walker Profiles.html"><i class='bx bx-user-pin mr-3 text-purple-300'></i>Walker Profiles</a></li>
                            <li><a id="mobile-Doggy Day Care-link" class="flex font-semibold text-sm py-3 px-4 text-white hover:text-purple-200 hover:bg-navy-600 rounded-lg transition duration-300 ease-in-out shadow-md my-2" href="Doggy Day Care.html"><i class='bx bx-dog mr-3 text-purple-300'></i>Doggy Day Care</a></li>
                            <li><a id="mobile-Pet Supplies-link" class="flex font-semibold text-sm py-3 px-4 text-white hover:text-purple-200 hover:bg-navy-600 rounded-lg transition duration-300 ease-in-out shadow-md my-2" href="Pet Supplies.html"><i class='bx bx-store mr-3 text-purple-300'></i>Pet Supplies</a></li>
                            <li><a id="mobile-My Account-link" class="flex font-semibold text-sm py-3 px-4 text-white hover:text-purple-200 hover:bg-navy-600 rounded-lg transition duration-300 ease-in-out shadow-md my-2" href="My Account.html"><i class='bx bx-user-circle mr-3 text-purple-300'></i>My Account</a></li>
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
                    