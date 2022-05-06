const { createBluetooth } = require('node-ble');


const BLEconection = async () => {

    const { bluetooth, destroy } = createBluetooth();
    const adapter = await bluetooth.defaultAdapter();

    if (! await adapter.isDiscovering()) {
        await adapter.startDiscovery();
    }

    const device = await adapter.getDevice('34:81:F4:72:DA:BB');
    
    const gattServer = await device.gatt();

   const service2 = await gattServer.getPrimaryService('c61cfd1623457c44d5bff2226273da4f');

    console.log(device)

}

module.exports = BLEconection;