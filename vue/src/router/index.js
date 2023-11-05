import Vue from 'vue';
import VueRouter  from 'vue-router';
import EmployeeList from '../components/EmployeeList.vue';
import EmployeeForm from '../components/EmployeeForm.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/employees',
    name: 'employee-list',
    component: EmployeeList,
  },
  {
    path: '/create',
    name: 'create-employee',
    component: EmployeeForm,
  },
  {
    path: '/edit/:id',
    name: 'edit-employee',
    component: EmployeeForm,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history', // Optional: Use history mode for cleaner URLs
});

export default router;
