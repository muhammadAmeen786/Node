// This module provides functions which can be used to retrieve information from the underline operating system.
// and we can interact with the OS.
let os = require('os');
console.log(os.arch()); // this will print architecture of our machine like x64 etc.
let cpu = os.cpus()
// console.log(cpu);
// this will print all the info about our cpu's. 
// like below.
/*
[
    {
      model: 'Intel(R) Core(TM) i5-1035G1 CPU @ 1.00GHz',
      speed: 1190,
      times: {
        user: 6116671,
        nice: 0,
        sys: 19106171,
        idle: 68651656,
        irq: 2425109
      }
    },
    {
      model: 'Intel(R) Core(TM) i5-1035G1 CPU @ 1.00GHz',
      speed: 1190,
      times: {
        user: 5922781,
        nice: 0,
        sys: 16881750,
        idle: 71069765,
        irq: 515812
      }
    },
    {
      model: 'Intel(R) Core(TM) i5-1035G1 CPU @ 1.00GHz',
      speed: 1190,
      times: {
        user: 6733828,
        nice: 0,
        sys: 14218828,
        idle: 72921609,
        irq: 531437
      }
    },
    {
      model: 'Intel(R) Core(TM) i5-1035G1 CPU @ 1.00GHz',
      speed: 1190,
      times: {
        user: 5672046,
        nice: 0,
        sys: 9837796,
        idle: 78364453,
        irq: 345703
      }
    },
    {
      model: 'Intel(R) Core(TM) i5-1035G1 CPU @ 1.00GHz',
      speed: 1190,
      times: {
        user: 4853828,
        nice: 0,
        sys: 23201609,
        idle: 65818843,
        irq: 394781
      }
    },
    {
      model: 'Intel(R) Core(TM) i5-1035G1 CPU @ 1.00GHz',
      speed: 1190,
      times: {
        user: 4679562,
        nice: 0,
        sys: 15844062,
        idle: 73350671,
        irq: 351468
      }
    },
    {
      model: 'Intel(R) Core(TM) i5-1035G1 CPU @ 1.00GHz',
      speed: 1190,
      times: {
        user: 5382953,
        nice: 0,
        sys: 16097906,
        idle: 72393437,
        irq: 361875
      }
    },
    {
      model: 'Intel(R) Core(TM) i5-1035G1 CPU @ 1.00GHz',
      speed: 1190,
      times: {
        user: 5319281,
        nice: 0,
        sys: 11098546,
        idle: 77456468,
        irq: 310640
      }
    }
  ]

  */
 console.log(os.hostname());
 console.log(os.totalmem());
 let totalTime = os.uptime();
 totalTime = totalTime/ (60*60);
 console.log("total time from last reboot is " + " " + totalTime + " hours" );
 console.log(os.userInfo());