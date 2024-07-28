/* Summary: The blank component contains the following two parts:
- To the left: There is an empty div with text on top and bottom.
- To the right: There is an empty div.

If the user asks you to insert components left and right of each other, first wrap them into `<div class="grid"> </div` and then use the following syntax:
<div class="grid">
    <!-- these components appear to the left side -->
    <div id="left-side-container" class="flex"> Left side part here </div>

    <!-- these components appear to the right side -->
    <div id="right-side-container" class="flex"> Right side part here</div>
</div>
*/
Vue.component("blank_component_1722180111", {
    template: `
        <div>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <section id="blank-section" class="bg-white dark:bg-gray-900 flex-1">
                <div id="blank-container" class="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div class="bg-gray-900 p-8 rounded-lg shadow-lg border border-purple-500">
                        <h2 class="text-2xl font-bold mb-6 text-white">Dog Drop-off and Pick-up Form</h2>
                        <form @submit.prevent="submitForm">
                            <div class="mb-4">
                                <label for="dogName" class="block text-sm font-medium text-purple-300 mb-2">Dog's Name</label>
                                <input type="text" id="dogName" v-model="dogName" class="w-full px-3 py-2 bg-gray-800 text-white border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" required>
                            </div>
                            <div class="mb-4">
                                <label for="dropOffTime" class="block text-sm font-medium text-purple-300 mb-2">Drop-off Time</label>
                                <input type="datetime-local" id="dropOffTime" v-model="dropOffTime" class="w-full px-3 py-2 bg-gray-800 text-white border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" required>
                            </div>
                            <div class="mb-4">
                                <label for="pickUpTime" class="block text-sm font-medium text-purple-300 mb-2">Pick-up Time</label>
                                <input type="datetime-local" id="pickUpTime" v-model="pickUpTime" class="w-full px-3 py-2 bg-gray-800 text-white border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" required>
                            </div>
                            <div class="mb-4">
                                <label for="additionalInfo" class="block text-sm font-medium text-purple-300 mb-2">Additional Information</label>
                                <textarea id="additionalInfo" v-model="additionalInfo" rows="3" class="w-full px-3 py-2 bg-gray-800 text-white border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"></textarea>
                            </div>
                            <button type="submit" class="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-300 ease-in-out">Submit</button>
                        </form>
                    </div>
                </div>
            </section>  
        </div>          
    `,
    data() {
        return {
            expanded: false,
            tab: null,
            dogName: '',
            dropOffTime: '',
            pickUpTime: '',
            additionalInfo: ''
        };
    },
    methods: {
        // Start of submitForm method
        submitForm() {
            // Here you would typically send the form data to a server
            console.log('Form submitted:', {
                dogName: this.dogName,
                dropOffTime: this.dropOffTime,
                pickUpTime: this.pickUpTime,
                additionalInfo: this.additionalInfo
            });
            // Reset form fields after submission
            this.dogName = '';
            this.dropOffTime = '';
            this.pickUpTime = '';
            this.additionalInfo = '';
        }
        // End of submitForm method
});
