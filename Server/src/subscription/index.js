import { PubSub } from 'apollo-server';

import * as MESSAGE_EVENTS from './message';
import * as PRODUCT_EVENTS from './product';

export const EVENTS = {
  MESSAGE: MESSAGE_EVENTS,
  PRODUCT: PRODUCT_EVENTS,
};

export default new PubSub();
