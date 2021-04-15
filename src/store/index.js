import { createStore } from 'vuex'

const authentificationModule = {
	state(){
		return{
			constUser: {username:'testinguser', password:'test1'},
			loggedinUser: {username: '', password: ''}
		}
	},
	mutations:{
		register(state, payload){
			state.loggedinUser = {...payload};
			console.log(state.loggedinUser);
		},
		login(state, payload){
			state.loggedinUser = {...payload};
			console.log(state.loggedinUser);
		}
	},
	actions:{
		register(context,payload){
			if(context.state.loggedinUser.username == payload.username ){
				throw {ok: false, text: 'There already is a user with this username: '+ payload.username};
			}else{
				context.commit('register', payload);
				return {ok: true, text: 'User registered'}
			}
		},
		login(context,payload){
			if(context.state.constUser.username == payload.username && context.state.constUser.password == payload.password ){
				context.commit('register', payload);
				return {ok: true, text: 'User logedin'};
			}else{
				throw {ok: false, text: 'Username or password not correct'};
			}
		},
		logOut(context){
			context.state.loggedinUser.username='';
			context.state.loggedinUser.password='';
		}
	},
	getters:{
		isUserAuthenticated(state){
			return state.loggedinUser.username !== '';
		}
	}
}


export default createStore({
	state: {
		posts: [],
		authors:[],
		authorProfile:{}
	},
	mutations: {
		addPostToArray(state, postObject){
			state.posts.push(postObject);
		},
		addAuthorToArray(state, authorObject){
			state.authors.push(authorObject);
		},
		setAuthor(state, obj){
			state.posts.forEach(element => {
				if(element.id == obj.postId && element.userId == obj.authorId){
				console.log('element')
					state.authorProfile = element;
				}
			});
		},
		resetAuthorObject(state){
			state.authorProfile = {};
		}
	},
	actions: {
		getPosts(context){
			fetch('https://jsonplaceholder.typicode.com/posts/')
			.then((response)=>{
				if(response.ok){ return response.json(); }
			})
			.then(responseData => {
				responseData.forEach(item => {
					context.dispatch('getUser', {userId: item.userId, post: item});
				});
			}).catch(er => {
				console.log(er);
			});
		},
		getUser(context, payload){
			fetch(`https://jsonplaceholder.typicode.com/users/${payload.userId}`)
			.then((response)=>{
				if(response.ok){ return response.json(); }
			})
			.then(responseData => {
				let item = payload.post
				item.userData = responseData;
				context.commit('addAuthorToArray', responseData);
				context.commit('addPostToArray', item);
			}).catch(er => {
				console.log(er);
			});
		},
		openAuthorProfile(context, object){
			context.commit('setAuthor', object);
		},
		closeAuthorProfile(context){
			context.commit('resetAuthorObject')
		}
	},
	getters:{
		getAllPosts(state){
			return state.posts;
		},
		isAuthorProfileSet(state){
			return !(Object.keys(state.authorProfile).length === 0 && state.authorProfile.constructor === Object);
		},
		getAuthorProfile(state){
			return state.authorProfile;
		},
		getAllAuthors(state){
			return state.authors;
		}
	},
	modules: {
		auth: authentificationModule
	}
})
