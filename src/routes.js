import DebtMain from './components/debt/DebtMain.vue';
import CreatorMain from './components/creator/CreatorMain.vue';
import ClientMain from './components/client/ClientMain.vue';
import LoginMain from './components/login/LoginMain.vue';

export const routes = [
  { path: '', redirect: '/debts' },
  { path: '/debts', component: DebtMain },
  { path: '/login', component: LoginMain },
  { path: '/creator', component: CreatorMain },
];
