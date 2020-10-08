import axios from 'axios';
import qs from 'qs';
export default function({ app, redirect ,store}) {
	//console.log(store.state.user)
	return app
		.$axios({
			method: 'POST',
			data: qs.stringify({
				act_mode: 'mydata',
			}),
			url: '/user.ashx',
		})
		.then(response => {
			// store.commit['user/commitDataUser']
			store.commit('user/commitDataUser', response.data.user);
			// console.log(response.data);
			// if (response.data.user.user_type == 'cn'){
			// 	redirect('/cn/u/list')
			// }else{
			// 	redirect('/tw/u/list')
			// }
			// redirect('/tw/u/list');
			//idea:連結改成/regiteration，有登入狀態的話redirect到/lang/u/list，沒有的話進login
		})
		.catch(response => {
			// console.log(response);
			// redirect('/login');
			redirect('/registration');
			// if (response.data.user.user_type == 'cn'){
			// 	redirect('/cn/login')
			// }else{
			// 	redirect('/tw/login')
			// }
		});
}
