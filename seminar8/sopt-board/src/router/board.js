import WriteBoard from '@/pages/WriteBoard'
import {boardAuth} from './authGuard'


export const WriteBoardRoutes = {
    path: '/board/new',
    name: 'WriteBoard',
    component : WriteBoard,
    beforeEnter: boardAuth.doAuth
}