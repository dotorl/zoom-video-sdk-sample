import { getExploreName } from '../utils/platform';

export const devConfig = {
  sdkKey: 'QLPJ8dpEreZJllMY8qymS5Q3R8BRUdUxQuJQ',
  sdkSecret: 'wMk1jdZlZY71nKiHnnjfftmYdrr1WfR96yiV',
  webEndpoint: 'zoom.us',
  topic: 'choks_topic',
  name: `${getExploreName()}-${Math.floor(Math.random() * 1000)}-inReact`,
  password: 'aabbccdd',
  signature: '',
  sessionKey: '',
  userIdentity: '',
  // role = 1 to join as host, 0 to join as attendee. The first user must join as host to start the session
  role: 1
};
