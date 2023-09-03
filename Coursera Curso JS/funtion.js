
		/* Name this external file gallery.js */
        function upDate(previewPic) {
            // Cambiar la URL de la imagen de fondo y el texto en el div con id = "image"
            var imageDiv = document.getElementById("image");
            imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
            imageDiv.innerHTML = previewPic.alt;
        }
        function unDo() {
            // Restaurar la URL de la imagen de fondo y el texto en el div con id = "image"
            var imageDiv = document.getElementById("image");
            imageDiv.style.backgroundImage = "url('')";
            imageDiv.innerHTML = "Hover over an image below to display here.";
        }
        
            