jsons=[];
		async function fetchData() {
			const response = await fetch(
				"https://pokeapi.co/api/v2/pokemon/25", 
				{
					method: "GET"
				}
			);
			const json = await response.json();

			const reqData = await fetch(json.forms[0].url, {
					method: "GET"
			});

			const data = await reqData.json();

			res = '';
			res += `
			<h2>${data.id} : ${data.name}</h2></br>
			<img src="${data.sprites.front_default}"></br>
			<h2>Type : ${data.types[0].type.name}</h2>
			`;

			div = document.getElementById("data");
			div.innerHTML=res;
			div.style.display = "flex";
        }