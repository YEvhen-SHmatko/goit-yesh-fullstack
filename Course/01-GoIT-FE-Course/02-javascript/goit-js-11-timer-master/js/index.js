'use strict'

import {CountdownTimer} from './timer.js'
import refs from './refs.js'
const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('10 19, 2019 20:37:00'),
  });
  timer.initTimer(refs.body)