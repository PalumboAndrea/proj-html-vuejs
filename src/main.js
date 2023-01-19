import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faHelmetUn } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faBars, faHelmetUn, faArrowRight, faCircleLeft, faCircleRight, faAngleLeft, faAngleRight)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
