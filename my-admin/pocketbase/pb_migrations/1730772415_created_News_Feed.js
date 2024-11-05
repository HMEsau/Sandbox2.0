/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ng4uap8sk2x7jc6",
    "created": "2024-11-05 02:06:55.095Z",
    "updated": "2024-11-05 02:06:55.095Z",
    "name": "News_Feed",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "alvrhglv",
        "name": "Content",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nzj6je0c",
        "name": "Links",
        "type": "url",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ng4uap8sk2x7jc6");

  return dao.deleteCollection(collection);
})
