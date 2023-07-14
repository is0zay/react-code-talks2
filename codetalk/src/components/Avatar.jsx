import React from 'react'

export default function Avatar() {
	const user = {
		name: 'Christopher Robin',
		imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6YMQLTJQKHu_ptClOW3VNFTP1KRLYSuTAmCe8JN1bKRL42b2AemxD_jp-b8s7cl3r_o&usqp=CAU',
		imageSize: 90,
	  };
	  
  return (
	<div>
	  <h1>{user.name}</h1>
	  <img src={user.imageUrl} alt="avatar" width={user.imageSize}/>
	</div>
  )
}
