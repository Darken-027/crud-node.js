const categorias = [
    {id: 1, nombre: "Categoria 1"},
    {id: 2, nombre: "Categoria 2"},
    {id: 3, nombre: "Categoria 3"},
];

const create = (req, res) => {
    res.render("categorias/create");
};

const store = (req, res) => {
    const { nombre } = req.body; 

    const categoria = {
        id: Date.now(),
        nombre,
    };

    categorias.push(categoria);

    res.redirect("/categorias");
};

const index = (req, res) => {
    res.render("categorias/index", { categorias });
};

const show = (req, res) => {
    const {id} = req.params;

    const categoria = categorias.find((categoria) => categoria.id == categoria.id);

    if(!categoria) {
        return res.status(404).send("No existe la categoria");
    };

    res.render("categorias/show", { categoria });
};

const edit = (req, res) => {
    const { id } = req.params
    
    const categoria = categorias.find((categoria) => categoria.id == id); 
    if(!categoria) {
        return res.status(404).send("No existe la categoria");
    };

    res.render("categorias/edit", { categoria });   
}

const update = (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;

    const categoria = categorias.find((categoria) => categoria.id == id); 

    if(!categoria) {
        return res.status(404).send("No existe la categoria");
    };

    categoria.nombre = nombre;

    res.redirect("/categorias");
};

module.exports = { 
    create,
    store,
    index,
    show,
    edit,
    update,
};