/* Summary: HTML file that describes the header section including:
1. Site branding with a logo on the left.
2. Desktop navigation menu with links to different pages in the middle.
3. Desktop sign-in and sign-up links on the right.
*/ 

Vue.component("purple_header_component_1721999604", {
    template: `
    <header class="w-full z-30" id="header-section-container">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 bg-gradient-to-r from-purple-800 to-purple-600">
            <div class="flex items-center justify-between h-16 md:h-20">
    
                <div id="site-branding" class="flex-1"><a id="logo-link" class="inline-flex" href="index.html" aria-label="Cruip"><img id="logo-image" class="max-w-none" src="./images/logo.svg" width="38" height="38" alt="Stellar"></a></div>
    
                <nav id="desktop-navigation" class="hidden md:flex md:grow">
    
                    <ul id="desktop-menu-links" class="flex grow justify-center flex-wrap items-center">
                        <li><a id="Book Walks-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-purple-200" href="Book Walks.html">Book Walks</a></li>
                        <li><a id="Walker Profiles-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-purple-200" href="Walker Profiles.html">Walker Profiles</a></li>
                        <li><a id="Doggy Day Care-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-purple-200" href="Doggy Day Care.html">Doggy Day Care</a></li>
                        <li><a id="Pet Supplies-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-purple-200" href="Pet Supplies.html">Pet Supplies</a></li>
                        <li><a id="My Account-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-purple-200" href="My Account.html">My Account</a></li>
                    </ul>
    
                </nav>
    
                <div id="desktop-profile" class="flex-1 flex justify-end items-center">
                    <a id="dog-profile-link" class="font-medium text-sm whitespace-nowrap transition duration-150 ease-in-out flex items-center text-white hover:text-purple-200" href="profile.html">
                        <i class='bx bx-dog text-2xl mr-2'></i>
                        Dog Profile
                    </a>
                </div>
    
                <div id="mobile-menu" class="md:hidden flex items-center ml-4" x-data="{ expanded: false }">
    
                    <button id="hamburger-button" class="hamburger" :class="{ 'active': expanded }" @click.stop="expanded = !expanded" aria-controls="mobile-nav" :aria-expanded="expanded">
                        <span class="sr-only">Menu</span>
                        <svg id="hamburger-icon" class="w-5 h-5 fill-current transition duration-150 ease-in-out text-white hover:text-purple-200" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <rect y="2" width="20" height="2" rx="1" />
                            <rect y="9" width="20" height="2" rx="1" />
                            <rect y="16" width="20" height="2" rx="1" />
                        </svg>
                    </button>
    
                    <nav id="mobile-nav" class="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" x-ref="mobileNav" :style="expanded ? 'max-height: ' + $refs.mobileNav.scrollHeight + 'px; opacity: 1' : 'max-height: 0; opacity: .8'" @click.outside="expanded = false" @keydown.escape.window="expanded = false" x-cloak>
                        <ul id="mobile-nav-list" class="border border-transparent rounded-lg px-4 py-1.5 bg-purple-700">
                            <li><a id="mobile-Book Walks-link" class="flex font-medium text-sm py-1.5 text-white hover:text-purple-200" href="Book Walks.html">Book Walks</a></li>
                            <li><a id="mobile-Walker Profiles-link" class="flex font-medium text-sm py-1.5 text-white hover:text-purple-200" href="Walker Profiles.html">Walker Profiles</a></li>
                            <li><a id="mobile-Doggy Day Care-link" class="flex font-medium text-sm py-1.5 text-white hover:text-purple-200" href="Doggy Day Care.html">Doggy Day Care</a></li>
                            <li><a id="mobile-Pet Supplies-link" class="flex font-medium text-sm py-1.5 text-white hover:text-purple-200" href="Pet Supplies.html">Pet Supplies</a></li>
                            <li><a id="mobile-My Account-link" class="flex font-medium text-sm py-1.5 text-white hover:text-purple-200" href="My Account.html">My Account</a></li>
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
                signUpButtonGradient: "bg-purple-700",
                signUpButtonArrow: "text-purple-300",
            };
        },
    });
                    