const express = require('express')
const router = express.Router()
const categoriasCtrl = require('../controllers/categoriasCtrl') 
const { check } = require('express-validator')

const multer = require('multer')
const { Console } = require('console')

router.get("/", //(req,res)=>{  res.send("base")  }
    categoriasCtrl.categoriasListar
    // res.send(categoriasCtrl.categoriasCtrlListar())
//}
)

router.get("/:id/:nombre", (req,res)=>{    }
    //categoriasCtrl.categoriasCtrlObtener
)

router.post("/", 
        [
            check("nombre", "Nombre Obligatorio").not().isEmpty(),
            check("nombre", "longitud de nombre No Valida").isLength({min:4 , max: 25 })
        ],
        // (req,res) => res.send("post")
        categoriasCtrl.categoriasGuardar
)

router.delete("/:id",
        categoriasCtrl.categoriaEliminar
)


const upload = multer({ dest: 'public/images/' })
router.put("/imagen/:id", 
                upload.single('imagen'), 
                categoriasCtrl.categoriaImagen
 )

const uploadVideo = multer({ dest: 'public/videos/' })
router.put("/video/:id",
    uploadVideo.single('video'),
    categoriasCtrl.categoriaVideo
)


module.exports = router 