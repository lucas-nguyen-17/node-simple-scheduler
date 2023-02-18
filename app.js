const schedule = require('node-schedule');
const task1 = require('./tasks/task-1');
const task2 = require('./tasks/task-2');

console.log('init scheduleJob');
const exJob = schedule.scheduleJob('42 * * * *', function(){
  console.log('----Execute a cron job when the minute is 42 (e.g. 19:42, 20:42, etc.).');
});

const job1 = schedule.scheduleJob('*/5 * * * * *', function(){
  console.log('----Execute a cron job every 5 seconds');
  task1.run();
});

const job2 = schedule.scheduleJob('0 06 14 * * *', function(){
  console.log('----Execute a cron job at 2:06 PM');
  task2.run();
});
