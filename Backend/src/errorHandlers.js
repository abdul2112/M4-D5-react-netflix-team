export const catchAllErrorHandler = (err, req, res, next) => {
  console.log({ err });
  err
    ? res.status(err.status).send(err.message)
    : res.status(500).send('Generic Server Error');
};
