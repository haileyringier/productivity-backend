
exports.seed = async knex => {
  await knex('goal').del()
  await knex('event').del()
  await knex('journal').del()
  await knex('habit').del()
  
  await knex('goal').insert([
        {description: 'Create backend'},
        {description: 'do laundry'},
      ]);
  await knex('habit').insert([
    {title: 'Read', goalDays: 4, currentDays: 0},
    {title: 'Meditate', goalDays: 7, currentDays: 0},
  ]);
  await knex('event').insert([
    {title: 'Study Group', content: 'Practice Algorithms with friends', date: '2020-09-19' , startTime: '10:00:00AM' , endTime: '11:30:00AM'},
    {title: 'Drinks', content: 'Happy Hour with Friends', date:'2020-09-18', startTime: '05:30:00PM', endTime: '06:30:00PM' },
  ]);
  await knex('journal').insert([
    {date: '2020-09-12', entry: 'Today I felt really productive.'},
    {date: '2020-08-31', entry: 'Today just flew by!'},
  ]);
};
