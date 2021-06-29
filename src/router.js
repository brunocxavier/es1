import { createRouter, createWebHistory } from 'vue-router';

import NotFound from './pages/NotFound.vue';
import HousesList from './pages/houses/HousesList.vue'
import HouseDetail from './pages/houses/HouseDetail.vue'
import HouseRegistration from './pages/houses/HouseRegistration.vue'
import HouseVisit from './pages/houses/HouseVisit.vue'
import ApartmentsList from './pages/apartments/ApartmentsList.vue'
import ApartmentDetail from './pages/apartments/ApartmentDetail.vue'
import ApartmentRegistration from './pages/apartments/ApartmentRegistration.vue'
import ApartmentVisit from './pages/apartments/ApartmentVisit.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/houses' },
    { path: '/:notFound(.*)', component: NotFound },
    { path: '/houses', component: HousesList},
    { path: '/houses/:id',
      component: HouseDetail,
      props: true,
      children: [
        { path: 'visitHouse', component: HouseVisit}
      ]
    },
    { path: '/registerHouse', component: HouseRegistration },
    { path: '/apartments', component: ApartmentsList},
    { path: '/apartments/:id',
      component: ApartmentDetail,
      props: true,
      children: [
        { path: 'visit', component: ApartmentVisit}
      ]
    },
    { path: '/registerApartment', component: ApartmentRegistration },
  ]
});

export default router;
