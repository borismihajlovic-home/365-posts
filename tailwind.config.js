module.exports = {
	purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors:{
				yellow:{
					450:'#ffde00'
				},
				white:{
					'09': 'rgba(255,255,255,0.9)',
					'1': 'rgba(255,255,255,1)'
				}
			},
			maxWidth:{
				'350px': '350px',
				'750px': '750px'
			}
		},
	},
	variants: {
		extend:{
			opacity: ['disabled'],
      		textColor: ['disabled'],
		}
	},
	plugins: [],
}
