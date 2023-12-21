// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var calculator_pb = require('./calculator_pb.js');

function serialize_calculator_Request(arg) {
  if (!(arg instanceof calculator_pb.Request)) {
    throw new Error('Expected argument of type calculator.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_Request(buffer_arg) {
  return calculator_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_Response(arg) {
  if (!(arg instanceof calculator_pb.Response)) {
    throw new Error('Expected argument of type calculator.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_Response(buffer_arg) {
  return calculator_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var CalculatorService = exports.CalculatorService = {
  calculate: {
    path: '/calculator.Calculator/Calculate',
    requestStream: false,
    responseStream: false,
    requestType: calculator_pb.Request,
    responseType: calculator_pb.Response,
    requestSerialize: serialize_calculator_Request,
    requestDeserialize: deserialize_calculator_Request,
    responseSerialize: serialize_calculator_Response,
    responseDeserialize: deserialize_calculator_Response,
  },
};

exports.CalculatorClient = grpc.makeGenericClientConstructor(CalculatorService);
