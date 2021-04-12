import { createStore } from 'vuex'

export default createStore({
	state: {
		posts: [],
		authors:[],
		authorId: null
	},
	mutations: {
		addPostToArray(state, postObject){
			state.posts.push(postObject);
		},
		addAuthorToArray(state, authorObject){
			state.authors.push(authorObject);
		},
		setAuthorId(state, authorId){
			state.authorId = authorId;
			console.log(state.authorId);
		},
		resetAuthorId(state){
			state.authorId = null;
		}
	},
	getters:{
		getAllPosts(state){
			return state.posts;
		},
		getAuthorId(state){
			return state.authorId;
		}
	},
	actions: {
	},
	modules: {
	}
})
