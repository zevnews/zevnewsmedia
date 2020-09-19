class Conversor {
	
	constructor(v1,v2)
	{
		this.v1 = v1;
		this.v2 = v2;
	}

	get potencia()
	{
		return this.convertePotencia();
	}

	set unit(v1)
	{
		this.v1 = v1;
	//	return this.convertePotencia();
		//console.log("lixo");
	}

	set medida(v2)
	{
		this.v2 = v2;
	}

	convertePotencia()
	{
		if (this.v1 == "hp")
		{

			 return (this.v2 * 0.7457).toFixed(2);
		}

		if (this.v1 = "kw")
		{
			return this.v2;
		}
	}
}

module.exports = Conversor;