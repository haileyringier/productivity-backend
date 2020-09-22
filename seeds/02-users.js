exports.seed = async knex => {
  // await knex('user').del()
  
  await knex('user').insert([
        {name: "Admin", username: "Admin", password_digest: "Admin"},
  ])
}
