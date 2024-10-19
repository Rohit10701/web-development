
  
  export default async function DynamicContent() {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return (
	  <div>
		<h2>Dynamic Content</h2>
	  </div>
	);
  }