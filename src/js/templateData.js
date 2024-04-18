const HEAD = {
    "title": "Pixel Art"
}

const INTRODUCTION = {
    "title" : "Pixel Art",
    "paragraph": "Auf dieser Webseite kannst du deine eigene Pixelkunstwerte erstellen!"
};

const TOOLS = {
  "title" : "Werkzeuge, um dein Bild zu erstellen",
    "gridSize" : {
      "label": "Welche quadratische Pixelgröße soll dein Bild haben?"
    },
    "pixelColor": {
      "label": "Mit welcher Farbe möchtest du färben?"
    },
    "fill": {
      "label": "Möchtest du deine benachbarten Pixel mit den angeklickten Pixel im Bild färben?"
    },
    "reset": {
      "label": "Ich möchte alle Pixel zurücksetzen",
      "buttonText": "Zurücksetzen"
    }
};

const CREATE_PICTURE = {
    "title": "Dein Kunstwerk erstellen",
    "download": {
        "fileName": {
            "label": "Gebe den Dateinamen für dein Bild ein"
        },
        "fileType": {
            "label": "Welcher Dateityp soll verwendet werden?"
        },
        "submitText": "Bild herunterladen"
    }
}

function templateData() {
    return {
        HEAD,
        INTRODUCTION,
        TOOLS,
        CREATE_PICTURE
    };
}

module.exports = templateData();