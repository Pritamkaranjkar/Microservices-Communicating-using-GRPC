const grpc = require('@grpc/grpc-js');
const { CalculatorClient } = require('./calculator_grpc_pb');
const { Request } = require('./calculator_pb');


const client = new CalculatorClient('localhost:50051', grpc.credentials.createInsecure());


const request = new Request();
request.setNum1(10);
request.setNum2(5);
request.setOperator('*');
client.calculate(request, (error, response) => {
    if (!error) {
        console.log(`Result: ${response.getResult()}`);
    } else {
        console.error(error.message);
    }
});
