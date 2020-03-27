var APP_DATA = {
  "scenes": [
    {
      "id": "0-fachada",
      "name": "Fachada",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.258456665229236,
          "pitch": 0.022381818732682746,
          "rotation": 7.0685834705770345,
          "target": "2-lateral"
        },
        {
          "yaw": -2.191276877072191,
          "pitch": 0.09350182588055489,
          "rotation": 0,
          "target": "1-jardim-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6567414591672005,
          "pitch": -0.6769215351710294,
          "title": "Info<br>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-jardim-1",
      "name": "Jardim 1",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0433673056373394,
          "pitch": 0.13878417179236102,
          "rotation": 0,
          "target": "0-fachada"
        },
        {
          "yaw": -1.4014533234310722,
          "pitch": 0.043984318266165445,
          "rotation": 7.0685834705770345,
          "target": "2-lateral"
        },
        {
          "yaw": 2.982687061766846,
          "pitch": -0.11302398684930104,
          "rotation": 7.0685834705770345,
          "target": "6-jardim-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-lateral",
      "name": "Lateral",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5865417656269294,
          "pitch": -0.09577324588363467,
          "rotation": 0,
          "target": "1-jardim-1"
        },
        {
          "yaw": -2.509464261077124,
          "pitch": -0.03399981801064911,
          "rotation": 7.0685834705770345,
          "target": "3-posterior"
        },
        {
          "yaw": 0.5043210611810505,
          "pitch": -0.02238647692473883,
          "rotation": 0,
          "target": "4-jardim-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-posterior",
      "name": "Posterior",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6348834752854842,
          "pitch": 0.0184678325847063,
          "rotation": 4.71238898038469,
          "target": "2-lateral"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-jardim-3",
      "name": "Jardim 3",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5540877555110288,
          "pitch": 0.2449545025445481,
          "rotation": 0,
          "target": "2-lateral"
        },
        {
          "yaw": -0.5386117040600951,
          "pitch": 0.21043381837967878,
          "rotation": 0,
          "target": "5-jardim-2"
        },
        {
          "yaw": 0.34641347944261724,
          "pitch": 0.01096613444119754,
          "rotation": 0.7853981633974483,
          "target": "6-jardim-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-jardim-2",
      "name": "Jardim 2",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.013456222572181,
          "pitch": 0.12752124305873735,
          "rotation": 0.7853981633974483,
          "target": "4-jardim-3"
        },
        {
          "yaw": 2.5643640576290556,
          "pitch": 0.05475822846469036,
          "rotation": 0,
          "target": "6-jardim-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-jardim-4",
      "name": "Jardim 4",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4293291632233318,
          "pitch": 0.23172348798246745,
          "rotation": 5.497787143782138,
          "target": "1-jardim-1"
        },
        {
          "yaw": -3.0955144306012343,
          "pitch": 0.010489045934962249,
          "rotation": 0.7853981633974483,
          "target": "7-jardim-5"
        },
        {
          "yaw": -1.62451299419455,
          "pitch": 0.20727256040582454,
          "rotation": 0.7853981633974483,
          "target": "4-jardim-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-jardim-5",
      "name": "Jardim 5",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3232801164429695,
          "pitch": 0.06968702582873121,
          "rotation": 3.9269908169872414,
          "target": "6-jardim-4"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
