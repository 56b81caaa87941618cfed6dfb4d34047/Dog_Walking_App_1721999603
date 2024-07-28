Vue.component("purple_hero_component_1721999604", {
    template: `
    <div class="bg-yellow-400 w-full h-full p-20 rounded-xl shadow-lg">
        <div class="bg-white p-8 rounded-lg shadow-lg">
            <h2 class="text-3xl font-bold mb-6 text-center">Describe Your Dog and Their Diet</h2>
            <form class="space-y-6">
                <div class="grid grid-cols-2 gap-6">
                    <div class="flex-1">
                        <label class="block text-sm font-medium text-gray-700 mb-2" for="dogName">
                            <i class='bx bxs-dog text-2xl mr-2 text-yellow-500'></i>Dog's Name
                        </label>
                        <input type="text" id="dogName" name="dogName" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500">
                    </div>
                    <div class="flex-1">
                        <label class="block text-sm font-medium text-gray-700 mb-2" for="dogBreed">
                            <i class='bx bxs-bone text-2xl mr-2 text-yellow-500'></i>Breed
                        </label>
                        <input type="text" id="dogBreed" name="dogBreed" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500">
                    </div>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2" for="dogAge">
                        <i class='bx bx-calendar text-2xl mr-2 text-yellow-500'></i>Age
                    </label>
                    <input type="number" id="dogAge" name="dogAge" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2" for="dogDiet">
                        <i class='bx bx-food-menu text-2xl mr-2 text-yellow-500'></i>Current Diet
                    </label>
                    <textarea id="dogDiet" name="dogDiet" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"></textarea>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2" for="dietConcerns">
                        <i class='bx bx-message-square-detail text-2xl mr-2 text-yellow-500'></i>Dietary Concerns or Allergies
                    </label>
                    <textarea id="dietConcerns" name="dietConcerns" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"></textarea>
                </div>
                <div class="flex justify-center">
                    <button type="submit" class="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
                        <i class='bx bx-send mr-2'></i>Submit
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