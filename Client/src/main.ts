import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import './index.css'
import { router } from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faPagelines } from '@fortawesome/free-brands-svg-icons/faPagelines'

/* add icons to the library */
library.add(
  faUser,
  faChevronDown,
  faPagelines
)

const app = createApp(App)
app.component('font-awesome-icon',FontAwesomeIcon)
app.use(router)
app.mount('#app')

