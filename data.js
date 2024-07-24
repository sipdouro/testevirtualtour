var APP_DATA = {
  "scenes": [
    {
      "id": "0-sala",
      "name": "Sala",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": -0.5943840084994303,
        "pitch": 0.20726777939191443,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -2.640243242827598,
          "pitch": 0.14455513363933647,
          "rotation": 0,
          "target": "1-quarto"
        },
        {
          "yaw": 2.1529237476724408,
          "pitch": 0.20678617415837408,
          "rotation": 0,
          "target": "2-wc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-quarto",
      "name": "Quarto",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1359.5,
      "initialViewParameters": {
        "yaw": 1.1319004974744704,
        "pitch": 0.3097699232806299,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -0.710022845265847,
          "pitch": 0.2603899784078223,
          "rotation": 0,
          "target": "0-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-wc",
      "name": "WC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": -2.0246652137668413,
        "pitch": 0.009253665735323935,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 1.5200978647229029,
          "pitch": 0.2227169084425178,
          "rotation": 0,
          "target": "0-sala"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Teste",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
