const Event = require("../models/Event.model");
const User = require("../models/User.model");
const debug = require("debug")("app:post-controller");

const controller = {};

//creacion de post
controller.create = async (req, res) => {
  try {
    const { title, description, image } = req.body;
    const { _id: userId } = req.user;



    //creamos un nuevo evento
    const event = new Event({
      title: title,
      description: description,
      image: image,
      user: userId
    });

    const newEvent = await event.save(); //guarda el evento

    if (!newEvent) {
      return res.status(409).json({ error: "Ocurrio un error al crear el evento" });
    }

    return res.status(201).json(newEvent);
  } catch (error) {
    debug({ error });
    return res.status(500).json({ error: "Error interno de servidor" });
  }
}

//Peticiones publicas
controller.findAll = async (req, res) => {
  try {
    const events =
      await Event
        .find({ hidden: false })
        .populate("user", "username email")

    return res.status(200).json({ events });
  } catch (error) {
    debug({ error });
    return res.status(500).json({ error: "Error interno de servidor" });
  }
}
controller.findOwn = async (req, res) => {
  try {
    const { _id: userId } = req.user;

    const events =
      await Event
        .find({ user: userId })
        .populate("user", "username email")

    return res.status(200).json({ events })
  } catch (error) {
    debug({ error });
    return res.status(500).json({ error: "Error interno de servidor" });
  }
}


controller.findPostsByUser = async (req, res) => {
  try {
    const { identifier } = req.params;

    const posts = await Event.find({ user: identifier, hidden: false });

    return res.status(200).json({ posts });
  } catch (error) {
    debug({ error });
    return res.status(500).json({ error: "Error interno de servidor" });
  }
}
controller.togglePostVisibility = async (req, res) => {
  try {
    const { identifier: postId } = req.params;
    const { _id: userId } = req.user;

    //Paso 01: Obtenemos el post
    //Paso 02: Verificamos la pertenencia del post al usuario
    const post = await Event.findOne({ _id: postId, user: userId });

    if (!post) {
      return res.status(404).json({ error: "Post no encontrado" });
    }

    //Paso 03: Modifico el valor
    post.hidden = !post.hidden;

    //Paso 04: Guardo los cambios
    await post.save();

    return res.status(200).json({ message: "Post actualizado" })
  } catch (error) {
    debug({ error });
    return res.status(500).json({ error: "Error interno de servidor" });
  }
}

controller.findOneById = async (req, res) => {
  try {
    const post = await Event
      .findOne({ _id: identifier, hidden: false })
      .populate("user", "username email")


    const event = await Event.findById(identifier);

    if (!event) {
      return res.status(404).json({ error: "Evento no encontrado" });
    }

    return res.status(200).json(event);
  } catch (error) {
    debug({ error });
    return res.status(500).json({ error: "Error interno de servidor" });
  }
}

module.exports = controller;