urlApiTabla= '';
coinId=["1inch","algorand","apecoin","avalanche-2","axie-infinity","basic-attention-token","binancecoin","bitcoin","cardano","celsius-degree-token","chainlink","cosmos","crypto-com-chain","curve-dao-token","decentraland","eos","ethereum","fantom","filecoin","ftx-token","gmt-token","harmony","hedera-hashgraph","huobi-token","iota","kucoin-shares","litecoin","matic-network","monero","near","nexo","okb","pancakeswap-token","pax-gold","polkadot","ripple","smooth-love-potion","solana","terra-luna-2","the-sandbox","tron","uniswap"];


function cargarDatos(){
    let fila = document.getElementById("Tabla_Crypto");
    let contador = 0;
    for (let monedaLista of coinId){
        fetch(`https://api.coingecko.com/api/v3/coins/${monedaLista}`)
        .then(response => response.json())
        .then(data => {
                let plantilla = `<tr>
            <td>
                <div class="d-flex px-2">
                <div>
                    <img src=${data.image.thumb} class="avatar avatar-sm rounded-circle me-2" alt="logo">
                </div>
                <div class="my-auto">
                    <h6 class="mb-0 text-sm">${data.name}</h6>
                </div>
                </div>
            </td>
            <td>
                <p class="text-sm font-weight-bold mb-0">$ ${data.market_data.current_price.usd}</p>
            </td>
            <td>
                <span class="text-xs font-weight-bold">$ ${data.market_data.market_cap.usd}</span>
            </td>
            <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                    <span class="me-2 text-xs font-weight-bold">$ ${data.market_data.high_24h.usd}</span>
                </div>
            </td>
            <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                    <span class="me-2 text-xs font-weight-bold">$ ${data.market_data.low_24h.usd}</span>
                </div>
            </td>
            <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                    <span class="me-2 text-xs font-weight-bold precio">$ ${data.market_data.price_change_24h}</span>
                </div>
            </td>
            <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                    <span class="me-2 text-xs font-weight-bold porcentual">${data.market_data.price_change_percentage_24h} %</span>
                </div>
            </td>
            </tr>
            `
            fila.innerHTML += plantilla;  

            let precio = document.getElementsByClassName(" me-2 text-xs font-weight-bold precio");
            if(parseFloat(precio[contador].innerText.split(" ")[1])>0){
                console.log(precio[contador].classList.add("text-success"));

            }else if(parseFloat(precio[contador].innerText.split(" ")[1])<0){
                console.log(precio[contador].classList.add("text-danger"));
            }

            let porcentual = document.getElementsByClassName(" me-2 text-xs font-weight-bold porcentual");
            if(parseFloat(porcentual[contador].innerText.split(" ")[0])>0){
                console.log(porcentual[contador].classList.add("text-success"));

            }else if(parseFloat(porcentual[contador].innerText.split(" ")[0])<0){
                console.log(porcentual[contador].classList.add("text-danger"));
            }
            contador++;
                   
        })
         
    }
        
}

cargarDatos();

