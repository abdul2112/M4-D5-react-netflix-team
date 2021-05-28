import express from 'express';
import { readMedia, writeMedia } from '../../lib/utils.js';
import uniqid from 'uniqid';
import { mediaValidation } from './validation.js';

const mediaRouter = express.Router();

// POST MEDIA
mediaRouter.post('/', mediaValidation, async (req, res, next) => {
  try {
    const content = await readMedia();
    const newMovie = {
      imdbID: uniqid(),
      ...req.body,
    };

    content.push(newMovie);

    await writeMedia(content);

    res.send(newMovie);
    console.log(content, 'post is here');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// GET ALL
mediaRouter.get('/', async (req, res, next) => {
  try {
    const content = await readMedia();

    res.send(content);
    console.log(content, 'get all media here');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// GET SINGLE
mediaRouter.get('/:imdbID', async (req, res, next) => {
  try {
    const content = await readMedia();
    const media = content.find((media) => media.imdbID === req.params.imdbID);
    if (media) {
      res.send(media);
    } else {
      res.status(404).send({
        message: `media with ${req.params.imdbID} imdbID not found!`,
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// PUT/UPDATE MEDIA
mediaRouter.put('/:imdbID', async (req, res, next) => {
  try {
    const content = await readMedia();
    console.log(content);

    if (content.find((media) => media.imdbID === req.params.imdbID)) {
      const media = content.findIndex(
        (media) => media.imdbID === req.params.imdbID
      );

      const previousMedia = content[media];

      const updatedMedia = {
        ...previousMedia,
        ...req.body,
      };

      content[media] = updatedMedia;

      await writeMedia(content);

      res.send(updatedMedia);
    } else {
      res
        .status(404)
        .send({ message: `media with ${req.params.imdbID} imdbID not found!` });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// DELETE MEDIA
mediaRouter.delete('/:imdbID', async (req, res, next) => {
  try {
    const content = await readMedia();

    if (content.find((media) => media.imdbID === req.params.imdbID)) {
      const newMedia = content.filter(
        (content) => content.imdbID !== req.params.imdbID
      );
      await writeMedia(newMedia);
      res.send('Media has been DELETED');
    } else {
      res
        .status(404)
        .send({ message: `media with ${req.params.imdbID} imdbID not found!` });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default mediaRouter;
