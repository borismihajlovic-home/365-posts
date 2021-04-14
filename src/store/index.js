import { createStore } from 'vuex'

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
					state.authorProfile = element;
				}
			});
		},
		resetAuthorId(state){
			state.authorProfile = {};
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
		}
	},
	actions: {
	},
	modules: {
	}
})
