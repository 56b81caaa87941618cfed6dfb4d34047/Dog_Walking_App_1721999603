Vue.component("purple_hero_component_1721999604", {
    template: `
    <div class="bg-gradient-to-br from-purple-900 to-indigo-900 w-full h-full p-20 rounded-xl shadow-lg">
        <div class="bg-gradient-to-r from-purple-800 to-indigo-800 p-8 rounded-lg shadow-lg">
            <h2 class="text-3xl font-bold mb-6 text-center text-purple-200"><i class='bx bxs-dog text-4xl mr-2 text-purple-300'></i>Describe Your Dog and Their Diet</h2>
            <form class="space-y-6">
                <div class="grid grid-cols-2 gap-6">
                    <div class="flex-1">
                        <label class="block text-sm font-medium text-purple-200 mb-2" for="dogName">
                            <i class='bx bxs-dog text-2xl mr-2 text-purple-300'></i>Dog's Name
                        </label>
                        <input type="text" id="dogName" name="dogName" class="w-full px-3 py-2 bg-purple-700 border border-indigo-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-white">
                    </div>
                    <div class="flex-1">
                        <label class="block text-sm font-medium text-purple-200 mb-2" for="dogBreed">
                            <i class='bx bxs-dog-alt text-2xl mr-2 text-purple-300'></i>Breed
                        </label>
                        <input type="text" id="dogBreed" name="dogBreed" class="w-full px-3 py-2 bg-purple-700 border border-indigo-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-white">
                    </div>
                </div>
                <div>
                    <label class="block text-sm font-medium text-purple-200 mb-2" for="dogAge">
                        <i class='bx bx-time-five text-2xl mr-2 text-purple-300'></i>Age
                    </label>
                    <input type="number" id="dogAge" name="dogAge" class="w-full px-3 py-2 bg-purple-700 border border-indigo-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-white">
                </div>
                <div>
                    <label class="block text-sm font-medium text-purple-200 mb-2" for="dogDiet">
                        <i class='bx bx-bowl-hot text-2xl mr-2 text-purple-300'></i>Current Diet
                    </label>
                    <textarea id="dogDiet" name="dogDiet" rows="3" class="w-full px-3 py-2 bg-purple-700 border border-indigo-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-white"></textarea>
                </div>
                <div>
                    <label class="block text-sm font-medium text-purple-200 mb-2" for="dietConcerns">
                        <i class='bx bx-error-circle text-2xl mr-2 text-purple-300'></i>Dietary Concerns or Allergies
                    </label>
                    <textarea id="dietConcerns" name="dietConcerns" rows="3" class="w-full px-3 py-2 bg-purple-700 border border-indigo-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-white"></textarea>
                </div>
                <div class="flex justify-center">
                    <button type="submit" class="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-md shadow-md hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
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