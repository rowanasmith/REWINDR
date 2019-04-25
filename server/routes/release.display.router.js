router.get('/', (req, res) => {
    const queryText = `SELECT "projects"."name", "projects"."description", 
    "projects"."thumbnail", "projects"."website", 
    "projects"."github", "projects"."date_completed", 
    "tags"."name" AS "tag_id" FROM "projects" 
    JOIN "tags" ON "projects"."tag_id" = "tags"."id"
    ORDER BY "date_completed";`;
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT plant query', err);
        res.sendStatus(500);
      });
  });