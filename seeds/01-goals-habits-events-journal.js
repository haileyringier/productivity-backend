
exports.seed = async knex => {
  await knex('goals').del()
  await knex('events').del()
  await knex('journal').del()
  await knex('habits').del()
  
  await knex('goals').insert([
        {description: 'Create backend', user_id: 1},
        {description: 'do laundry', user_id: 1},
      ]);
  await knex('habits').insert([
    {title: 'Read', goalDays: 4, currentDays: 0, user_id: 1},
    {title: 'Meditate', goalDays: 7, currentDays: 0, user_id: 1},
  ]);
  await knex('events').insert([
    {title: 'Study Group', content: 'Practice Algorithms with friends', date: '2020-09-19' , startTime: '10:00:00AM' , endTime: '11:30:00AM', user_id: 1},
    {title: 'Drinks', content: 'Happy Hour with Friends', date:'2020-09-18', startTime: '05:30:00PM', endTime: '06:30:00PM', user_id: 1},
  ]);
  await knex('journal').insert([
    {date: '2020-09-12', entry: 'Today I felt really productive.', user_id: 1},
    {date: '2020-08-31', entry: 'Today just flew by!', user_id: 1},
  ]);
};