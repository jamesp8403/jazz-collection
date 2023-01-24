const express   = require('express');
const app       = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Library API',
            version: '1.0.0'
        }
    },
    apis: ['app.js']
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * /records:
 *  get:
 *      description: Get all records
 *      responses:
 *          200:
 *              description: Success
 */

app.get('/records', (req,res) => {
    res.send([
        {
            title: 'Kind of Blue',
            artist: 'Miles Davis',
            year: '1959'
        }
    ]);
});

app.listen(3000, () => {
    console.log('Running on port 3000');
})