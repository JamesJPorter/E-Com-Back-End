const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [
        { model: Product }
      ]
    })
    res.status(200).json(tagData)
  }catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  console.log(req.params.id)
  try {
    const tagById = await Tag.findOne({ where: {id: req.params.id},
    include: [
      {model: Product}
    ]
  })
    console.log(tagById)
    res.status(200).json(tagById)
  } catch (err){
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((tag) => {
    // if there's product tags, we need to create pairings to bulk create in the ProductTag model
    if (req.body.productIds.length) {
      const productTagIdArr = req.body.tagIds.map((tag_id) => {
        return {
          product_id: product.id,
          tag_id,
        };
      });
      console.log(productTagIdArr)
      return ProductTag.bulkCreate(productTagIdArr);
    }
    // if no product tags, just respond
    res.status(200).json(product);
  })
  .then((productTagIds) => res.status(200).json(productTagIds))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const udpateTag = Tag.update({ tag_name: req.body}, {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(udpateTag)
  } catch (err) {
    res.status(400).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.destroy({ where: {id: req.params.id}})
    res.status(200).json(deleteTag)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
