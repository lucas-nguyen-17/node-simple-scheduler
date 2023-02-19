const schedule = require('node-schedule');
const task1 = require('./tasks/task-1');
const task2 = require('./tasks/task-2');

console.log('init scheduleJob');

const job1 = schedule.scheduleJob('2 15 * * *', function(){
  console.log('----Execute a cron job 14:58');
  task1.run();
});

const job2 = schedule.scheduleJob('51 * * * *', function(){
  console.log('----Execute a cron job at min 51');
  task2.run();
});
