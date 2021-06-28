import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistation from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
import HousesList from './pages/houses/HousesList.vue'
import HouseDetail from './pages/houses/HouseDetail.vue'
import HouseRegistration from './pages/houses/HouseRegistration.vue'
import ApartmentsList from './pages/apartments/ApartmentsList.vue'
import ApartmentDetail from './pages/apartments/ApartmentDetail.vue'
import ApartmentRegistration from './pages/apartments/ApartmentRegistration.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/houses' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactCoach } // /coaches/c1/contact
      ]
    },

    { path: '/register', component: CoachRegistation },
    { path: '/requests', component: RequestsReceived },
    { path: '/:notFound(.*)', component: NotFound },
    { path: '/houses', component: HousesList},
    { path: '/houses/:id',
      component: HouseDetail,
      props: true
    },
    { path: '/registerHouse', component: HouseRegistration },
    { path: '/apartments', component: ApartmentsList},
    { path: '/apartments/:id',
      component: ApartmentDetail,
      props: true
    },
    { path: '/registerApartment', component: ApartmentRegistration },
  ]
});

export default router;
