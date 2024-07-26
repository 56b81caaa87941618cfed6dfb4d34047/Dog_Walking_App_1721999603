Vue.component('contact_form_1722021497', {
  template: `
    <main class="flex justify-center align-center p-10 bg-purple-100">
      <div class="w-fit max-w-lg p-8 bg-white shadow-xl rounded-2xl border-2 border-purple-300">
        <div>
          <h3 class="text-purple-800 font-bold text-2xl">Get in Touch for Dog Walking Services</h3>
          <p class="mt-3 text-purple-600 w-fit">We'll take your furry friend for a fun and safe walk!</p>
        </div>
        <form @submit.prevent class="space-y-6 mt-6">
          <div>
            <label class="font-medium text-purple-700">Your Name</label>
            <input type="text" required class="w-full mt-2 px-4 py-3 text-purple-800 bg-purple-50 border-2 border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 shadow-md rounded-lg" />
          </div>
          <div>
            <label class="font-medium text-purple-700">Your Email</label>
            <input type="email" required class="w-full mt-2 px-4 py-3 text-purple-800 bg-purple-50 border-2 border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 shadow-md rounded-lg" />
          </div>
          <div>
            <label class="font-medium text-purple-700">Your Phone Number</label>
            <div class="relative mt-2">
              <select v-model="countryCode" class="absolute left-0 top-0 bottom-0 text-sm bg-purple-200 outline-none rounded-l-lg px-3 text-purple-800 border-2 border-purple-300">
                <option value="US">US</option>
                <option value="ES">ES</option>
                <option value="MR">MR</option>
              </select>
              <input type="number" :placeholder="getPhoneNumberPlaceholder(countryCode)" required class="w-full pl-20 pr-4 py-3 appearance-none bg-purple-50 border-2 border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 shadow-md rounded-lg text-purple-800" />
            </div>
          </div>
          <div>
            <label class="font-medium text-purple-700">Dog's Name</label>
            <input type="text" required class="w-full mt-2 px-4 py-3 text-purple-800 bg-purple-50 border-2 border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 shadow-md rounded-lg" />
          </div>
          <div>
            <label class="font-medium text-purple-700">Services</label>
            <ul class="grid gap-y-3 gap-x-6 flex-wrap grid-cols-2 mt-3">
              <li v-for="(item, idx) in servicesItems" :key="idx" class="flex items-center gap-x-3 text-sm">
                <input :id="'service-' + idx" type="checkbox" class="w-5 h-5 bg-purple-100 border-2 border-purple-400 rounded-md focus:ring-2 focus:ring-purple-300 text-purple-600 cursor-pointer" />
                <label :for="'service-' + idx" class="cursor-pointer text-purple-700">{ item }</label>
              </li>
            </ul>
          </div>
          <div>
            <label class="font-medium text-purple-700">Breed</label>
            <input type="text" required class="w-full mt-2 px-4 py-3 text-purple-800 bg-purple-50 border-2 border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 shadow-md rounded-lg" />
          </div>
          <div>
            <label class="font-medium text-purple-700">Any Special Needs?</label>
            <textarea required class="w-full mt-2 h-36 px-4 py-3 resize-none appearance-none bg-purple-50 border-2 border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 shadow-md rounded-lg text-purple-800"></textarea>
          </div>
          <button class="w-full px-6 py-3 text-white font-medium bg-purple-600 hover:bg-purple-500 active:bg-purple-700 rounded-lg shadow-lg transition duration-150 ease-in-out transform hover:scale-105">Submit</button>
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