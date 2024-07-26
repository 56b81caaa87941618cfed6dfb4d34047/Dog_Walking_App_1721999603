Vue.component('contact_form_1722021497', {
  template: `
    <main class="flex justify-center align-center p-10 bg-purple-900">
      <div class="w-fit max-w-lg p-8 bg-purple-800 shadow-2xl rounded-3xl border-2 border-purple-400">
        <div>
          <h3 class="text-purple-200 font-bold text-2xl">Get in Touch for Dog Walking Services</h3>
          <p class="mt-3 text-purple-300 w-fit">We'll take your furry friend for a fun and safe walk!</p>
        </div>
        <form @submit.prevent class="space-y-6 mt-6">
          <div>
            <label class="font-medium text-purple-300">Your Name</label>
            <input type="text" required class="w-full mt-2 px-4 py-3 text-purple-200 bg-purple-700 border-2 border-purple-500 focus:border-purple-300 focus:ring-2 focus:ring-purple-400 shadow-lg rounded-lg" />
          </div>
          <div>
            <label class="font-medium text-purple-300">Your Email</label>
            <input type="email" required class="w-full mt-2 px-4 py-3 text-purple-200 bg-purple-700 border-2 border-purple-500 focus:border-purple-300 focus:ring-2 focus:ring-purple-400 shadow-lg rounded-lg" />
          </div>
          <div>
            <label class="font-medium text-purple-300">Your Phone Number</label>
            <div class="relative mt-2">
              <select v-model="countryCode" class="absolute left-0 top-0 bottom-0 text-sm bg-purple-600 outline-none rounded-l-lg px-3 text-purple-200 border-2 border-purple-500">
                <option value="US">US</option>
                <option value="ES">ES</option>
                <option value="MR">MR</option>
              </select>
              <input type="number" :placeholder="getPhoneNumberPlaceholder(countryCode)" required class="w-full pl-20 pr-4 py-3 appearance-none bg-purple-700 border-2 border-purple-500 focus:border-purple-300 focus:ring-2 focus:ring-purple-400 shadow-lg rounded-lg text-purple-200" />
            </div>
          </div>
          <div>
            <label class="font-medium text-purple-300">Dog's Name</label>
            <input type="text" required class="w-full mt-2 px-4 py-3 text-purple-200 bg-purple-700 border-2 border-purple-500 focus:border-purple-300 focus:ring-2 focus:ring-purple-400 shadow-lg rounded-lg" />
          </div>
          <div>
            <label class="font-medium text-purple-300">Services</label>
            <ul class="grid gap-y-3 gap-x-6 flex-wrap grid-cols-2 mt-3">
              <li v-for="(item, idx) in servicesItems" :key="idx" class="flex items-center gap-x-3 text-sm">
                <input :id="'service-' + idx" type="checkbox" class="w-5 h-5 bg-purple-600 border-2 border-purple-400 rounded-md focus:ring-2 focus:ring-purple-300 text-purple-300 cursor-pointer" />
                <label :for="'service-' + idx" class="cursor-pointer text-purple-300">{ item }</label>
              </li>
            </ul>
          </div>
          <div>
            <label class="font-medium text-purple-300">Dog's Weight (lbs)</label>
            <input type="number" required class="w-full mt-2 px-4 py-3 text-purple-200 bg-purple-700 border-2 border-purple-500 focus:border-purple-300 focus:ring-2 focus:ring-purple-400 shadow-lg rounded-lg" />
          </div>
          <div>
            <label class="font-medium text-purple-300">Dog's Tendencies</label>
            <textarea required class="w-full mt-2 h-24 px-4 py-3 resize-none appearance-none bg-purple-700 border-2 border-purple-500 focus:border-purple-300 focus:ring-2 focus:ring-purple-400 shadow-lg rounded-lg text-purple-200" placeholder="e.g., friendly, energetic, shy..."></textarea>
          </div>
          <div>
            <label class="font-medium text-purple-300">Caretaking Information</label>
            <textarea required class="w-full mt-2 h-24 px-4 py-3 resize-none appearance-none bg-purple-700 border-2 border-purple-500 focus:border-purple-300 focus:ring-2 focus:ring-purple-400 shadow-lg rounded-lg text-purple-200" placeholder="e.g., feeding schedule, medication, special needs..."></textarea>
          </div>
          <div>
          <div>
            <label class="font-medium text-purple-300">Breed</label>
            <input type="text" required class="w-full mt-2 px-4 py-3 text-purple-200 bg-purple-700 border-2 border-purple-500 focus:border-purple-300 focus:ring-2 focus:ring-purple-400 shadow-lg rounded-lg" />
          </div>
          <div>
            <label class="font-medium text-purple-300">Any Special Needs?</label>
            <textarea required class="w-full mt-2 h-36 px-4 py-3 resize-none appearance-none bg-purple-700 border-2 border-purple-500 focus:border-purple-300 focus:ring-2 focus:ring-purple-400 shadow-lg rounded-lg text-purple-200"></textarea>
          </div>
          <button class="w-full px-6 py-3 text-purple-900 font-medium bg-purple-300 hover:bg-purple-200 active:bg-purple-400 rounded-lg shadow-lg transition duration-150 ease-in-out transform hover:scale-105">Submit</button>
        </form>
      </div>
    </main>
  `,
  delimiters: ['{', '}'],
  data() {
    return {
      expanded: false,
      data: null,
      servicesItems: [
        '30 Minute Walk',
        '60 Minute Walk',
        'Dog Park Visit',
        'Overnight Sitting',
        'Training Session'
      ],
      countryCode: 'US'
    };
  },
  methods: {
    getPhoneNumberPlaceholder(countryCode) {
      switch (countryCode) {
        case 'US':
          return '+1 (555) 000-0000';
        case 'ES':
          return '+34 000 000 000';
        case 'MR':
          return '+222 000 0000';
        default:
          return '+1 (555) 000-0000';
      }
    }
  }
});