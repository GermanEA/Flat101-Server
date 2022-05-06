import express from 'express';
import VError from 'verror';
import methodOverride from 'method-override';
import _ from 'lodash';

import expressCorsFactory from './express.cors.js';
import routes from '../routes.js';

export default async function ({ app }) {

  expressCorsFactory(app);

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(methodOverride());

  routes(app);
  app.get('/health', function (req, res) {
    res.status(200).send({success: true});
  });
  app.get('*', function (req, res) {
    res.status(404).send();
  });

   app.use(function (err, req, res, next) {

    if (err instanceof VError.WError) {
      console.error('Full WError:', VError.fullStack(err));

      return res.status(err.statusCode || 400).json(err);
    } else if (err instanceof VError) {
      console.error('Full VError:', VError.fullStack(err));

      return res.status(err.statusCode || 500).send();
    } else {
      console.error('Error', (err.response && err.response.error) || err);
      
      return res.status(500).send();
    }
  });
}
