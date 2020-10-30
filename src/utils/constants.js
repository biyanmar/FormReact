export const theme = {
  color: {
    w: '#FFFFFF',
    k: '#000000',
    p1: '#D31145',
    p2: '#596C80',
    p3: '#554344',
    p4: '#363E3F',
    s1: '#E86487',
    s2: '#FBBF56',
    s3: '#97CB5D',
    s4: '#46D3BD',
    s5: '#22A8DA',
    s6: '#9962D2',
    t2: '#B8123E',
    b2: '#FAF9F3',
    b3: '#F0EEE1',
    b4: '#DBDAD4',
    b5: '#B3B1A8',
    b6: '#6F6E68',
    b8: '#302F2C',
    b9: '#292025',
    u2: '#FF5500',
    u3: '#405B70',
    u4: '#769FAB',
  },
};

export const KEYCLOAK_CONFIG = {
  realm: 'master',
  url: process.env.GATSBY_KEYCLOAK_URL,
  clientId: process.env.GATSBY_KEYCLOAK_CLIENT_ID,
};
