import http  from 'http';

const options = {
  hostname: '0.0.0.0',
  port: process.env.PORT || 3000,
  path: '/healthcheck',
  method: 'GET',
};

const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d);
    if(`${res.statusCode}` == '200') {
      process.exit(0)
    }
  });
});

req.on('error', error => {
  console.error(error);
  process.exit(1)
});

req.end();
