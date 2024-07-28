Vue.component("purple_hero_component_1721999604", {
    template: `
    <div class="bg-gradient-to-br from-purple-900 to-indigo-900 w-full h-full p-20 rounded-xl shadow-lg">
        <div class="bg-gradient-to-r from-purple-800 to-indigo-800 p-8 rounded-lg shadow-lg">
            <h2 class="text-3xl font-bold mb-6 text-center text-purple-200"><i class='bx bxs-dog text-4xl mr-2 text-purple-300'></i>Dog Drop Off and Pickup Times</h2>
            <form class="space-y-6">
                <div class="grid grid-cols-2 gap-6">
                    <div class="flex-1">
                        <label class="block text-sm font-medium text-purple-200 mb-2" for="dogName">
                            <i class='bx bxs-dog text-2xl mr-2 text-purple-300'></i>Dog's Name
                        </label>
                        <input type="text" id="dogName" name="dogName" class="w-full px-3 py-2 bg-purple-700 border border-indigo-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-white">
                    </div>
                    <div class="flex-1">
                        <label class="block text-sm font-medium text-purple-200 mb-2" for="ownerName">
                            <i class='bx bxs-user text-2xl mr-2 text-purple-300'></i>Owner's Name
                        </label>
                        <input type="text" id="ownerName" name="ownerName" class="w-full px-3 py-2 bg-purple-700 border border-indigo-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-white">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-6">
                    <div class="flex-1">
                        <label class="block text-sm font-medium text-purple-200 mb-2" for="dropOffDate">
                            <i class='bx bx-calendar text-2xl mr-2 text-purple-300'></i>Drop Off Date
                        </label>
                        <input type="date" id="dropOffDate" name="dropOffDate" class="w-full px-3 py-2 bg-purple-700 border border-indigo-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-white">
                    </div>
                    <div class="flex-1">
                        <label class="block text-sm font-medium text-purple-200 mb-2" for="dropOffTime">
                            <i class='bx bx-time text-2xl mr-2 text-purple-300'></i>Drop Off Time
                        </label>
                        <input type="time" id="dropOffTime" name="dropOffTime" class="w-full px-3 py-2 bg-purple-700 border border-indigo-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-white">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-6">
                    <div class="flex-1">
                        <label class="block text-sm font-medium text-purple-200 mb-2" for="pickupDate">
                            <i class='bx bx-calendar text-2xl mr-2 text-purple-300'></i>Pickup Date
                        </label>
                        <input type="date" id="pickupDate" name="pickupDate" class="w-full px-3 py-2 bg-purple-700 border border-indigo-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-white">
                    </div>
                    <div class="flex-1">
                        <label class="block text-sm font-medium text-purple-200 mb-2" for="pickupTime">
                            <i class='bx bx-time text-2xl mr-2 text-purple-300'></i>Pickup Time
                        </label>
                        <input type="time" id="pickupTime" name="pickupTime" class="w-full px-3 py-2 bg-purple-700 border border-indigo-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-white">
                    </div>
                </div>
                <div>
                    <label class="block text-sm font-medium text-purple-200 mb-2" for="specialInstructions">
                        <i class='bx bx-message-detail text-2xl mr-2 text-purple-300'></i>Special Instructions
                    </label>
                    <textarea id="specialInstructions" name="specialInstructions" rows="3" class="w-full px-3 py-2 bg-purple-700 border border-indigo-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-white"></textarea>
                </div>
                <div class="flex justify-center">
                    <button type="submit" class="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-md shadow-md hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <i class='bx bx-calendar-check mr-2'></i>Schedule Drop Off/Pickup
                    </button>
                </div>
            </form>
        </div>
    </div>
    `,
    data() {
        return {
            // Add any necessary data properties here
        }
    },
    methods: {
        // Add any necessary methods here
    }
});