import DebtMain from './components/debt/DebtMain.vue';
import CreatorMain from './components/creator/CreatorMain.vue';
import ClientMain from './components/client/ClientMain.vue';

export const routes = [
  { path: '', redirect: '/debts' },
  { path: '/debts', component: DebtMain },
  { path: '/creator', component: CreatorMain },
  { path: '/clients', component: ClientMain },
];
