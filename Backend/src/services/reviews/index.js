import express from 'express';
import uniqid from 'uniqid';
import { readReviews, writeReviews } from '../../lib/utils.js';
import { reviewsValidation } from './validation.js';

const reviewsRouter = express.Router();

// POST
reviewsRouter.post('/', reviewsValidation, async (req, res, next) => {
  try {
    const content = await readReviews();
    const newReview = {
      _id: uniqid(),
      ...req.body,
    };

    content.push(newReview);

    await writeReviews(content);

    res.send(newReview);
    console.log(content, 'review is here');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// GET ALL
reviewsRouter.get('/', async (req, res, next) => {
  try {
    const content = await readReviews();
    res.send(content);
  } catch (error) {
    next(error);
  }
});

// GET SINGLE
reviewsRouter.get('/:id', async (req, res, next) => {
  try {
    const content = await readReviews();
    const review = content.find((review) => review._id === req.params.id);
    if (review) {
      res.send(review);
    } else {
      res.status(404).send({
        message: `review with ${req.params.id} id not found!`,
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// DELETE
reviewsRouter.delete('/:id', async (req, res, next) => {
  try {
    const content = await readReviews();

    if (content.find((review) => review._id === req.params.id)) {
      const newReview = content.filter(
        (content) => content._id !== req.params.id
      );
      await writeReviews(newReview);
      res.send('Review has been DELETED');
    } else {
      res
        .status(404)
        .send({ message: `review with ${req.params.id} id not found!` });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//PUT/UPDATE
reviewsRouter.put('/:id', async (req, res, next) => {
  try {
    const content = await readReviews();
    console.log(content);

    if (content.find((review) => review._id === req.params.id)) {
      const review = content.findIndex(
        (review) => review._id === req.params.id
      );

      const previousReview = content[review];

      const updatedReview = {
        ...previousReview,
        ...req.body,
      };

      content[review] = updatedReview;

      await writeReviews(content);

      res.send(updatedReview);
    } else {
      res
        .status(404)
        .send({ message: `review with ${req.params.id} id not found!` });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default reviewsRouter;
