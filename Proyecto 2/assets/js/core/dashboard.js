ListaMonedas=["1inch","algorand","apecoin","avalanche-2","axie-infinity","basic-attention-token","binancecoin","bitcoin","cardano","celsius-degree-token","chainlink","cosmos","crypto-com-chain","curve-dao-token","decentraland","eos","ethereum","fantom","filecoin","ftx-token","gmt-token","harmony","hedera-hashgraph","huobi-token","iota","kucoin-shares","litecoin","matic-network","monero","near","nexo","okb","pancakeswap-token","pax-gold","polkadot","ripple","smooth-love-potion","solana","terra-luna-2","the-sandbox","tron","uniswap"];
let hoy = new Date();
ahora = Math.floor(hoy.getTime()/1000); //fecha de ahora
menos2Meses = 1652590800 //Fecha del 15 de mayo del 2022 a las 00h00m
datos= [];
Grafico=1;

window.addEventListener('DOMContentLoaded',(event) => {
  //document.querySelector('div.input-group > select')
  loadContent(ListaMonedas);
})


let loadContent = (monedaLista) =>{
  for(let moneda of monedaLista){
    let opt = document.createElement("option");
    opt.value = moneda;
    opt.innerHTML = moneda;

    document.querySelector('div.input-group > select').appendChild(opt);
  }
}

let cargarDatos = async() =>{
  let selectedCoin = document.querySelector('div.input-group > select').value;
  if(selectedCoin == "Seleccione una criptomoneda"){
    return -1;
  }
  await fetch(`https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart/range?vs_currency=usd&from=${menos2Meses}&to=${ahora}`)
  .then(respose => respose.json())
  .then(data => {
      contador = 0;
      let subFecha = [];
      let datosOrg=[];
      for (precio of data.prices){
          contador ++;
          let timestamp = precio[0];
          let fechaJSON = new Date (timestamp);
          if(contador%24 != 0){
              subFecha.push(precio[1]);           
          }else if(contador%24 == 0){
              subFecha.push(precio[1]);
              //datosOrg.x=fechaJSON;
              datosOrg.push(parseInt(timestamp),parseFloat(subFecha[0].toFixed(3)),parseFloat(Math.max.apply(Math,subFecha).toFixed(3)),
              parseFloat(Math.min.apply(Math,subFecha).toFixed(3)),parseFloat(subFecha[23].toFixed(3)));
              //console.log(JSON.stringify(datosOrg));
              datos.push(datosOrg);
              datosOrg= [];
              subFecha=[];
              
          }
      }
      
  });
  generarGraficoPrecio(datos,selectedCoin);
}


function generarGraficoPrecio(datosPrecio,selectedCoin){

    if(Grafico==1){
    var options = {
      series: [{
      data: datosPrecio,
      }],
      chart: {
        type: 'candlestick'
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      },
      title: {
        text: `Historial de precios del ${selectedCoin}`,
        align: 'center'
      }
    };
    console.log(options);
  
    var chart = new ApexCharts(document.querySelector("#Precio"), options);
    chart.render();
    Grafico --;
    }else if(Grafico == 0){
      window.location.reload()
      Grafico++;
    }
  
  
  
}
