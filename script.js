function generateSuite(){
    let num = Math.floor(Math.random()*9000)+1000;
    document.getElementById("suiteNumber").innerHTML = "TB-"+num;
}

function showShipmentStatus(){
    alert("Shipment tracking coming soon.");
}
